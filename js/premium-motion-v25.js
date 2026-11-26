/* V25 premium motion layer: ripple, cursor light, card tilt, entrance
   animations, answer feedback, score count-up and confetti. Works on top of
   the markup rendered by loader.js / app.js without changing it. */
(function () {
  const app = document.getElementById('app');
  if (!app) return;
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  let lastKey = '', lastLocked = '', lastScoreKey = '';

  // Ripple on press
  app.addEventListener('pointerdown', e => {
    const b = e.target.closest('.btn, .cosmos-landing button');
    if (!b || b.disabled || reduced()) return;
    const r = b.getBoundingClientRect(), d = Math.max(r.width, r.height), s = document.createElement('span');
    s.className = 'pm-ripple';
    s.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - r.left - d / 2}px;top:${e.clientY - r.top - d / 2}px`;
    b.appendChild(s);
    setTimeout(() => s.remove(), 650);
  });

  // Cursor light on buttons and cards, tilt on course cards
  if (finePointer) {
    app.addEventListener('pointermove', e => {
      const el = e.target.closest('.btn, .cosmos-course, .option:not(:disabled)');
      if (!el) return;
      const r = el.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      el.style.setProperty('--pm-x', x + 'px');
      el.style.setProperty('--pm-y', y + 'px');
      if (el.classList.contains('cosmos-course') && !reduced()) {
        el.style.transform = `perspective(800px) rotateX(${(y / r.height - .5) * -5}deg) rotateY(${(x / r.width - .5) * 5}deg) translateY(-3px)`;
      } else if (el.classList.contains('option') && !reduced()) {
        el.style.transform = `perspective(900px) rotateX(${(y / r.height - .5) * -4}deg) rotateY(${(x / r.width - .5) * 1.5}deg) translateY(-2px)`;
      }
    });
    app.addEventListener('pointerout', e => {
      const el = e.target.closest('.cosmos-course, .option');
      if (el && !el.contains(e.relatedTarget)) el.style.transform = '';
    });
  }

  function screenKey() {
    const view = document.body.dataset.cosmicView || '';
    const heading = app.querySelector('.session-head h2, .content h1, .landing h1, .cosmos-landing h1');
    return view + '|' + (heading ? heading.textContent : '');
  }

  function countUp(el, to, format) {
    if (reduced()) return;
    const t0 = performance.now(), dur = 1200;
    (function step(t) {
      const p = Math.min(1, (t - t0) / dur), v = Math.round(to * (1 - Math.pow(1 - p, 3)));
      el.textContent = format(v);
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }

  function confetti() {
    if (reduced()) return;
    let c = document.getElementById('pm-confetti');
    if (!c) { c = document.createElement('canvas'); c.id = 'pm-confetti'; c.setAttribute('aria-hidden', 'true'); document.body.appendChild(c); }
    const x = c.getContext('2d'); c.width = innerWidth; c.height = innerHeight;
    const cols = ['#9cc4ff', '#c9d8ff', '#ffffff', '#ffd9a0', '#9fe3d0'];
    let P = Array.from({ length: 120 }, () => ({ x: innerWidth / 2, y: innerHeight * .45, vx: (Math.random() - .5) * 13, vy: -Math.random() * 12 - 4, r: Math.random() * 6 + 3, c: cols[Math.random() * cols.length | 0], a: Math.random() * 6, l: 1 }));
    (function f() {
      x.clearRect(0, 0, c.width, c.height);
      P.forEach(p => { p.vy += .35; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.a += .2; p.l -= .008; x.globalAlpha = Math.max(0, p.l); x.fillStyle = p.c; x.save(); x.translate(p.x, p.y); x.rotate(p.a); x.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2); x.restore(); });
      P = P.filter(p => p.l > 0 && p.y < innerHeight + 20);
      if (P.length) requestAnimationFrame(f); else c.remove();
    })();
  }

  function results() {
    const big = app.querySelector('.content .card h1[style*="4rem"]');
    if (!big) return;
    const key = screenKey() + big.textContent;
    if (key === lastScoreKey) return;
    lastScoreKey = key;
    const txt = big.textContent.trim();
    let pct = null;
    const frac = txt.match(/^(\d+)\s*\/\s*(\d+)$/), per = txt.match(/^(\d+)%$/);
    if (frac) { const n = +frac[1]; pct = +frac[2] ? n / +frac[2] * 100 : 0; const total = frac[2]; big.classList.add('pm-score'); countUp(big, n, v => v + ' / ' + total); }
    else if (per) { pct = +per[1]; big.classList.add('pm-score'); countUp(big, pct, v => v + '%'); }
    const verdict = big.parentElement.querySelector('h2');
    const v = verdict ? verdict.textContent : '';
    const passed = /NEEDS|REVIEW|REPAS|REVIS/i.test(v) ? false : /PASS|APROB/i.test(v) ? true : pct !== null && pct >= 70;
    if (passed) setTimeout(confetti, 900);
  }

  // Sidebar: one pill behind the active item that slides between items.
  let pillPos = null;
  function navPill() {
    const nav = app.querySelector('.side .nav'), active = nav && nav.querySelector('button.active');
    if (!nav || !active) return;
    let pill = nav.querySelector(':scope > .pm-nav-pill');
    if (!pill) { pill = document.createElement('span'); pill.className = 'pm-nav-pill'; pill.setAttribute('aria-hidden', 'true'); nav.prepend(pill); }
    const to = { top: active.offsetTop, height: active.offsetHeight };
    if (pillPos && !reduced() && (pillPos.top !== to.top)) {
      pill.style.transition = 'none';
      pill.style.top = pillPos.top + 'px'; pill.style.height = pillPos.height + 'px';
      void pill.offsetWidth; pill.style.transition = '';
    }
    pill.style.top = to.top + 'px'; pill.style.height = to.height + 'px';
    pillPos = to;
  }

  // Dashboard numbers count up when the screen opens.
  function statCountUp() {
    app.querySelectorAll('.card.stat strong').forEach(el => {
      const m = el.textContent.trim().match(/^(\d+)(%?)$/);
      if (m && +m[1] > 0) countUp(el, +m[1], v => v + m[2]);
    });
  }

  function enhance() {
    const key = screenKey();
    navPill();
    if (key !== lastKey) {
      lastKey = key;
      statCountUp();
      if (!reduced()) {
        app.classList.remove('pm-enter'); void app.offsetWidth; app.classList.add('pm-enter');
        clearTimeout(enhance.t); enhance.t = setTimeout(() => app.classList.remove('pm-enter'), 900);
      }
      lastLocked = '';
    }
    app.querySelectorAll('.cosmos-course, .option').forEach(card => {
      if (!card.querySelector(':scope > .pm-light')) { const l = document.createElement('span'); l.className = 'pm-light'; l.setAttribute('aria-hidden', 'true'); card.appendChild(l); }
    });
    // Answer feedback plays once, right after "Check answer"
    const locked = app.querySelector('.option.correct, .option.wrong');
    if (locked && lastLocked !== key) {
      lastLocked = key;
      app.querySelectorAll('.option.correct').forEach(o => o.classList.add('pm-correct'));
      app.querySelectorAll('.option.wrong').forEach(o => o.classList.add('pm-wrong'));
    } else if (!locked) lastLocked = '';
    const bm = app.querySelector('.bm-btn');
    if (bm) {
      const saved = bm.classList.contains('saved');
      if (saved && enhance.bmKey === key && enhance.bmSaved === false) bm.classList.add('pm-pop');
      enhance.bmKey = key; enhance.bmSaved = saved;
    }
    results();
  }

  const observer = new MutationObserver(() => { enhance(); });
  observer.observe(app, { childList: true });
  enhance();
})();
