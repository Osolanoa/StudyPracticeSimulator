/* Static space backdrop: draw the starfield once and only redraw on resize.
   No animation frames, timers between resizes, or motion preference controls. */
(() => {
  'use strict';
  if (document.getElementById('space-v27')) return;
  const root = document.createElement('div');
  root.id = 'space-v27';
  root.setAttribute('aria-hidden', 'true');
  root.innerHTML = '<canvas></canvas><div class="aurora"></div><div class="vignette"></div><div class="grain"></div>';
  document.body.prepend(root);
  const canvas = root.querySelector('canvas');
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;
  let resizeTimer;
  function draw() {
    const dpr = Math.min(1.5, devicePixelRatio || 1);
    const w = canvas.width = Math.round(innerWidth * dpr);
    const h = canvas.height = Math.round(innerHeight * dpr);
    const count = Math.round(Math.min(220, innerWidth * innerHeight / 6500));
    let seed = 0x2dd08d9;
    const random = () => {
      seed = (1664525 * seed + 1013904223) >>> 0;
      return seed / 4294967296;
    };
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#dfe8ff';
    for (let i = 0; i < count; i++) {
      const x = random() * w, y = random() * h;
      const radius = (random() * 1.3 + .25) * dpr;
      ctx.globalAlpha = .35 + .65 * random();
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
  addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(draw, 150);
  });
  draw();
})();
