/* Regresión del banco oficial MEP 2025–2026, solo Node.js estándar. */
"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "courses/matematicas-9-mep/official-data.js"), "utf8");
const context = { window: {} };
vm.runInNewContext(source, context, { filename: "official-data.js", timeout: 3000 });
const data = context.window.MEP_OFFICIAL_DATA;
assert.ok(data && Array.isArray(data.sets));
const expectations = [
  { id: "2025", count: 55, optionCount: 3 },
  { id: "2026-01", count: 55, optionCount: 4 },
  { id: "2026-02", count: 60, optionCount: 4 }
];
assert.equal(data.sets.length, 3);
for (const expected of expectations) {
  const pack = data.sets.find(s => s.id === expected.id);
  assert.ok(pack, expected.id);
  assert.equal(pack.answers.length, expected.count, expected.id);
  assert.equal(pack.answerCount, expected.optionCount);
  assert.match(pack.url, /^https:\/\/dgec\.mep\.go\.cr\/.*\.pdf$/);
  const allowed = new Set("ABCD".slice(0, pack.answerCount));
  for (const [i, letter] of pack.answers.entries()) {
    assert.ok(allowed.has(letter), pack.id + ":" + (i + 1) + " invalid key");
  }
}
assert.equal(data.sets.reduce((n, p) => n + p.answers.length, 0), 170);
assert.equal(Object.keys(data.solutions).length, 169);
for (const [key, solution] of Object.entries(data.solutions)) {
  const match = /^(2025|2026-01|2026-02):([1-9][0-9]?)$/.exec(key);
  assert.ok(match, "invalid solution ID " + key);
  const set = data.sets.find(x => x.id === match[1]);
  assert.ok(set && Number(match[2]) <= set.answers.length, key);
  assert.equal(solution.verified, true, key);
  for (const [field, minLength] of [["topic", 3], ["procedure", 60], ["justification", 25]]) {
    assert.ok(typeof solution[field] === "string" && solution[field].length > minLength, key + "." + field);
  }
}
const observed = Object.keys(data.reviewNotes || {});
assert.deepEqual(observed, ["2025:42"]);
for (const id of observed) {
  assert.ok(!data.solutions[id], "observed item should not claim verified solution: " + id);
}
for (const set of data.sets) for (let n = 1; n <= set.answers.length; n++) {
  const id = set.id + ":" + n;
  assert.ok(data.solutions[id] || data.reviewNotes[id], "unreviewed item: " + id);
}
const expected = {
  "2025": { 1: "C", 6: "A", 39: "B", 42: "A", 55: "A" },
  "2026-01": { 1: "C", 13: "A", 25: "A", 39: "A", 55: "B" },
  "2026-02": { 1: "C", 14: "A", 26: "A", 42: "A", 56: "A", 60: "B" }
};
for (const [id, entries] of Object.entries(expected)) {
  const set = data.sets.find(p => p.id === id);
  for (const [n, letter] of Object.entries(entries)) assert.equal(set.answers[Number(n)-1], letter, id+":"+n);
}
console.log("PASS: 170 keys; 169 detailed explanations; 1 reviewed unscored item; 3 source PDFs.");
