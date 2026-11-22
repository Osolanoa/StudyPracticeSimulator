/* Sky Motion V21 — native compositor animation for the existing space scene.
 * The CSS-only V19/V20 animation was too hard to verify reliably in deployment.
 * Animate the actual photo and star layer (not the site UI or document).
 * Query ?skyTest=1 for an unmistakable 12-second diagnostic sweep.
 */
(() => {
  'use strict';

  const scene = document.getElementById('cosmic-scene');
  const photo = scene?.querySelector('.cosmic-lite-photo');
  const stars = scene?.querySelector('.cosmic-lite-stars');
  if (!photo || !stars) return;

  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const testMode = new URLSearchParams(location.search).get('skyTest') === '1';
  const duration = testMode ? 12000 : 65000;
  let animations = [];
  let status = 'initializing';

  const photoFrames = [
    { transform: 'translate3d(5vw, 0, 0) scale(1.20)' },
    { transform: 'translate3d(-5vw, 0, 0) scale(1.20)' }
  ];
  const starFrames = [
    { transform: 'translate3d(4.5vw, 0, 0)' },
    { transform: 'translate3d(-4.5vw, 0, 0)' }
  ];

  function stop() {
    animations.forEach(animation => animation.cancel());
    animations = [];
    photo.style.transform = 'none';
    stars.style.transform = '';
    photo.classList.remove('sky-motion-fallback');
    stars.classList.remove('sky-motion-stars-fallback');
  }

  function start() {
    stop();
    if (reduced.matches) {
      status = 'disabled: prefers-reduced-motion';
      updateTestBadge();
      return;
    }
    if (typeof photo.animate !== 'function' || typeof stars.animate !== 'function') {
      status = 'css-fallback';
      photo.classList.add('sky-motion-fallback');
      stars.classList.add('sky-motion-stars-fallback');
      updateTestBadge();
      return;
    }
    const options = { duration, iterations: Infinity, direction: 'alternate', easing: 'linear', fill: 'both' };
    animations = [
      photo.animate(photoFrames, options),
      stars.animate(starFrames, options)
    ];
    status = 'playing';
    updateTestBadge();
  }

  let testBadge;
  function updateTestBadge() {
    if (!testMode) return;
    if (!testBadge) {
      testBadge = document.createElement('div');
      testBadge.id = 'sky-motion-test-badge';
      testBadge.setAttribute('role', 'status');
      testBadge.style.cssText = [
        'position:fixed','left:14px','bottom:14px','z-index:9999',
        'pointer-events:none','padding:9px 12px','border-radius:11px',
        'border:1px solid rgba(230,251,255,.60)',
        'background:rgba(10,25,40,.72)','color:white',
        'font:600 12px/1.4 Inter,system-ui,sans-serif',
        'backdrop-filter:blur(10px)'
      ].join(';');
      document.body.appendChild(testBadge);
    }
    testBadge.textContent = status === 'playing' || status === 'css-fallback'
      ? 'SKY TEST: MOVING · 12s sweep'
      : 'SKY TEST: ' + status;
  }

  window.StudySkyMotion = Object.freeze({
    getStatus: () => ({
      status,
      testMode,
      durationMs: duration,
      reducedMotion: reduced.matches,
      animationTimeMs: animations[0]?.currentTime ?? null,
      photoTransform: getComputedStyle(photo).transform,
      starTransform: getComputedStyle(stars).transform
    }),
    restart: start
  });

  start();
  if (reduced.addEventListener) reduced.addEventListener('change', start);
  else if (reduced.addListener) reduced.addListener(start);
})();
