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
assert.equal(bank.length, 163, 'All 163 source questions must be included');
assert.equal(new Set(bank.map(q => q.id)).size, 163, 'Stable IDs must be unique');
assert.equal(cfg.includePartialPracticeGroup, true);
assert.equal(cfg.shufflePracticeQuestionOrder, true, 'CCAR-P fixed tests should shuffle presentation order');
assert.equal(Math.ceil(bank.length / cfg.questionsPerPractice), 17);
assert.equal(bank.length % cfg.questionsPerPractice, 3, 'The last test must have 3 questions');
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
  assert.ok(bank[n - 1].tags.includes('adapted-hotspot'), 'HOTSPOT Q' + n + ' missing');
}
assert.deepEqual(Array.from(bank[0].correctAnswers), ['A','C','E']);
assert.deepEqual(Array.from(bank[7].correctAnswers), ['A','B','C','D','E','F']);
assert.deepEqual(Array.from(bank[57].correctAnswers), ['A','C','E']);
const app = fs.readFileSync(path.join(root, 'js/app.js'), 'utf8');
const loader = fs.readFileSync(path.join(root, 'js/loader.js'), 'utf8');
assert.ok(app.includes('CFG.includePartialPracticeGroup'));
assert.ok(app.includes('(CFG.shufflePracticeQuestionOrder?shuffle(group.questions):group.questions)'),
  'Fixed test membership must remain intact while display order is shuffled');
const shuffleSource = app.match(/function shuffle\(a\)\{.*?return out\}/)?.[0];
assert.ok(shuffleSource, 'Fisher-Yates shuffle should be present');
const shuffle = vm.runInNewContext(shuffleSource + '; shuffle;', {});
const original = Array.from({ length: 163 }, (_, i) => i + 1);
let changed = false;
for (let i = 0; i < 20; i++) {
  const mixed = Array.from(shuffle(original));
  assert.equal(mixed.length, original.length, 'Shuffling must preserve question count');
  assert.deepEqual([...mixed].sort((a, b) => a - b), original, 'No question may be duplicated or dropped');
  if (mixed.some((value, index) => value !== original[index])) changed = true;
}
assert.ok(changed, 'At least one shuffled order should differ from its source order');
assert.ok(loader.includes("id: 'ccar-p'"));
console.log('CCAR-P course smoke test passed: 163 questions, 17 fixed tests, 9 adapted visual questions, unbiased presentation shuffle.');
