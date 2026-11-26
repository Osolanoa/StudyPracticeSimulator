/* Run with: node tests/liquid-glass-v17.test.js
 * Protect the CSS link fix and the requested design requirements.
 * Rendering must also be visually inspected in a browser. */
'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const css=fs.readFileSync(path.join(root,'css/liquid-glass-v17.css'),'utf8');
const allLinkOpens=[...html.matchAll(/<link\b/gi)];
const completeLinkTags=[...html.matchAll(/<link\b[^>]*>/gi)];
assert.equal(allLinkOpens.length,completeLinkTags.length,
  'Every link tag must have its own closing >; an unclosed font link hides later CSS');
for(const tag of completeLinkTags) {
  assert.equal((tag[0].match(/<link\b/gi)||[]).length,1,'No nested/malformed link tags');
}
assert.match(html,/family=Outfit:[^"\n]*" rel="stylesheet">/,'V26: Outfit font tag must be correctly closed');
assert.ok(html.indexOf('liquid-glass-v17.css')>html.indexOf('clear-glass-v16.css'));
assert.ok(html.includes('cosmic-lite.css'),'The original background asset is preserved');
assert.ok(!/#cosmic-scene|\.cosmic-lite-photo|\.cosmic-mist|\.cosmic-sun|\.cosmic-body/.test(css),
  'The existing cosmic scene cannot be changed by this layer');
assert.ok(css.includes('--glass-ui-font: "Inter"'),'Inter must drive the entire UI');
assert.ok(css.includes('--glass-title-font: "Cormorant Garamond"'));
assert.ok(css.includes('h1 .premium-title-line--top,'));
assert.ok(css.includes('h1 .premium-title-line--bottom'));
assert.ok(css.includes('font-size: 1em !important'));
assert.ok(css.includes('html[data-theme="dark"] body[data-cosmic-view="landing"] #app'));
assert.ok(css.includes('rgba(7,22,39,.17)'),'Course cards should remain transparent');
assert.ok(css.includes('rgba(7,24,42,.19)'),'Dashboard should remain transparent');
assert.ok(css.includes('prefers-reduced-transparency'));
assert.ok(css.includes('@supports not'));
assert.ok(!/\.option\.(?:correct|wrong)\s*\{/.test(css),
  'The correct/wrong states must retain original semantic colors');
assert.equal((css.match(/\{/g)||[]).length,(css.match(/\}/g)||[]).length);
console.log('PASS: Inter font loads; V17 glass stylesheet loads; title consistent; cosmic backdrop untouched.');
