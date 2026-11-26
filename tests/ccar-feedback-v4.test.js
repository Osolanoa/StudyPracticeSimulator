/* CCAR-P clean concise feedback. Run: node tests/ccar-feedback-v4.test.js */
'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const bankSource=read('courses/ccar-p/questions.js');
const configSource=read('courses/ccar-p/config.js');
const app=read('js/app.js');
const context={window:{}};
vm.runInNewContext(configSource+'\n'+bankSource,context);
const CFG=context.window.COURSE_CONFIG;
const bank=context.window.COURSE_QUESTIONS;
assert.equal(bank.length,126);
assert.equal(CFG.practiceRecordsKey,'practiceTestsV3');
assert.equal(CFG.practiceQuestionIds.length,126);
assert.equal(CFG.conciseFeedback,true);
assert.ok(!CFG.disclaimer,'Remove requested dashboard disclaimer');
assert.ok(!/examice\.com|Anthropic CCAR-P Exam Practice Questions and Answers|\b11\/2[02]\/26\b/i.test(bankSource),'No PDF print metadata anywhere in the bank');
assert.ok(!/Study takeaway:|Review the full rationale|matches the intended solution/i.test(bankSource),'No legacy boilerplate');
let optionCount=0;
const allReasons=new Set();
for(const q of bank){
  assert.ok(q.explanation.length>=30&&q.explanation.length<=300,q.id+' concept summary must be concise');
  const options=q.options;
  assert.equal(Object.keys(q.optionExplanations).length,options.length);
  for(const o of options){
    const text=q.optionExplanations[o.id];
    const prefix=q.correctAnswers.includes(o.id)?'Correct — ':'Not selected — ';
    assert.ok(text.startsWith(prefix),q.id+' '+o.id+' label must match answer key');
    assert.ok(text.length>prefix.length+15&&text.length<=250,q.id+' '+o.id+' explanation must be substantive and concise');
    assert.ok(!allReasons.has(text),q.id+' '+o.id+' duplicates another option rationale');
    allReasons.add(text);
    optionCount++;
  }
}
assert.equal(optionCount,573);
assert.equal(allReasons.size,573);
const from=app.indexOf('function answerTexts('),to=app.indexOf('function record(',from);
assert.ok(from>=0&&to>from,'Feedback renderer exists');
const source=app.slice(from,to);
const esc=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const build=cfg=>new Function('CFG','esc','visualHtml','S',source+';return {feedback,conciseOptionFeedback};')(cfg,esc,()=>'',{settings:()=>({showTips:true})});
const q=bank.find(q=>q.id==='CCARP-002');
const renderer=build(CFG);
const practice=renderer.feedback({...q,displayOptions:[...q.options].reverse()},q.correctAnswers,true);
assert.ok(practice.includes('Correct answer:</b> '+q.correctAnswers.map(id=>esc(q.options.find(o=>o.id===id).text)).join('; ')));
for(const o of q.options){
  assert.ok(practice.includes(esc(q.optionExplanations[o.id])));
  assert.ok(practice.includes(esc(o.text)),'Text identifies each rationale without letter labels');
}
assert.ok(!practice.includes('Mental model')&&!practice.includes('Exam tip:')&&!practice.includes('Key clue'));
const answerSource=app.slice(app.indexOf('function answerHtml('),app.indexOf('function session('));
const renderAnswers=new Function('esc',answerSource+';return answerHtml;')(esc);
const shuffled={...q,displayOptions:[...q.options].reverse()};
const rendered=renderAnswers(shuffled,{kind:'practice',answers:{[q.id]:q.correctAnswers},checked:{[q.id]:true}});
assert.ok(!/<kbd\b|<b>[A-Z]\.\s*<\/b>/.test(rendered),'No visible option letters or shortcut numbers');
assert.ok(rendered.includes('class="option selected correct"'),'Preserve selection and grading classes');
for(const o of q.options)assert.ok(rendered.includes('data-answer="'+o.id+'"')&&rendered.includes(esc(o.text)));
assert.ok(app.includes('displayOptions[+e.key-1]'),'Keep keyboard shortcuts');
const review=renderer.conciseOptionFeedback(q,true);
for(const o of q.options){
  assert.ok(review.includes(esc(o.text))&&review.includes(esc(q.optionExplanations[o.id])),'Exam review includes the option and its rationale');
}
assert.ok(app.includes('CFG.conciseFeedback?conciseOptionFeedback(q,true)'),'Exam and practice review use enhanced feedback');
const other=build({}).feedback(q,q.correctAnswers,true);
assert.ok(other.includes('Why the options are correct or incorrect')&&other.includes(esc(q.options[0].text)),'Other courses retain prior format');
assert.ok(read('index.html').includes('polish-v29-20261126'));
assert.ok(read('js/loader.js').includes('clean-options-v31-20261126'));
console.log('PASS: 126 clean questions, 573 distinct concise rationales, correct labels, compact practice and full exam review.');
