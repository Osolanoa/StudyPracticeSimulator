/* Run: node tests/ccar-p-dedup-v3.test.js
 * CCAR-P v3: deduplicated bank, stable practice groups and safe progress migration.
 * Source answer keys remain THIRD-PARTY, not Anthropic-verified.
 */
'use strict';
const cssBundle = require('fs').readFileSync(require('path').join(__dirname, '..', 'css', 'app.css'), 'utf8'); // V28: index.html loads one built stylesheet
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const read=file=>fs.readFileSync(path.join(root,file),'utf8');
const source=read('courses/ccar-p/questions.js');
const configSource=read('courses/ccar-p/config.js');
const loader=read('js/loader.js');
const app=read('js/app.js');
const storage=read('js/storage.js');
const html=read('index.html');
const audit=read('courses/ccar-p/DEDUP_AUDIT_V3.md');
const sandbox={window:{}};
vm.runInNewContext(configSource+'\n'+source,sandbox);
const CFG=sandbox.window.COURSE_CONFIG;
const questions=sandbox.window.COURSE_QUESTIONS;
const ids=new Set(questions.map(q=>q.id));

assert.equal(questions.length,126,'163 source questions minus 37 redundant entries');
assert.equal(ids.size,126,'All canonical IDs must be unique');
assert.equal(Object.keys(CFG.legacyQuestionAliases||{}).length,37);
assert.equal(CFG.practiceRecordsKey,'practiceTestsV3');
assert.equal(CFG.version,'2026-11-24');
assert.equal(CFG.practiceQuestionIds.length,126);
assert.equal(new Set(CFG.practiceQuestionIds).size,126);
assert.ok(CFG.practiceQuestionIds.every(id=>ids.has(id)));
assert.equal(CFG.questionsPerPractice,10);
assert.equal(Math.ceil(questions.length/CFG.questionsPerPractice),13);
const groups=[];
for(let i=0;i<CFG.practiceQuestionIds.length;i+=10)groups.push(CFG.practiceQuestionIds.slice(i,i+10));
assert.equal(groups.length,13);
assert.ok(groups.slice(0,12).every(g=>g.length===10));
assert.equal(groups[12].length,6);
assert.deepEqual(Array.from(CFG.examQuestionCounts),[30,50,100,126]);
assert.equal(Math.max(...CFG.examQuestionCounts),126);
assert.ok(ids.has('CCARP-139'),'The one unique question in the 126–163 suffix remains');

const norm=x=>String(x).normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim().replace(/\s+/g,' ');
const stemMap=new Map();
for(const q of questions){
  assert.ok(q.domain&&q.id&&q.question&&q.options&&q.correctAnswers&&q.optionExplanations);
  assert.ok(q.options.every(o=>o.id&&o.text&&q.optionExplanations[o.id]),q.id+' lacks option rationale');
  assert.ok(q.correctAnswers.every(id=>q.options.some(o=>o.id===id)),q.id+' has a dangling correct answer');
  const k=norm(q.question);
  assert.ok(!stemMap.has(k),'Duplicated question text: '+q.id+' and '+stemMap.get(k));
  stemMap.set(k,q.id);
}
const tokens=q=>new Set(norm(q.question).split(' ').filter(t=>t.length>=3));
const arr=questions.map(q=>({id:q.id,ts:tokens(q)}));
for(let i=0;i<arr.length;i++){
  for(let j=i+1;j<arr.length;j++){
    const A=arr[i].ts,B=arr[j].ts;
    let shared=0;for(const token of A)if(B.has(token))shared++;
    const similarity=shared/(A.size+B.size-shared);
    assert.ok(similarity<.82,'Very similar stems may be a remaining duplicate: '+arr[i].id+'/'+arr[j].id);
  }
}
for(const [removed,kept] of Object.entries(CFG.legacyQuestionAliases)){
  assert.ok(!ids.has(removed),'Removed duplicate should not be active: '+removed);
  assert.ok(ids.has(kept),'Canonical question must exist: '+kept);
  assert.ok(audit.includes(removed)&&audit.includes(kept),'Audit record missing: '+removed);
}
assert.equal(new Set(Object.values(CFG.legacyQuestionAliases)).size,37);
for(const id of ['CCARP-130','CCARP-134','CCARP-135','CCARP-138','CCARP-144','CCARP-158']){
  assert.ok(ids.has(id),'Preserve cleaner PDF transcription '+id);
}
for(const id of ['CCARP-009','CCARP-014','CCARP-030','CCARP-055','CCARP-059','CCARP-060']){
  assert.ok(!ids.has(id),'Discard contaminated/less-complete duplicate '+id);
}

/* Run the real progress-migration function in isolation. It must never
 * destroy v1/v2 group scores or overwrite valid canonical question history. */
const from=app.indexOf('function migrateDuplicateQuestionProgress(){');
const to=app.indexOf('migrateDuplicateQuestionProgress();',from);
assert.ok(from>=0 && to>from,'Real migration function must be available');
const migrationCode=app.slice(from,to);
const history={
  'CCARP-009':{attempts:2,correct:1,incorrect:1},
  'CCARP-151':{attempts:4,correct:4,incorrect:0},
  'CCARP-004':{attempts:3,correct:1,incorrect:2}
};
let bookmarks=['CCARP-009','CCARP-151','CCARP-004','CCARP-139'];
const archivedV2={1:{completed:true,latestScore:8}};
let writes=0;
const S={
  get(key,fallback){return key==='history'?history:key==='bookmarks'?bookmarks:key==='practiceTestsV2'?archivedV2:fallback},
  set(key,value){writes++;if(key==='bookmarks')bookmarks=value;else if(key==='history')Object.assign(history,value);}
};
const migrate=new Function('CFG','S',migrationCode+';return migrateDuplicateQuestionProgress;')(CFG,S);
migrate();
assert.equal(history['CCARP-130'].attempts,2,'Lost progress from a removed duplicate');
assert.equal(history['CCARP-004'].attempts,3,'Do not overwrite existing canonical progress');
assert.equal(history['CCARP-009'].attempts,2,'Keep original historical entry');
assert.deepEqual(bookmarks,['CCARP-130','CCARP-004','CCARP-139']);
assert.equal(archivedV2[1].latestScore,8,'Old v2 records must remain archived');
const writesAfterFirst=writes;
migrate();
assert.equal(writes,writesAfterFirst,'Migration must be idempotent');
const otherCourse={...CFG,id:'az900'};
const blocked=new Function('CFG','S',migrationCode+';return migrateDuplicateQuestionProgress;')(otherCourse,S);
blocked();
assert.equal(writes,writesAfterFirst,'No cross-course history migration');

assert.ok(storage.includes('practiceTestsV3: \x27practice_tests_v3\x27'));
assert.ok(storage.includes('\x27practiceTestsV2\x27'));
assert.ok(loader.includes('questionCount: 126'));
assert.ok(loader.includes("practiceRecordsKey: 'practiceTestsV3'"));
assert.ok(loader.includes("=== 'practiceTestsV3' ? '_practice_tests_v3'"));
assert.ok(loader.includes("src === './courses/ccar-p/config.js'"));
assert.ok(loader.includes("src === './courses/ccar-p/questions.js'"));
assert.ok(loader.includes("src === './js/storage.js'"));
assert.ok(app.includes("['practiceTestsV2','practiceTests']"));
assert.ok(html.includes('js/loader.js?v=polish-v29-20261126'));
assert.ok(cssBundle.includes('css/cosmic-lite.css'),'Photographic background unchanged');
assert.ok(loader.includes('questionCount: 200')&&loader.includes('questionCount: 170'),'Other courses unchanged');
console.log('PASS: 126 unique CCAR-P questions; 37 removals; 13 practice tests; archived scores; bookmarks/history safe.');
