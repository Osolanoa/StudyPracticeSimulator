/* Sky Motion V23
 * A single synchronized controller moves the original space photo and stars
 * together. Never accelerates based on the URL. Eight-minute one-way drift,
 * 1.5vw total excursion. Cards and menus never move with the background.
 */
(() => {
  'use strict';

  const scene = document.getElementById('cosmic-scene');
  const photo = scene?.querySelector('.cosmic-lite-photo');
  const stars = scene?.querySelector('.cosmic-lite-stars');
  if (!photo || !stars) return;

  const DURATION_MS = 480000; // 8 minutes in each direction
  const HALF_SHIFT_VW = 0.75; // 1.5vw total travel
  const SCALE = 1.035;       // prevents exposed borders during movement
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const infoMode = new URLSearchParams(location.search).get('skyInfo') === '1';
  let animations = [];
  let status = 'initializing';
  let infoBadge;

  function updateInfo() {
    if (!infoMode) return;
    if (!infoBadge) {
      infoBadge = document.createElement('div');
      infoBadge.id = 'sky-motion-info';
      infoBadge.setAttribute('role', 'status');
      infoBadge.style.cssText = [
        'position:fixed', 'left:14px', 'bottom:14px', 'z-index:9999',
        'pointer-events:none', 'padding:9px 12px', 'border-radius:10px',
        'border:1px solid rgba(222,248,255,.48)',
        'background:rgba(10,23,40,.78)', 'color:#f7fdff',
        'font:600 12px/1.4 Inter,system-ui,sans-serif',
        'backdrop-filter:blur(9px)'
      ].join(';');
      document.body.appendChild(infoBadge);
    }
    infoBadge.textContent = status === 'playing' || status === 'css-fallback'
      ? 'Firmamento: 8 min por trayecto · 1.5% · ' + status
      : 'Firmamento: ' + status;
  }

  function stop() {
    for (const animation of animations) animation.cancel();
    animations = [];
    photo.classList.remove('sky-v23-photo-fallback');
    stars.classList.remove('sky-v23-stars-fallback');
    photo.style.transform = '';
    stars.style.transform = '';
  }

  function start() {
    stop();
    if (reduced.matches) {
      status = 'disabled: prefers-reduced-motion';
      updateInfo();
      return;
    }
    const options = {
      duration: DURATION_MS,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'linear',
      fill: 'both'
    };
    const photoFrames = [
      { transform: 'translate3d(' + HALF_SHIFT_VW + 'vw,0,0) scale(' + SCALE + ')' },
      { transform: 'translate3d(-' + HALF_SHIFT_VW + 'vw,0,0) scale(' + SCALE + ')' }
    ];
    const starFrames = [
      { transform: 'translate3d(' + HALF_SHIFT_VW + 'vw,0,0)' },
      { transform: 'translate3d(-' + HALF_SHIFT_VW + 'vw,0,0)' }
    ];
    try {
      if (typeof photo.animate !== 'function' || typeof stars.animate !== 'function') {
        throw new Error('Web Animations API unavailable');
      }
      animations = [
        photo.animate(photoFrames, options),
        stars.animate(starFrames, options)
      ];
      status = 'playing';
    } catch (_) {
      for (const animation of animations) animation.cancel();
      animations = [];
      photo.classList.add('sky-v23-photo-fallback');
      stars.classList.add('sky-v23-stars-fallback');
      status = 'css-fallback';
    }
    updateInfo();
  }

  window.StudySkyMotion = Object.freeze({
    getStatus: () => ({
      version: 'v23',
      status,
      durationMs: DURATION_MS,
      distanceVw: HALF_SHIFT_VW * 2,
      reducedMotion: reduced.matches,
      photoTimeMs: animations[0]?.currentTime ?? null,
      photoTransform: getComputedStyle(photo).transform,
      starsTransform: getComputedStyle(stars).transform
    }),
    restart: start
  });

  start();
  if (reduced.addEventListener) reduced.addEventListener('change', start);
  else if (reduced.addListener) reduced.addListener(start);
})();
