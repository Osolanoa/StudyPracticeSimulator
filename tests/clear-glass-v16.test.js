/* Run with: node tests/clear-glass-v16.test.js
 * Prevent regressions in transparency, fonts and background preservation. */
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const css = fs.readFileSync(path.join(root,'css/clear-glass-v16.css'),'utf8');
const html = fs.readFileSync(path.join(root,'index.html'),'utf8');
assert.ok(html.includes('family=Outfit:wght@300;400;500;600;700;800'),'V26: Outfit is the single loaded UI font');
assert.ok(html.indexOf('clear-glass-v16.css')>html.indexOf('dark-frosted-glass-v15.css'));
assert.ok(html.includes('css/cosmic-lite.css'),'Original cosmic scene stylesheet must remain');
assert.ok(!/#cosmic-scene|\.cosmic-lite-photo|\.cosmic-mist|\.cosmic-body/.test(css),
  'Do not change the existing space background');
assert.ok(css.includes('"Cormorant Garamond"'),'Missing editorial heading font');
assert.ok(css.includes('h1 .premium-title-line--top,'));
assert.ok(css.includes('h1 .premium-title-line--bottom'));
assert.ok(css.includes('font-size: 1em !important'),'Both title lines must have equal size');
assert.ok(css.includes('font-style: italic !important'),'Both title lines must be italic');
assert.ok(css.includes('"Inter"'),'Missing Claude-like interface fallback font');
assert.ok(css.includes('backdrop-filter: var(--clear-glass-blur) !important'));
assert.ok(css.includes('@supports not'),'Missing compatibility fallback');
assert.ok(css.includes('prefers-reduced-transparency'),'Missing accessibility fallback');
assert.ok(!css.includes('.option.correct {')&&!css.includes('.option.wrong {'),
  'Correct and incorrect answer colors must be preserved');
assert.equal((css.match(/\{/g)||[]).length,(css.match(/\}/g)||[]).length);
console.log('PASS: clearer glass, unified serif heading, readable sans controls, background unchanged');
