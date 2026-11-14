(function () {
  const registry = [
    { id: 'az900', visible: true, name: 'Microsoft Azure Fundamentals', shortName: 'AZ-900', description: 'Practice simulator for Microsoft Azure Fundamentals.', questionCount: 200, questionsPerPractice: 10 },
    { id: 'matematicas-9-mep', visible: true, name: 'Matemáticas 9.º Año — MEP', shortName: 'Matemáticas 9.º', description: '170 ejercicios de 2025 y 2026 con preguntas y procedimientos explicados.', questionCount: 170, questionsPerPractice: 10 },
    { id: 'example', visible: false, name: 'Example', shortName: 'Example', description: 'A minimal template course that demonstrates the generic study simulator.', questionCount: 3, questionsPerPractice: 10 }
  ];
  const app = document.getElementById('app');
  let request = 0;
  window.STUDY_COURSE_REGISTRY = registry.map(course => ({ ...course }));

  function theme() { return 'dark'; }
  function applyTheme() { document.documentElement.dataset.theme = theme(); }
  function practiceSummary(course) {
    try {
      const records = JSON.parse(localStorage.getItem('study_' + course.id + (course.id === 'matematicas-9-mep' ? '_v2' : '') + '_practice_tests') || '{}');
      const total = Math.floor(course.questionCount / course.questionsPerPractice);
      const done = Array.from({ length: total }, (_, i) => records[i + 1]).filter(record => record && record.completed);
      const best = done.length ? Math.round(done.reduce((sum, record) => sum + (record.bestPercentage || 0), 0) / done.length) : null;
      return { total, done: done.length, best };
    } catch (_) { return { total: Math.floor(course.questionCount / course.questionsPerPractice), done: 0, best: null }; }
  }
  function esc(value) { return String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]); }
  function landing() {
    document.body.dataset.cosmicView = 'landing';
    request++;
    window.StudyApp?.destroy?.();
    window.STUDY_COURSE_ID = null;
    document.documentElement.lang = 'en';
    document.title = 'Study Practice Simulator';
    if (window.CosmicLanding?.render) {
      window.CosmicLanding.render({ registry, practiceSummary, loadCourse, applyTheme });
      return;
    }
    const cards = registry.filter(course => course.visible).map(course => {
      const progress = practiceSummary(course), continued = progress.done > 0;
      const status = continued ? `<p class="course-progress">${progress.done} of ${progress.total} practice tests completed${progress.best === null ? '' : ` · Best average: ${progress.best}%`}</p>` : '<p class="course-progress">Ready when you are.</p>';
      return `<article class="course-card"><span class="course-icon" aria-hidden="true">${course.id === 'az900' ? 'A' : '∑'}</span><p class="eyebrow">${esc(course.shortName)}</p><h2>${esc(course.name)}</h2><p class="sub">${esc(course.description)}</p><div class="course-facts"><span>${course.questionCount} questions</span><span>${progress.total} practice tests</span></div>${status}<button class="btn" data-course-id="${esc(course.id)}">${continued ? 'Continue studying' : 'Start studying'} →</button></article>`;
    }).join('');
    const publicCourses = registry.filter(course => course.visible);
    const summaries = publicCourses.map(course => ({ course, progress: practiceSummary(course) }));
    const totalCompleted = summaries.reduce((sum, item) => sum + item.progress.done, 0);
    const totalTests = summaries.reduce((sum, item) => sum + item.progress.total, 0);
    const overview = `<section class="cosmic-overview" aria-label="Study progress"><div class="cosmic-overview-head"><span class="cosmic-overview-eyebrow">Your learning journey</span><strong>${totalCompleted} / ${totalTests} practices</strong><small>Completed across all courses</small></div><div class="cosmic-overview-tracks">${summaries.map(({ course, progress }) => { const percentage = progress.total ? Math.round(progress.done / progress.total * 100) : 0; return `<div class="cosmic-progress-row"><div class="cosmic-track-head"><span>${esc(course.shortName)}</span><strong>${percentage}%</strong></div><div class="cosmic-track" role="progressbar" aria-label="${esc(course.shortName)} completed" aria-valuenow="${percentage}" aria-valuemin="0" aria-valuemax="100"><div class="cosmic-track-fill" style="width:${percentage}%"></div></div></div>`; }).join('')}</div></section>`;
    app.innerHTML = `<main id="main" class="landing"><header class="cosmic-header"><span class="cosmic-brand"><span class="cosmic-brand-symbol" aria-hidden="true">✦</span> Study Practice Simulator</span></header><section class="landing-hero"><p class="eyebrow">Study Practice Simulator</p><h1>Learn smarter.<em>Achieve more.</em></h1><p class="sub">Practice, track your progress, and master every topic.</p></section><section class="course-grid" aria-label="Available courses">${cards}</section>${overview}</main>`;
    app.querySelectorAll('[data-course-id]').forEach(button => button.addEventListener('click', () => loadCourse(button.dataset.courseId)));
    applyTheme();
  }
  function load(src, token) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script'); script.src = src + (window.STUDY_COURSE_ID === 'matematicas-9-mep' ? '?v=mep170-inline-20261114' : '');
      script.onload = () => token === request ? resolve() : reject(new Error('Stale course request'));
      script.onerror = () => reject(new Error('Course asset could not load'));
      document.body.appendChild(script);
    });
  }
  async function loadCourse(id, startView = 'dashboard') {
    if (!registry.some(course => course.id === id)) return landing();
    const token = ++request;
    window.StudyApp?.destroy?.();
    window.STUDY_COURSE_ID = id;
    window.STUDY_START_VIEW = startView;
    try { localStorage.setItem('study_last_course', id); } catch (_) {}
    app.innerHTML = '<main id="main" class="load-error"><p>Loading course…</p></main>';
    try {
      await load('./courses/' + id + '/config.js', token);
      if (id === 'matematicas-9-mep') {
        await load('./courses/matematicas-9-mep/official-data.js', token);
        await load('./courses/matematicas-9-mep/inline-2025.js', token);
        await load('./courses/matematicas-9-mep/inline-2026-01.js', token);
        await load('./courses/matematicas-9-mep/inline-2026-02.js', token);
      }
      await load('./courses/' + id + '/questions.js', token);
      if (id === 'az900') await load('./courses/az900/questions-extra.js', token);
      await load('./js/visuals.js', token);
      await load('./js/storage.js', token);
      await load('./js/app.js', token);
    } catch (_) {
      if (token === request) app.innerHTML = '<main id="main" class="load-error"><h1>Course could not load</h1><p>Check that the course files are present and use a supported course ID.</p></main>';
    }
  }
  window.StudySimulator = { showLanding: landing, loadCourse, applyTheme };
  const requested = new URLSearchParams(window.location.search).get('course');
  if (requested && registry.some(course => course.id === requested)) { if (window.history?.replaceState) window.history.replaceState(window.history.state, '', window.location.pathname); loadCourse(requested); } else landing();
})();
