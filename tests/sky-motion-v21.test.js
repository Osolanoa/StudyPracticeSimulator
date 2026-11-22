/* Run: node tests/sky-motion-v21.test.js
   Simulate the browser DOM and verify the real sky-motion controller. */
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'js/sky-motion-v21.js'), 'utf8');
const css = fs.readFileSync(path.join(root, 'css/sky-motion-v21.css'), 'utf8');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

function simulate(search, prefersReducedMotion) {
  const calls = [], badges = [];
  const makeLayer = name => ({
    style: {}, classList: {
      items: new Set(),
      add(value) { this.items.add(value); },
      remove(value) { this.items.delete(value); }
    },
    animate(frames, options) {
      const animation = { currentTime: 0, cancelled: false, cancel() { this.cancelled = true; } };
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
    document, window, location: { search },
    matchMedia: () => media,
    URLSearchParams,
    getComputedStyle: element => ({ transform: element.style.transform || 'none' })
  });
  return { photo, stars, calls, badges, media, controller: window.StudySkyMotion };
}

const normal = simulate('', false);
assert.equal(normal.calls.length, 2, 'Animate both photographic sky and stars');
assert.equal(normal.calls[0].options.duration, 65000);
assert.equal(normal.calls[1].options.duration, 65000);
assert.ok(normal.calls[0].frames[0].transform.includes('scale(1.20)'), 'Overscan prevents blank edges');
assert.equal(normal.controller.getStatus().status, 'playing');
assert.equal(normal.badges.length, 0, 'Do not show diagnostic UI during normal study');
normal.controller.restart();
assert.equal(normal.calls.length, 4);
assert.ok(normal.calls.slice(0, 2).every(x => x.animation.cancelled), 'Restart cleans up existing animations');

const diagnostic = simulate('?skyTest=1', false);
assert.equal(diagnostic.calls.length, 2);
assert.ok(diagnostic.calls.every(x => x.options.duration === 12000), 'Diagnostic mode must be obvious');
assert.equal(diagnostic.badges.length, 1);
assert.match(diagnostic.badges[0].textContent, /SKY TEST: MOVING/);

const reduced = simulate('', true);
assert.equal(reduced.calls.length, 0, 'Respect reduced-motion setting');
assert.match(reduced.controller.getStatus().status, /reduced-motion/);
reduced.media.matches = false;
reduced.media.callback();
assert.equal(reduced.calls.length, 2, 'Motion starts if reduced-motion preference changes');

assert.ok(html.indexOf('sky-motion-v21.css') > html.indexOf('unified-glass-sky-drift-v19.css'));
assert.ok(html.indexOf('sky-motion-v21.js') > html.indexOf('js/cosmic.js'));
assert.ok(html.indexOf('sky-motion-v21.js') < html.indexOf('js/cosmic-landing.js'));
assert.ok(css.includes('animation: none !important;'), 'Old parent animation must be disabled');
assert.ok(css.includes('prefers-reduced-motion: reduce'));
assert.ok(!css.includes('background-image:'), 'No photo replacement');
console.log('PASS: native photo+star motion, obvious diagnostic mode, restart and reduced-motion behavior.');
