(function () {
  const courseId = String((window.COURSE_CONFIG || {}).id || window.STUDY_COURSE_ID || 'default')
    .toLowerCase().replace(/[^a-z0-9_-]/g, '-');
  const prefix = 'study_' + courseId + '_';
  const names = ['stats', 'history', 'bookmarks', 'exams', 'practiceTests', 'settings'];
  const KEYS = Object.fromEntries(names.map(name => [name, prefix + ({
    stats: 'stats',
    history: 'question_history',
    bookmarks: 'bookmarks',
    exams: 'exam_history',
    practiceTests: 'practice_tests',
    settings: 'settings'
  })[name]]));
  const THEME_KEY = prefix + 'theme';
  const defaults = { randomizeAnswers: true, showTips: true, keyboard: true, timer: true,
    practiceCount: (window.COURSE_CONFIG || {}).questionsPerPractice || 10 };

  function read(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch (_) { return fallback; } }
  function write(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
  function migrateAz900() {
    if (courseId !== 'az900' || localStorage.getItem(prefix + 'migration_v1')) return;
    const legacy = {
      stats: 'az900_stats', history: 'az900_question_history', bookmarks: 'az900_bookmarks',
      exams: 'az900_exam_history', practiceTests: 'az900_practice_tests', settings: 'az900_settings'
    };
    if (localStorage.getItem(THEME_KEY) === null && localStorage.getItem('az900_theme') !== null) {
      localStorage.setItem(THEME_KEY, localStorage.getItem('az900_theme'));
    }
    Object.entries(legacy).forEach(([name, oldKey]) => {
      if (localStorage.getItem(KEYS[name]) === null && localStorage.getItem(oldKey) !== null) {
        localStorage.setItem(KEYS[name], localStorage.getItem(oldKey));
      }
    });
    localStorage.setItem(prefix + 'migration_v1', '1');
  }
  migrateAz900();

  window.StudyStorage = {
    get: (key, fallback) => read(KEYS[key], fallback),
    set: (key, value) => write(KEYS[key], value),
    settings: () => ({ ...defaults, ...read(KEYS.settings, {}) }),
    theme: () => localStorage.getItem(THEME_KEY) || 'dark',
    setTheme: theme => localStorage.setItem(THEME_KEY, theme),
    reset: () => Object.values(KEYS).forEach(key => localStorage.removeItem(key)),
    resetStats: () => ['stats', 'history', 'exams', 'practiceTests'].forEach(name => localStorage.removeItem(KEYS[name])),
    keys: KEYS,
    courseId
  };
})();
