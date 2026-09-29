(function () {
  const registry = ['az900', 'example'];
  const requested = new URLSearchParams(window.location.search).get('course') || 'az900';
  const courseId = registry.includes(requested) ? requested : 'az900';
  window.STUDY_COURSE_ID = courseId;
  window.STUDY_COURSE_REGISTRY = registry.slice();

  function load(src, done) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = done;
    script.onerror = function () {
      document.getElementById('app').innerHTML =
        '<main class="load-error"><h1>Course could not load</h1><p>Check that the course files are present and use a supported course ID.</p></main>';
    };
    document.body.appendChild(script);
  }

  load('./courses/' + courseId + '/config.js', function () {
    load('./courses/' + courseId + '/questions.js', function () {
      load('./js/visuals.js', function () {
        load('./js/storage.js', function () {
          load('./js/app.js', function () {});
        });
      });
    });
  });
})();
