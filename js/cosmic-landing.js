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
    const total=overview.reduce((sum,x)=>sum+x.progress.total,0);
    const completed=overview.reduce((sum,x)=>sum+x.progress.done,0);
    const currentId=(()=>{try {return localStorage.getItem('study_last_course')} catch(_){return null}})();
    const preferred=courses.find(c=>c.id===currentId) || courses.find(c=>!practiceSummary(c).done) || courses[0];
    const choose=(view='dashboard')=>{if(preferred)loadCourse(preferred.id,view)};
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
    const navItems=[
      ['home','Home','home'],['courses','Courses','courses'],['practice','Practice','practice'],['progress','Progress','progress'],['settings','Settings','settings']
    ];
    const nav=navItems.map(([action,label,icon])=>
      '<button type="button" class="cosmos-nav-link '+(action==='home'?'is-active':'')+'" data-cosmic-action="'+action+'" '+(action==='home'?'aria-current="page"':'')+'>'+icons[icon]+'<span>'+label+'</span></button>'
    ).join('');
    const quick=[['practice','Practice now','practice'],['exam','Take exam','exam'],['mistakes','Review mistakes','mistakes'],['bookmarks','Saved questions','bookmark'],['settings','Settings','settings']];
    const quickNav=quick.map(([action,label,icon])=>'<button type="button" class="cosmos-shortcut" data-cosmic-action="'+action+'">'+icons[icon]+'<span>'+label+'</span></button>').join('');
    app.innerHTML='<main id="main" class="cosmos-landing">'+
      '<header class="cosmos-topnav"><div class="cosmos-brand">'+icons.orbit+'<span>Study Practice<br>Simulator</span></div>'+
      '<nav aria-label="Main navigation" class="cosmos-nav-links">'+nav+'</nav>'+
      '<button type="button" class="cosmos-theme" data-cosmic-action="theme" aria-label="Switch color theme">'+icons.settings+'<span>Theme</span></button></header>'+
      '<section class="cosmos-hero" aria-labelledby="cosmos-title"><p class="cosmos-kicker"><span></span> STUDY PRACTICE SIMULATOR <span></span></p>'+
      '<h1 id="cosmos-title">Master your subjects<br><em>with focused practice.</em></h1>'+
      '<p class="cosmos-hero-sub">Study, practice, and track your progress in a smarter, more engaging way.</p>'+
      '<div class="cosmos-hero-actions"><button type="button" class="cosmos-btn cosmos-btn--primary" data-cosmic-action="start">'+icons.play+'<span>Start studying</span>'+icons.arrow+'</button>'+
      '<button type="button" class="cosmos-btn cosmos-btn--secondary" data-cosmic-action="progress">'+icons.progress+'<span>View progress</span>'+icons.arrow+'</button></div></section>'+
      '<section class="cosmos-courses" id="cosmos-courses" aria-labelledby="cosmos-courses-title"><div class="cosmos-section-head"><h2 id="cosmos-courses-title">Your courses</h2><button type="button" class="cosmos-see-all" data-cosmic-action="courses">See all courses →</button></div><div class="cosmos-course-grid">'+cards+'</div></section>'+
      '<nav class="cosmos-quick" aria-label="Quick actions">'+quickNav+'</nav>'+
      '<footer class="cosmos-footer"><span>Celestial imagery: NASA · ESA/Webb · ESO</span><span>Made for focused learning</span></footer></main>';
    const buttons=app.querySelectorAll('[data-cosmic-course]');
    buttons.forEach(b=>b.addEventListener('click',()=>loadCourse(b.dataset.cosmicCourse,'dashboard')));
    app.querySelectorAll('[data-cosmic-card]').forEach(card=>card.addEventListener('click',event=>{
      if(event.target.closest('button'))return;
      loadCourse(card.dataset.cosmicCard,'dashboard');
    }));
    function updateActive(action) {
      app.querySelectorAll('.cosmos-nav-link').forEach(b=>{
        const active=b.dataset.cosmicAction===action;b.classList.toggle('is-active',active);
        if(active)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');
      });
    }
    app.querySelectorAll('[data-cosmic-action]').forEach(b=>b.addEventListener('click',()=>{
      const action=b.dataset.cosmicAction;
      if(action==='theme'){
        const next=document.documentElement.dataset.theme==='dark'?'light':'dark';
        try{localStorage.setItem('study_theme',next)}catch(_){}
        document.documentElement.dataset.theme=next;return;
      }
      if(action==='home'){window.scrollTo({top:0,behavior:'smooth'});updateActive(action);return}
      if(action==='courses'){document.getElementById('cosmos-courses')?.scrollIntoView({behavior:'smooth',block:'start'});updateActive(action);return}
      const views={start:'dashboard',practice:'practiceTests',exam:'examSetup',mistakes:'mistakes',bookmarks:'bookmarks',settings:'settings',progress:'dashboard'};
      if(views[action])choose(views[action]);
    }));
  }
  window.CosmicLanding={render};
})();