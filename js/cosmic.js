/* Lightweight cinematic starfield.
 * One static, high-quality astronomical photograph + a small layer of stars.
 * No planet textures, videos, WebGL, particle simulations, or perpetual RAF.
 */
(() => {
  'use strict';
  const app = document.getElementById('app');
  if (!app || document.getElementById('cosmic-scene')) return;

  const scene = document.createElement('div');
  scene.id = 'cosmic-scene';
  scene.setAttribute('aria-hidden', 'true');
  scene.innerHTML =
    '<div class="cosmic-lite-photo"></div>' +
    '<div class="cosmic-lite-shade"></div>' +
    '<div class="cosmic-lite-stars"></div>';
  app.parentNode.insertBefore(scene, app);

  const layer = scene.querySelector('.cosmic-lite-stars');
  const coarse = matchMedia('(pointer: coarse)').matches;
  const count = coarse ? 18 : 42;

  // Consistent layout on refresh. Tiny DOM circles are painted only once.
  let seed = 0x2dd08d9;
  const random = () => {
    seed = (1664525 * seed + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const star = document.createElement('i');
    star.className = 'cosmic-lite-star';
    const size = 0.65 + random() * 1.55;
    star.style.left = (random() * 100).toFixed(2) + '%';
    star.style.top = (random() * 100).toFixed(2) + '%';
    star.style.width = size.toFixed(2) + 'px';
    star.style.height = size.toFixed(2) + 'px';
    star.style.opacity = (0.28 + random() * 0.5).toFixed(2);
    fragment.appendChild(star);
  }
  layer.appendChild(fragment);

  // Star positions stay fixed relative to the space photograph.
  // All deliberate sky motion is controlled by sky-motion-v23.js.
})();