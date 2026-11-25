/* Run with: node tests/ccar-course-smoke.test.js
 * No npm installation or third-party dependencies needed. */
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const context = { window: {} };
for (const file of ['courses/ccar-p/config.js', 'courses/ccar-p/questions.js']) {
  vm.runInNewContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
}
const cfg = context.window.COURSE_CONFIG;
const bank = context.window.COURSE_QUESTIONS;
const domains = new Set(cfg.domains.map(d => d.id));
assert.equal(cfg.id, 'ccar-p');
assert.equal(bank.length, 126, 'The 163 original questions yield 126 unique retained questions');
assert.equal(new Set(bank.map(q => q.id)).size, 126, 'Stable canonical IDs must be unique');
assert.equal(cfg.includePartialPracticeGroup, true);
assert.equal(cfg.shufflePracticeQuestionOrder, true, 'CCAR-P fixed tests should shuffle presentation order');
assert.equal(cfg.practiceRecordsKey, 'practiceTestsV3', 'Deduplicated groups need an isolated storage namespace');
assert.ok(Array.isArray(cfg.practiceQuestionIds), 'The mixed ordering must be explicit and stable');
assert.equal(cfg.practiceQuestionIds.length, 126, 'The mixed distribution must cover the unique question bank');
assert.equal(new Set(cfg.practiceQuestionIds).size, 126, 'The mixed distribution must not repeat IDs');
assert.equal(Math.ceil(bank.length / cfg.questionsPerPractice), 13);
assert.equal(bank.length % cfg.questionsPerPractice, 6, 'The last test must have 6 questions');
const lookup = new Map(bank.map(q => [q.id, q]));
const mixed = cfg.practiceQuestionIds.map(id => {
  assert.ok(lookup.has(id), id + ' is missing from the original bank');
  return lookup.get(id);
});
assert.deepEqual([...cfg.practiceQuestionIds].sort(), Array.from(bank, q => q.id).sort(),
  'Redistribution must preserve exactly the 126 retained questions');
const practiceGroups = Array.from({ length: 13 }, (_, i) => mixed.slice(i * 10, (i + 1) * 10));
assert.deepEqual(practiceGroups.map(group => group.length),
  [...Array(12).fill(10), 6], 'Mixed test sizes must be 12x10 + 1x6');
for (const [i, group] of practiceGroups.entries()) {
  const sourcePages = group.map(q => Math.floor((Number(q.id.split('-').at(-1)) - 1) / 5));
  assert.equal(new Set(sourcePages).size, group.length,
    'Practice test ' + (i + 1) + ' repeated questions from the same PDF page');
  if (group.length === 10) {
    assert.ok(new Set(group.map(q => q.domain)).size >= 6,
      'Practice test ' + (i + 1) + ' should include at least six distinct domains');
  }
}
assert.notDeepEqual(practiceGroups[0].map(q => q.id), bank.slice(0, 10).map(q => q.id),
  'The new fixed tests must differ from contiguous PDF blocks');
for (const q of bank) {
  assert.ok(/^CCARP-\d{3}$/.test(q.id), q.id + ' bad ID');
  assert.ok(domains.has(q.domain), q.id + ' missing domain');
  assert.ok(['single-choice', 'multiple-choice'].includes(q.type), q.id + ' unknown type');
  assert.ok(q.question.length > 35, q.id + ' short question');
  assert.ok(q.options.length >= 4, q.id + ' incomplete options');
  assert.ok(q.explanation.length > 130, q.id + ' incomplete rationale');
  const optionIds = new Set(q.options.map(o => o.id));
  assert.equal(optionIds.size, q.options.length, q.id + ' duplicate options');
  for (const o of q.options) {
    assert.ok(o.text.trim(), q.id + ' blank option');
    assert.ok(q.optionExplanations[o.id]?.trim(), q.id + ' missing option-specific feedback');
  }
  for (const key of q.correctAnswers) assert.ok(optionIds.has(key), q.id + ' invalid answer key');
  assert.ok(q.correctAnswers.length > 0, q.id + ' missing answer');
}
for (const n of [1, 3, 8, 10, 13, 15, 17, 18, 58]) {
  const sourceId='CCARP-'+String(n).padStart(3,'0');
  assert.ok(lookup.get(sourceId)?.tags.includes('adapted-hotspot'), 'HOTSPOT Q' + n + ' missing');
}
assert.deepEqual(Array.from(lookup.get('CCARP-001').correctAnswers), ['A','C','E']);
assert.deepEqual(Array.from(lookup.get('CCARP-008').correctAnswers), ['A','B','C','D','E','F']);
assert.deepEqual(Array.from(lookup.get('CCARP-058').correctAnswers), ['A','C','E']);
const app = fs.readFileSync(path.join(root, 'js/app.js'), 'utf8');
const loader = fs.readFileSync(path.join(root, 'js/loader.js'), 'utf8');
const storage = fs.readFileSync(path.join(root, 'js/storage.js'), 'utf8');
assert.ok(app.includes('CFG.includePartialPracticeGroup'));
assert.ok(app.includes('ordered=ids.map(id=>byId.get(id))'),
  'The engine must use the stable mixed ordering for practice groups');
assert.ok(app.includes("S.set(CFG.practiceRecordsKey||'practiceTests',records)"),
  'Mixed practice scores must use a separate storage key');
assert.ok(storage.includes("practiceTestsV2: 'practice_tests_v2'"),
  'The original practice scores must not be overwritten');
assert.ok(storage.includes("practiceTestsV3: 'practice_tests_v3'"),
  'The deduplicated practices must use a separate v3 storage namespace');
assert.ok(loader.includes("course.practiceRecordsKey === 'practiceTestsV3'"),
  'Landing progress must read the deduplicated v3 scores');
assert.ok(app.includes('(CFG.shufflePracticeQuestionOrder?shuffle(group.questions):group.questions)'),
  'Fixed test membership must remain intact while display order is shuffled');
const shuffleSource = app.match(/function shuffle\(a\)\{.*?return out\}/)?.[0];
assert.ok(shuffleSource, 'Fisher-Yates shuffle should be present');
const shuffle = vm.runInNewContext(shuffleSource + '; shuffle;', {});
const original = Array.from({ length: 126 }, (_, i) => i + 1);
let changed = false;
for (let i = 0; i < 20; i++) {
  const mixed = Array.from(shuffle(original));
  assert.equal(mixed.length, original.length, 'Shuffling must preserve question count');
  assert.deepEqual([...mixed].sort((a, b) => a - b), original, 'No question may be duplicated or dropped');
  if (mixed.some((value, index) => value !== original[index])) changed = true;
}
assert.ok(changed, 'At least one shuffled order should differ from its source order');
assert.ok(loader.includes("id: 'ccar-p'"));
console.log('CCAR-P course smoke test passed: 126 unique questions, 13 balanced mixed tests, 0 same-PDF-page collisions, v3 scores, per-attempt shuffling.');
