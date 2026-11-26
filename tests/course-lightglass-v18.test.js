/* Run: node tests/course-lightglass-v18.test.js
   Protect font, lightness and transparent navigation against legacy CSS. */
'use strict';
const cssBundle = require('fs').readFileSync(require('path').join(__dirname, '..', 'css', 'app.css'), 'utf8'); // V28: index.html loads one built stylesheet
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const css=fs.readFileSync(path.join(root,'css/course-lightglass-v18.css'),'utf8');
const index=fs.readFileSync(path.join(root,'index.html'),'utf8');
const old=fs.readFileSync(path.join(root,'css/premium-controls-v14.css'),'utf8');
const cosmic=fs.readFileSync(path.join(root,'css/cosmic.css'),'utf8');
assert.ok(index.includes('family=Outfit:'),'V26: Outfit is the single loaded UI font');
assert.ok(cssBundle.indexOf('course-lightglass-v18.css')>cssBundle.indexOf('liquid-glass-v17.css'));
assert.ok(cssBundle.includes('cosmic-lite.css'),'Original wallpaper must stay loaded');
assert.ok(css.includes('.cosmos-course h3') && css.includes('font-family:"Inter"'),
 'Course cards must use Inter, not the previous serif');
assert.ok(css.includes('.content h1') && css.includes('.content h2'),
 'Course headings must also use Inter');
assert.ok(!css.includes('#cosmos-title'),'Preserve main landing headline style');
assert.ok(cosmic.includes('filter:brightness(.34) saturate(.55)'),
 'This test covers the known source of the dark session');
assert.match(css,/body\[data-cosmic-view="session"\] #cosmic-scene\s*\{\s*filter:none!important;/,
 'Remove session-only scene darkening without modifying the photo');
assert.ok(old.includes('.nav button.active::before'),
 'Test must cover the source of the left-side selection rail');
assert.ok(css.includes('.nav button.active::before') && css.includes('content:none!important'),
 'No sidebar selection rail');
assert.ok(css.includes('.content .btn') && css.includes('background:transparent!important'),
 'All main action buttons should have no fill');
assert.ok(css.includes('border-color:rgba(239,251,255,.58)'),
 'Selected nav state must remain identifiable without a fill');
assert.ok(css.includes('focus-visible'),'Keyboard focus must remain visible');
assert.ok(!/\.option\.(?:correct|wrong)\s*\{/.test(css),
 'Answer correctness colors must not be overridden');
assert.ok(!/\.cosmic-lite-photo|\.cosmic-lite-shade/.test(css),
 'Do not change the wallpaper image or its source shading');
assert.equal((css.match(/\{/g)||[]).length,(css.match(/\}/g)||[]).length,
 'CSS blocks must be balanced');
console.log('PASS: course Inter headings, reduced dimming, fully transparent buttons, no left rail.');
