/* Run: node tests/unified-glass-sky-drift-v19.test.js
 * Regression tests for unified glass and passive panoramic background motion.
 * Visual rendering should also be checked after GitHub Pages deploy. */
'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const css=read('css/unified-glass-sky-drift-v19.css');
const html=read('index.html');
const landing=read('js/cosmic-landing.js');
const cosmos=read('js/cosmic.js');
const background=read('css/cosmic-lite.css');

assert.ok(html.indexOf('unified-glass-sky-drift-v19.css')>html.indexOf('course-lightglass-v18.css'),
  'V19 must load after all previous glass styles');
assert.ok(landing.includes('class="cosmos-course-visual"'),
  'Test must match the actual left-hand course card panel');
assert.ok(landing.includes('cosmos-course-orb'),
  'Test must match the original left-side decorative orb');
assert.ok(css.includes('.cosmos-course .cosmos-course-visual') && css.includes('background: transparent !important'),
  'The dedicated icon column must be entirely transparent');
assert.ok(css.includes('.cosmos-course .cosmos-course-copy'),
  'Both card columns must have a consistent surface');
assert.ok(css.includes('.cosmos-course .cosmos-course-orb')&&css.includes('display: none !important'),
  'The old card background orb must be hidden');
assert.ok(css.includes('.cosmos-course::before')&&css.includes('content: none !important'),
  'The angular overlay causing a visible panel split must be removed');
assert.ok(css.includes('background: rgba(178,210,226,.13)'),
  'There must be one mildly tinted glass background for the whole course card');
assert.ok(css.includes('.cosmos-course .cosmos-course-symbol'),
  'The small icon is preserved as a translucent chip');
assert.ok(cosmos.includes("scene.id = 'cosmic-scene'"),'Pan targets the actual space-scene container');
assert.ok(background.includes('eso1236c.jpg'),'The original astronomical image is unchanged');
assert.ok(css.includes('animation: celestial-pan-v20 80s linear infinite alternate !important'),
  'Pan must be visible over 80 seconds and move continuously without a long eased-in pause');
assert.ok(css.includes('--celestial-pan-start: 4%') && css.includes('--celestial-pan-end: -4%'),
  'Pan must cover eight percent of the viewport, rather than the imperceptible V19 drift');
assert.ok(css.includes('transform-origin: center center') && css.includes('will-change: transform'),
  'The whole scene should move as a composited layer');
assert.ok(css.includes('scale(var(--celestial-pan-scale))'),
  'Scene must be slightly oversized to avoid blank edges during panning');
assert.ok(css.includes('prefers-reduced-motion: reduce')&&css.includes('animation: none !important'),
  'Motion must stop for reduced-motion preferences');
assert.ok(!/\.cosmic-lite-photo\s*\{|background-image:\s*url\(/.test(css),
  'New CSS must not change source image or its original brightness/shading');
assert.ok(!/#app\s*\{[^}]*animation:/.test(css),'Do not animate course UI content');
assert.ok(css.includes('prefers-reduced-transparency: reduce'),
  'Maintain readable surfaces when transparency is reduced');
assert.equal((css.match(/\{/g)||[]).length,(css.match(/\}/g)||[]).length,'CSS blocks unbalanced');
console.log('PASS: one glass card, no left-side panel, intact photo, slow panoramic drift, reduced-motion fallback.');
