/* Run: node tests/sky-speed-setting-v24.test.js
 * Validate shared 1–10% speed settings without needing a real browser.
 */
'use strict';
const cssBundle = require('fs').readFileSync(require('path').join(__dirname, '..', 'css', 'app.css'), 'utf8'); // V28: index.html loads one built stylesheet
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const controller = read('js/sky-motion-v23.js');
const app = read('js/app.js');
const loader = read('js/loader.js');
const html = read('index.html');
const css = read('css/sky-speed-settings-v24.css');
const KEY = 'study_sky_speed_percent';

function simulate(initialValue, reduced = false, native = true) {
  const store = new Map();
  if (initialValue !== null) store.set(KEY, initialValue);
  const calls = [];
  const makeLayer = name => {
    const classes = new Set();
    const layer = {
      style: {},
      classList: {
        add: c => classes.add(c),
        remove: c => classes.delete(c),
        contains: c => classes.has(c)
      }
    };
    if (native) layer.animate = (frames, opts) => {
      const animation = {
        frames, opts, name,
        cancelled: false, speed: 1,
        updatePlaybackRate(value) { this.speed = value; },
        cancel() { this.cancelled = true; },
        currentTime: 0
      };
      calls.push(animation);
      return animation;
    };
    return layer;
  };
  const photo = makeLayer('photo'), stars = makeLayer('stars');
  const scene = {
    querySelector: key => key === '.cosmic-lite-photo' ? photo : key === '.cosmic-lite-stars' ? stars : null
  };
  const media = {
    matches: reduced,
    addEventListener(type, listener) { this.listener = listener; }
  };
  const storage = {
    getItem: key => store.has(key) ? store.get(key) : null,
    setItem: (key, value) => store.set(key, String(value))
  };
  const document = { getElementById: key => key === 'cosmic-scene' ? scene : null };
  const window = {};
  vm.runInNewContext(controller, {
    document, window, localStorage: storage,
    matchMedia: () => media,
    URLSearchParams, location: { search: '' },
    getComputedStyle: elem => ({ transform: elem.style.transform || 'none' })
  });
  return { api: window.StudySkyMotion, calls, photo, stars, store, media };
}

const regular = simulate(null);
assert.equal(regular.api.getSpeedPercent(), 2, 'Default speed should be an intermediate 2%');
assert.equal(regular.api.getStatus().durationMs, 240000, '2%=4 minutes per direction');
assert.equal(regular.calls.length, 2);
assert.ok(regular.calls.every(a => a.speed === 2), 'Native photo and stars use the selected speed');

regular.api.setSpeedPercent(7);
assert.equal(regular.api.getSpeedPercent(), 7);
assert.equal(regular.api.getStatus().durationMs, 480000 / 7);
assert.equal(regular.store.get(KEY), '7');
assert.equal(regular.calls.length, 2, 'Input should change playback speed without restarting');
assert.ok(regular.calls.every(a => a.speed === 7 && !a.cancelled));

regular.api.setSpeedPercent(0);
assert.equal(regular.api.getSpeedPercent(), 1, 'Clamp minimum');
regular.api.setSpeedPercent(99);
assert.equal(regular.api.getSpeedPercent(), 10, 'Clamp maximum');
assert.equal(regular.api.getStatus().durationMs, 48000, '10%=48 seconds per direction');

const saved = simulate('6');
assert.equal(saved.api.getSpeedPercent(), 6, 'Speed persists across reloads and courses');
assert.ok(saved.calls.every(a => a.speed === 6));
const invalid = simulate('not-a-number');
assert.equal(invalid.api.getSpeedPercent(), 2, 'Invalid storage falls back safely');

const fallback = simulate('3', false, false);
assert.equal(fallback.api.getStatus().status, 'css-fallback');
assert.equal(fallback.photo.style.animationDuration, '160s');
fallback.api.setSpeedPercent(5);
assert.equal(fallback.photo.style.animationDuration, '96s');
assert.equal(fallback.stars.style.animationDuration, '96s');

const reduced = simulate('4', true);
assert.equal(reduced.calls.length, 0);
assert.ok(reduced.api.getStatus().reducedMotion);
reduced.api.setSpeedPercent(9);
assert.equal(reduced.store.get(KEY), '9', 'Setting is saved even when motion is disabled');
reduced.media.matches = false;
reduced.media.listener();
assert.equal(reduced.calls.length, 2);
assert.ok(reduced.calls.every(a => a.speed === 9));

assert.ok(app.includes('id="setSkySpeed" min="1" max="10" step="1"'));
assert.ok(app.includes('skySlider.addEventListener(\'input\''));
assert.ok(app.includes('setSpeedPercent?.(chosen)'));
assert.ok(app.includes('skySpeedValue') && app.includes('skySpeedTime'));
assert.ok(loader.includes("src === './js/app.js'"), 'Dynamically loaded app.js needs a cache-buster');
assert.ok(cssBundle.includes('sky-speed-settings-v24.css'));
assert.ok(html.includes('js/space-v27.js?v=space-v27-20261126'), 'V27 sky controller keeps the speed setting API');
assert.ok(css.includes('::-webkit-slider-thumb') && css.includes('::-moz-range-thumb'));
assert.ok(css.includes(':focus-visible'), 'Slider remains accessible with the keyboard');
assert.ok(!css.includes('background-image: url('), 'Keep space photography unchanged');
assert.equal((css.match(/\{/g)||[]).length,(css.match(/\}/g)||[]).length);
console.log('PASS: persistent speed settings, live updates, fallback, accessibility, slider UI, caches.');
