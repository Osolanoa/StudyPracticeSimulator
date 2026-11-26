/* Sky Motion V23
 * A single synchronized controller moves the original space photo and stars
 * together. Users can adjust 1%-10% speed in the study Settings UI;
 * 1%=8 minutes/trip, 10%=48 seconds/trip. The preference is global
 * and persists across courses, while the background image never changes.
 */
(() => {
  'use strict';

  const scene = document.getElementById('cosmic-scene');
  const photo = scene?.querySelector('.cosmic-lite-photo');
  const stars = scene?.querySelector('.cosmic-lite-stars');
  if (!photo || !stars) return;

  const DURATION_MS = 480000; // base duration at speed 1%
  const HALF_SHIFT_VW = 0.75; // 1.5vw total travel; speed never changes distance
  const STEPS_PER_TRIP = 240;
  const SCALE = 1.035; // prevents exposed borders during movement
  const SPEED_KEY = 'study_sky_speed_percent';
  const DEFAULT_SPEED = 2; // 4 minutes/trip, between former too-slow and too-fast values
  const normalizeSpeed = raw => {
    const number = Number(raw);
    return Number.isFinite(number) ? Math.max(1, Math.min(10, Math.round(number))) : DEFAULT_SPEED;
  };
  function readSpeed() {
    try {
      const stored = localStorage.getItem(SPEED_KEY);
      return stored === null ? DEFAULT_SPEED : normalizeSpeed(stored);
    } catch (_) {
      return DEFAULT_SPEED; // storage blocked / private context
    }
  }
  let speedPercent = readSpeed();
  const durationPerTripMs = () => DURATION_MS / speedPercent;
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
      ? 'Firmamento: velocidad ' + speedPercent + '% · '
        + Math.round(durationPerTripMs() / 1000) + ' s por trayecto · ' + status
      : 'Firmamento: ' + status;
  }

  function stop() {
    for (const animation of animations) animation.cancel();
    animations = [];
    photo.classList.remove('sky-v23-photo-fallback');
    stars.classList.remove('sky-v23-stars-fallback');
    photo.style.transform = '';
    stars.style.transform = '';
    photo.style.animationDuration = '';
    stars.style.animationDuration = '';
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
      // 240 sub-pixel steps per trip (~0.1px each) instead of 60 updates per
      // second. The drift looks identical, but blurred glass panels no longer
      // have to be repainted every frame, which was the main CPU/GPU cost.
      easing: 'steps(' + STEPS_PER_TRIP + ', end)',
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
      applyPlaybackSpeed();
      status = 'playing';
    } catch (_) {
      for (const animation of animations) animation.cancel();
      animations = [];
      photo.classList.add('sky-v23-photo-fallback');
      stars.classList.add('sky-v23-stars-fallback');
      applyPlaybackSpeed();
      status = 'css-fallback';
    }
    updateInfo();
  }

  // Alter playback speed without restarting or jumping to the start of the pan.
  // Native animations use playbackRate; CSS fallback uses duration per trip.
  function applyPlaybackSpeed() {
    for (const animation of animations) {
      if (typeof animation.updatePlaybackRate === 'function') animation.updatePlaybackRate(speedPercent);
      else animation.playbackRate = speedPercent;
    }
    const cssDuration = (DURATION_MS / speedPercent / 1000) + 's';
    if (status === 'css-fallback' || photo.classList.contains('sky-v23-photo-fallback')) {
      photo.style.animationDuration = cssDuration;
      stars.style.animationDuration = cssDuration;
    }
  }

  function setSpeedPercent(value) {
    const next = normalizeSpeed(value);
    speedPercent = next;
    try { localStorage.setItem(SPEED_KEY, String(next)); } catch (_) {}
    applyPlaybackSpeed();
    updateInfo();
    return next;
  }

  window.StudySkyMotion = Object.freeze({
    getStatus: () => ({
      version: 'v24',
      status,
      speedPercent,
      durationMs: durationPerTripMs(),
      baseDurationMs: DURATION_MS,
      distanceVw: HALF_SHIFT_VW * 2,
      reducedMotion: reduced.matches,
      photoTimeMs: animations[0]?.currentTime ?? null,
      photoTransform: getComputedStyle(photo).transform,
      starsTransform: getComputedStyle(stars).transform
    }),
    getSpeedPercent: () => speedPercent,
    setSpeedPercent,
    restart: start
  });

  start();
  if (reduced.addEventListener) reduced.addEventListener('change', start);
  else if (reduced.addListener) reduced.addListener(start);
})();
