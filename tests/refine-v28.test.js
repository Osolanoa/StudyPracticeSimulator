/* Run: node tests/refine-v28.test.js
   V28: one built stylesheet, refinement layer last, and new UI hooks. */
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs'), path = require('node:path'), { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const read = f => fs.readFileSync(path.join(root, f), 'utf8');
const html = read('index.html'), bundle = read('css/app.css'), app = read('js/app.js');
assert.equal((html.match(/rel="stylesheet" href="\.\/css\//g) || []).length, 1, 'index.html loads only css/app.css');
execFileSync(process.execPath, [path.join(root, 'tools/build-css.js'), '--check']);
assert.ok(bundle.lastIndexOf('@source ./css/refine-v28.css') > bundle.lastIndexOf('@source ./css/premium-motion-v25.css'), 'Refinement layer is last');
assert.ok(app.includes('class="nav-group"') && app.includes("['Study',") && app.includes("['Review',"), 'Sidebar is grouped');
assert.ok(app.includes('class="card welcome"'), 'Dashboard has a welcome empty state');
assert.ok(app.includes('class="qdots"') && app.includes('class="opt-key"'), 'Question dots and keyboard hints');
assert.ok(read('js/cosmic-landing.js').includes("cosmos-course--'+esc(course.id)"), 'Course cards carry their own hue class');
const mep = read('courses/matematicas-9-mep/config.js');
for (const k of ['"Answered"', '"Study"', '"Review"', '"Start your first practice test"']) assert.ok(mep.includes(k), 'Spanish text for ' + k);
console.log('PASS: single stylesheet, refinement layer, grouped nav, welcome state, question dots.');
