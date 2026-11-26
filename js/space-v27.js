/* V27 space background: twinkling, drifting starfield on one canvas.
   Tuned for fluidity: 30 fps cap, device pixel ratio capped at 1.5,
   paused when the tab is hidden, static frame with reduced motion.
   Exposes window.StudySkyMotion so the Settings speed slider keeps working
   (1%..10% scales the drift speed). */
(() => {
  'use strict';
  if (document.getElementById('space-v27')) return;
  const root = document.createElement('div');
  root.id = 'space-v27';
  root.setAttribute('aria-hidden', 'true');
  root.innerHTML = '<canvas></canvas><div class="aurora"></div><div class="vignette"></div><div class="grain"></div>';
  document.body.prepend(root);

  const canvas = root.querySelector('canvas'), ctx = canvas.getContext('2d', { alpha: true });
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const SPEED_KEY = 'study_sky_speed_percent', FRAME_MS = 1000 / 30;
  let speed = 2, stars = [], w = 0, h = 0, dpr = 1, raf = 0, last = 0;
  try { const v = Number(localStorage.getItem(SPEED_KEY)); if (v >= 1 && v <= 10) speed = Math.round(v); } catch (_) {}

  function resize() {
    dpr = Math.min(1.5, devicePixelRatio || 1);
    w = canvas.width = Math.round(innerWidth * dpr);
    h = canvas.height = Math.round(innerHeight * dpr);
    const count = Math.round(Math.min(220, innerWidth * innerHeight / 6500));
    stars = Array.from({ length: count }, () => ({ x: Math.random() * w, y: Math.random() * h, r: (Math.random() * 1.3 + .25) * dpr, t: Math.random() * 6, s: Math.random() * .6 + .2 }));
    draw(performance.now(), 0);
  }
  function draw(now, dt) {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#dfe8ff';
    const drift = dt * .004 * speed * dpr;
    for (const s of stars) {
      ctx.globalAlpha = .35 + .65 * Math.abs(Math.sin(s.t + now / 1400));
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.283); ctx.fill();
      s.x -= s.s * drift; if (s.x < 0) s.x += w;
    }
  }
  function loop(now) {
    raf = requestAnimationFrame(loop);
    const dt = now - last;
    if (dt < FRAME_MS) return;
    last = now; draw(now, Math.min(dt, 100));
  }
  function start() { cancelAnimationFrame(raf); raf = 0; if (!reduced.matches && !document.hidden) { last = performance.now(); raf = requestAnimationFrame(loop); } }

  addEventListener('resize', () => { clearTimeout(resize.t); resize.t = setTimeout(resize, 150); });
  document.addEventListener('visibilitychange', start);
  reduced.addEventListener?.('change', start);
  resize(); start();

  window.StudySkyMotion = Object.freeze({
    getSpeedPercent: () => speed,
    setSpeedPercent: value => {
      const n = Number(value);
      speed = Number.isFinite(n) ? Math.max(1, Math.min(10, Math.round(n))) : 2;
      try { localStorage.setItem(SPEED_KEY, String(speed)); } catch (_) {}
      return speed;
    },
    getStatus: () => ({ version: 'v27', speedPercent: speed, stars: stars.length, running: !!raf, reducedMotion: reduced.matches })
  });
})();
