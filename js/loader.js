(function () {
  const registry = [
    { id: 'az900', visible: true, name: 'Microsoft Azure Fundamentals', shortName: 'AZ-900', description: 'Practice simulator for Microsoft Azure Fundamentals.', questionCount: 150, questionsPerPractice: 10 },
    { id: 'matematicas-9-mep', visible: true, name: 'Matemáticas 9.º Año — MEP', shortName: 'Matemáticas 9.º', description: 'Práctica para la segunda convocatoria de Matemáticas de noveno año del MEP de Costa Rica.', questionCount: 60, questionsPerPractice: 10 },
    { id: 'example', visible: false, name: 'Example', shortName: 'Example', description: 'A minimal template course that demonstrates the generic study simulator.', questionCount: 3, questionsPerPractice: 10 }
  ];
  const app = document.getElementById('app');
  let request = 0;
  window.STUDY_COURSE_REGISTRY = registry.map(course => ({ ...course }));

  function theme() { return localStorage.getItem('study_theme') || localStorage.getItem('study_az900_theme') || localStorage.getItem('study_matematicas-9-mep_theme') || 'dark'; }
  function applyTheme() { document.documentElement.dataset.theme = theme(); }
  function practiceSummary(course) {
    try {
      const records = JSON.parse(localStorage.getItem('study_' + course.id + '_practice_tests') || '{}');
      const total = Math.floor(course.questionCount / course.questionsPerPractice);
      const done = Array.from({ length: total }, (_, i) => records[i + 1]).filter(record => record && record.completed);
      const best = done.length ? Math.round(done.reduce((sum, record) => sum + (record.bestPercentage || 0), 0) / done.length) : null;
      return { total, done: done.length, best };
    } catch (_) { return { total: Math.floor(course.questionCount / course.questionsPerPractice), done: 0, best: null }; }
  }
  function esc(value) { return String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]); }
  function landing() {
    request++;
    window.StudyApp?.destroy?.();
    window.STUDY_COURSE_ID = null;
    document.documentElement.lang = 'en';
    document.title = 'Study Practice Simulator';
    const cards = registry.filter(course => course.visible).map(course => {
      const progress = practiceSummary(course), continued = progress.done > 0;
      const status = continued ? `<p class="course-progress">${progress.done} of ${progress.total} practice tests completed${progress.best === null ? '' : ` · Best average: ${progress.best}%`}</p>` : '<p class="course-progress">Ready when you are.</p>';
      return `<article class="course-card"><p class="eyebrow">${esc(course.shortName)}</p><h2>${esc(course.name)}</h2><p class="sub">${esc(course.description)}</p><div class="course-facts"><span>${course.questionCount} questions</span><span>${progress.total} practice tests</span></div>${status}<button class="btn" data-course-id="${esc(course.id)}">${continued ? 'Continue studying' : 'Start studying'}</button></article>`;
    }).join('');
    app.innerHTML = `<main id="main" class="landing"><section class="landing-hero"><p class="eyebrow">Study Practice Simulator</p><h1>Choose a subject to continue studying.</h1><p class="sub">Select a course to practice, review progress, or take a timed exam.</p></section><section class="course-grid" aria-label="Available courses">${cards}</section></main>`;
    app.querySelectorAll('[data-course-id]').forEach(button => button.addEventListener('click', () => loadCourse(button.dataset.courseId)));
    applyTheme();
  }
  function load(src, token) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script'); script.src = src;
      script.onload = () => token === request ? resolve() : reject(new Error('Stale course request'));
      script.onerror = () => reject(new Error('Course asset could not load'));
      document.body.appendChild(script);
    });
  }
  async function loadCourse(id) {
    if (!registry.some(course => course.id === id)) return landing();
    const token = ++request;
    window.StudyApp?.destroy?.();
    window.STUDY_COURSE_ID = id;
    app.innerHTML = '<main id="main" class="load-error"><p>Loading course…</p></main>';
    try {
      await load('./courses/' + id + '/config.js', token);
      await load('./courses/' + id + '/questions.js', token);
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
