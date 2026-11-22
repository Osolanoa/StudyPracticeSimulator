/* Run: node tests/dark-glass-visual-guard.test.js
 * Static regression guard. This overlay must never alter the cosmic backdrop.
 * Browser rendering is a separate manual QA step. */
'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const css=fs.readFileSync(path.join(root,'css/dark-frosted-glass-v15.css'),'utf8');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert.ok(css.length>5000,'The visual overlay is missing');
assert.ok(html.includes('family=Cormorant+Garamond'),'Serif title font must be loaded');
assert.ok(html.includes('family=DM+Sans'),'Readable UI font must be loaded');
const v14=html.indexOf('./css/premium-controls-v14.css');
const v15=html.indexOf('./css/dark-frosted-glass-v15.css');
assert.ok(v14>=0 && v15>v14,'Frosted CSS must load after the existing button design');
assert.equal((html.match(/dark-frosted-glass-v15\.css/g)||[]).length,1,'Only load one frosted overlay');
assert.ok(!/#cosmic-scene|\.cosmic-lite-|\.cosmic-mist|\.cosmic-sun|\.cosmic-body|\.cosmic-lite-photo|canvas\s*\{/.test(css),
  'The background image and cosmic layers must never be restyled');
assert.ok(!/\nbody\s*\{\s*background/.test(css),'Do not change the body background');
assert.ok(!/\.option\.correct\s*\{|\.option\.wrong\s*\{/.test(css),
  'Keep existing semantic correct/wrong answer colors');
for(const view of ['landing','course','session']){
 assert.ok(css.includes('data-cosmic-view="'+view+'"'),view+' must get the frosted theme');
}
for(const feature of ['.cosmos-course','.card','.side','.option','.btn','.modal','Cormorant Garamond','DM Sans','backdrop-filter','prefers-reduced-transparency']){
 assert.ok(css.includes(feature),feature+' is missing from the glass design');
}
assert.ok(css.includes('@supports not'),'Glass fallback must preserve legibility');
const stripped=css.replace(/\/\*[\s\S]*?\*\//g,'');
assert.equal((stripped.match(/\{/g)||[]).length,(stripped.match(/\}/g)||[]).length,'Unbalanced CSS blocks');
console.log('PASS: frosted overlay intact, dark-only theme, old background untouched, semantic colors preserved.');
