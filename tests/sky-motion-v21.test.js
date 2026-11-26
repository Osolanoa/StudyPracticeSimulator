/* Static sky regression; retains the previous test entry point. */
'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const source=read('js/space-v27.js');
const css=read('css/space-v27.css');
const bundle=read('css/app.css');
const html=read('index.html');
const app=read('js/app.js');
assert.ok(!/requestAnimationFrame|setInterval|StudySkyMotion|\.animate\(/.test(source),'No persistent sky animation');
assert.ok(!/space-v27-drift|infinite/.test(css),'No CSS aurora motion');
assert.ok(css.includes('animation:none!important;transition:none!important;will-change:auto!important'));
assert.ok(bundle.includes(css.trim()),'Published CSS contains static sky rules');
assert.ok(!/setSkySpeed|StudySkyMotion|sky-speed-panel/.test(app),'Remove unused speed control');
assert.ok(html.includes('js/space-v27.js?v=static-space-v32-20261126'));
assert.ok(!/src="[^"]*(?:sky-motion|cosmic\.js)/.test(html),'No older sky controller executes');
let drawCount=0, starCount=0, timerCount=0, pending=null, resize=null, sky=null;
const ctx={clearRect(){drawCount++},beginPath(){},arc(){starCount++},fill(){}};
const canvas={getContext:()=>ctx};
const document={
 getElementById:()=>sky,
 createElement:()=>({setAttribute(){},querySelector:()=>canvas}),
 body:{prepend(node){sky=node}}
};
const run=new Function('document','devicePixelRatio','innerWidth','innerHeight','addEventListener','setTimeout','clearTimeout',source);
run(document,1,1920,1080,(name,fn)=>{assert.equal(name,'resize');resize=fn},fn=>{timerCount++;pending=fn;return timerCount},()=>{pending=null});
assert.equal(drawCount,1,'Paint one initial frame');
assert.equal(starCount,220);
assert.equal(timerCount,0,'No background timer');
assert.ok(sky.innerHTML.includes('class="aurora"'));
resize();resize();
assert.equal(drawCount,1,'Resize does not draw immediately');
pending();
assert.equal(drawCount,2,'One debounced redraw after resize');
assert.equal(starCount,440);
run(document,1,1920,1080,()=>{throw Error('Duplicate initialization')},()=>{},()=>{});
assert.equal(drawCount,2);
console.log('PASS: static starfield, no animation loop, resize-only redraw, no speed slider.');
