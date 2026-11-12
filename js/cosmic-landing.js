/* Cinematic landing: design system plus real course navigation, no invented features. */
(function () {
  'use strict';
  const icons = {
    orbit: '<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="8" fill="none" stroke="currentColor" stroke-width="2.2"/><ellipse cx="16" cy="16" rx="15" ry="6.3" transform="rotate(-25 16 16)" fill="none" stroke="currentColor" stroke-width="2.1"/><circle cx="27.8" cy="10.6" r="2.5" fill="currentColor"/></svg>',
    home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-7 9 7v10h-6v-7H9v7H3z"/></svg>',
    courses: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 9 5-9 5-9-5 9-5Zm-9 10 9 5 9-5M3 17l9 5 9-5"/></svg>',
    practice: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><path d="m13 11 7-7"/></svg>',
    progress: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="12" width="3" height="9" rx="1"/><rect x="10" y="7" width="3" height="14" rx="1"/><rect x="17" y="3" width="3" height="18" rx="1"/></svg>',
    settings: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="m9.9 2 4.2 0 .7 2.9 2 .9 2.7-1.2 2.7 3.4-2 2.3.1 2.2 2 2.3-2.7 3.4-2.7-1.2-2 .9-.7 2.9H9.9l-.7-2.9-2-.9-2.7 1.2-2.7-3.4 2-2.3-.1-2.2-2-2.3 2.7-3.4 2.7 1.2 2-.9z" transform="translate(0 1) scale(1 .91)"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 4 13 8-13 8z"/></svg>',
    bookmark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h14v18l-7-5-7 5z"/></svg>',
    mistakes: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 7 5-5 5 5M12 2v12a7 7 0 1 0 7 7"/><path d="M8 19h8"/></svg>',
    exam: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6m-6 4h6m-6 4h4"/></svg>',
    cloud: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18a4 4 0 0 1-1-7.9A7 7 0 0 1 18 10a4 4 0 1 1 0 8H6Z"/></svg>',
    math: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 8h4m-2-2v4m5-2h4M7 15h4m3-2 4 4m0-4-4 4"/></svg>'
  };
  const esc = value => String(value).replace(/[&<>"']/g,c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function render({registry,practiceSummary,loadCourse,applyTheme}) {
    const app=document.getElementById('app');
    applyTheme();
    const courses=registry.filter(c=>c.visible);
    const overview=courses.map(course=>({course,progress:practiceSummary(course)}));
    const percent=progress=>progress.total ? Math.min(100,Math.round(progress.done/progress.total*100)):0;
    const cards=overview.map(({course,progress},i)=>{
      const p=percent(progress),math=course.id.includes('matematicas');
      return '<article data-cosmic-card="'+esc(course.id)+'" class="cosmos-course '+(math?'cosmos-course--math':'cosmos-course--azure')+'">'+
        '<div class="cosmos-course-visual" aria-hidden="true"><span class="cosmos-course-symbol">'+(math?icons.math:icons.cloud)+'</span><span class="cosmos-course-orb"></span></div>'+
        '<div class="cosmos-course-copy"><span class="cosmos-label">'+esc(course.shortName)+'</span><h3>'+esc(course.name)+'</h3><p>'+esc(course.description)+'</p>'+
        '<div class="cosmos-facts"><span>'+course.questionCount+' questions</span><span>'+progress.total+' practice tests</span></div>'+
        '<div class="cosmos-track-label"><span>Study progress</span><strong>'+p+'%</strong></div>'+
        '<div class="cosmos-track" role="progressbar" aria-label="'+esc(course.shortName)+' completed" aria-valuenow="'+p+'" aria-valuemin="0" aria-valuemax="100"><span style="width:'+p+'%"></span></div>'+
        '<button type="button" class="cosmos-course-go" data-cosmic-course="'+esc(course.id)+'">'+(progress.done?'Continue course':'Explore course')+' '+icons.arrow+'</button></div>'+
        '</article>';
    }).join('');
    app.innerHTML='<main id="main" class="cosmos-landing cosmos-landing--compact">'+
      '<section class="cosmos-title-area cosmos-title-area--premium" aria-labelledby="cosmos-title"><h1 id="cosmos-title" aria-label="Study Practice Simulator"><span class="premium-title-line premium-title-line--top">Study Practice</span> <span class="premium-title-line premium-title-line--bottom" data-reflection="Simulator">Simulator</span></h1></section>'+
      '<section class="cosmos-courses" id="cosmos-courses" aria-labelledby="cosmos-courses-title"><div class="cosmos-section-head"><h2 id="cosmos-courses-title">Your courses</h2></div><div class="cosmos-course-grid">'+cards+'</div></section>'+

      '<footer class="cosmos-footer"><span>Celestial imagery: NASA · ESA/Webb · ESO</span><span>Made for focused learning</span></footer></main>';
    const buttons=app.querySelectorAll('[data-cosmic-course]');
    buttons.forEach(b=>b.addEventListener('click',()=>loadCourse(b.dataset.cosmicCourse,'dashboard')));
    app.querySelectorAll('[data-cosmic-card]').forEach(card=>card.addEventListener('click',event=>{
      if(event.target.closest('button'))return;
      loadCourse(card.dataset.cosmicCard,'dashboard');
    }));
  }
  window.CosmicLanding={render};
})();