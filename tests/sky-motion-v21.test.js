/* Run: node tests/sky-motion-v21.test.js
 * Regression coverage for the current V23 background controller.
 * Retains test filename to keep existing test runners working. */
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const source = read('js/sky-motion-v23.js');
const cosmic = read('js/cosmic.js');
const css = read('css/sky-motion-v23.css');
const html = read('index.html');

function simulate(search, prefersReducedMotion) {
  const calls = [], badges = [];
  const makeLayer = name => ({
    style: {}, classList: {
      items: new Set(),
      add(value) { this.items.add(value); },
      remove(value) { this.items.delete(value); },
      contains(value) { return this.items.has(value); }
    },
    animate(frames, options) {
      const animation = {
        currentTime: 0, cancelled: false, playbackRate: 1,
        updatePlaybackRate(rate) { this.playbackRate = rate; },
        cancel() { this.cancelled = true; }
      };
      calls.push({ name, frames, options, animation });
      return animation;
    }
  });
  const photo = makeLayer('photo'), stars = makeLayer('stars');
  const scene = { querySelector: name => name === '.cosmic-lite-photo' ? photo : name === '.cosmic-lite-stars' ? stars : null };
  const media = { matches: prefersReducedMotion, callback: null, addEventListener(_, callback) { this.callback = callback; } };
  const document = {
    getElementById: name => name === 'cosmic-scene' ? scene : null,
    createElement: () => ({ style: {}, setAttribute() {} }),
    body: { appendChild: element => badges.push(element) }
  };
  const window = {};
  vm.runInNewContext(source, {
    document, window, location: { search }, matchMedia: () => media,
    URLSearchParams, getComputedStyle: element => ({ transform: element.style.transform || 'none' })
  });
  return { photo, stars, calls, badges, media, controller: window.StudySkyMotion };
}

const normal = simulate('', false);
assert.equal(normal.calls.length, 2, 'Photo and stars move together');
assert.ok(normal.calls.every(x => x.options.duration === 480000), 'Eight-minute one-way drift');
assert.ok(normal.calls.every(x => x.options.easing === 'steps(240, end)'), 'Constant sub-pixel stepped drift (no per-frame repaint)');
assert.equal(normal.calls[0].frames[0].transform, 'translate3d(0.75vw,0,0) scale(1.035)');
assert.equal(normal.calls[0].frames[1].transform, 'translate3d(-0.75vw,0,0) scale(1.035)');
assert.equal(normal.calls[1].frames[0].transform, 'translate3d(0.75vw,0,0)');
assert.equal(normal.calls[1].frames[1].transform, 'translate3d(-0.75vw,0,0)');
assert.equal(normal.controller.getStatus().baseDurationMs, 480000);
assert.equal(normal.controller.getStatus().durationMs, 240000);
assert.equal(normal.controller.getStatus().speedPercent, 2);
assert.ok(normal.calls.every(c => c.animation.playbackRate === 2));
assert.equal(normal.controller.getStatus().distanceVw, 1.5);
assert.equal(normal.controller.getStatus().status, 'playing');
assert.equal(normal.badges.length, 0, 'No diagnostic UI unless explicitly requested');

normal.controller.restart();
assert.equal(normal.calls.length, 4, 'Restart starts a new synchronized pair');
assert.ok(normal.calls.slice(0, 2).every(x => x.animation.cancelled), 'Old animations cancelled on restart');

/* skyTest=1 from older shared links must NOT accelerate the normal page. */
const oldDebugLink = simulate('?skyTest=1&ui=v21', false);
assert.ok(oldDebugLink.calls.every(x => x.options.duration === 480000),
  'Obsolete test URLs must never accelerate motion');
assert.equal(oldDebugLink.badges.length, 0);

const info = simulate('?skyInfo=1', false);
assert.ok(info.calls.every(x => x.options.duration === 480000), 'Status mode never accelerates');
assert.equal(info.badges.length, 1);
assert.match(info.badges[0].textContent, /velocidad 2%/);
assert.match(info.badges[0].textContent, /240 s por trayecto/);

const reduced = simulate('', true);
assert.equal(reduced.calls.length, 0);
assert.match(reduced.controller.getStatus().status, /reduced-motion/);
reduced.media.matches = false;
reduced.media.callback();
assert.equal(reduced.calls.length, 2);

assert.ok(!cosmic.includes('pointermove'), 'Remove old fast mouse-driven parallax');
assert.ok(!cosmic.includes('requestAnimationFrame'), 'Only one motion system drives the sky');
assert.ok(html.indexOf('sky-motion-v23.css') > html.indexOf('sky-motion-v21.css'));
// V27: the photo scene (cosmic.js + sky-motion-v23.js) is replaced by space-v27.js.
assert.ok(!html.includes('js/cosmic.js') && !html.includes('js/sky-motion-v23.js'), 'V27 replaces the photo sky');
assert.ok(html.indexOf('js/space-v27.js') > -1 && html.indexOf('js/space-v27.js') < html.indexOf('js/cosmic-landing.js'));
assert.ok(!html.includes('sky-motion-v21.js'), 'Do not execute the previous JS controller');
assert.ok(css.includes('sky-v23-photo 480s linear'), 'CSS fallback matches main controller');
assert.ok(css.includes('sky-v23-stars 480s linear'), 'Stars fallback matches main controller');
assert.ok(css.includes('prefers-reduced-motion: reduce'));
assert.ok(!css.includes('background-image:'), 'Original ESO space photo untouched');
console.log('PASS: slow synchronized sky, no quick debug override, no mouse parallax, motion accessibility.');
