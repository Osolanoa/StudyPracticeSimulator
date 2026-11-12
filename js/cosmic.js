/* Continuously evolving celestial background. No video, GIF or reset loop. */
(function(){
'use strict';
const app=document.getElementById('app');
if(!app||document.getElementById('cosmic-scene'))return;
const scene=document.createElement('div');scene.id='cosmic-scene';scene.setAttribute('aria-hidden','true');
scene.innerHTML='<div class="cosmic-mist"></div><img class="cosmic-nebula-photo" alt="" decoding="async" src="https://cdn.eso.org/images/wallpaper3/eso1208db.jpg"><canvas></canvas><img class="cosmic-galaxy-photo" alt="" decoding="async" src="https://science.nasa.gov/wp-content/uploads/2023/04/hubble_the_whirlpool_galaxy_and_companion_galaxy_m51_apr_2005.png?w=900"><img class="cosmic-atmosphere" alt="" decoding="async" src="./assets/cosmic-atmosphere.svg"><img class="cosmic-cliffs cosmic-cliffs--left" alt="" decoding="async" src="https://cdn.esawebb.org/archives/images/screen/weic2205a.jpg"><img class="cosmic-cliffs cosmic-cliffs--right" alt="" decoding="async" src="https://cdn.esawebb.org/archives/images/screen/weic2205a.jpg"><img class="cosmic-cliffs cosmic-cliffs--floor" alt="" decoding="async" src="https://cdn.esawebb.org/archives/images/screen/weic2205a.jpg"><div class="cosmic-body cosmic-moon"><img alt="" decoding="async" src="https://assets.science.nasa.gov/dynamicimage/assets/science/cds/general/images/2024/05/christmas2015fullmoon.jpg?crop=faces%2Cfocalpoint&amp;fit=clip&amp;h=1600&amp;w=1600"></div><div class="cosmic-body cosmic-sun"><div class="cosmic-solar-disc"><canvas class="cosmic-solar-surface"></canvas><img alt="" decoding="async" src="https://sdo.gsfc.nasa.gov/assets/img/latest/latest_1024_0304.jpg"></div><canvas class="cosmic-solar-corona"></canvas></div><div class="cosmic-earth-globe"><img src="https://d2pn8kiwq2w21t.cloudfront.net/original_images/1_-_city_lights_namerica_8k.jpg" alt="" decoding="async"></div><div class="cosmic-horizon"></div><img class="cosmic-solar-loops" alt="" decoding="async" src="./assets/cosmic-solar-prominences.svg"><div class="cosmic-vignette"></div>';
app.parentNode.insertBefore(scene,app);
scene.querySelectorAll('.cosmic-body img').forEach(img=>{
  img.addEventListener('load',()=>img.parentElement.classList.add('is-loaded'));
  img.addEventListener('error',()=>{
    if(img.closest('.cosmic-sun')&&!img.dataset.fallback){
      img.dataset.fallback='1';
      img.src='https://assets.science.nasa.gov/dynamicimage/assets/science/cds/creative/calendars/2025/nasa-july-2025-web-banner.jpg?fit=clip&w=1280';
    }else{img.parentElement.classList.add('image-failed');img.remove();}
  });
});
const earthPhoto=scene.querySelector('.cosmic-earth-globe img');
earthPhoto.addEventListener('error',()=>{if(earthPhoto.dataset.fallback)return;earthPhoto.dataset.fallback='1';
earthPhoto.src='https://assets.science.nasa.gov/dynamicimage/assets/science/esd/eo/content-feature/nightlights/images/media/BlackMarble_2016_Americas_composite.png?fit=clip&w=1600';});
const canvas=scene.querySelector('canvas'),ctx=canvas.getContext('2d',{alpha:true});
const moon=scene.querySelector('.cosmic-moon'),sun=scene.querySelector('.cosmic-sun');const atmosphere=scene.querySelector('.cosmic-atmosphere'),solarLoops=scene.querySelector('.cosmic-solar-loops');const clouds=Array.from(scene.querySelectorAll('.cosmic-cliffs'));

const motionQuery=window.matchMedia('(prefers-reduced-motion: reduce)');
const mode=motionQuery.matches?'reduced':'high';
document.body.dataset.cosmicEffect=mode;
let width=0,height=0,dpr=1,last=0,elapsed=0,raf=0;

function rand(n,s){const v=Math.sin(n*127.13+s*311.71)*43758.5453;return v-Math.floor(v)}
const stars=Array.from({length:350},(_,i)=>({x:rand(i,2),y:rand(i,3),radius:.35+rand(i,4)*1.4,phase:rand(i,5)*6.28,depth:rand(i,6),speed:.13+rand(i,7)*.28}));
const motes=Array.from({length:50},(_,i)=>({phase:rand(i,10)*Math.PI*2,radius:.2+rand(i,11)*.8,rate:.012+rand(i,12)*.045,brightness:.2+rand(i,13)*.7}));
function measure(){width=window.innerWidth;height=window.innerHeight;dpr=Math.min(window.devicePixelRatio||1,1.65);if(!ctx)return;canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);drawStatic()}
function drawStatic(){if(!ctx)return;ctx.clearRect(0,0,width,height);drawNebula(false);drawStars(false);drawOrbits(false)}
function drawNebula(animate){const time=animate?elapsed:0;const clouds=[
[.20+.04*Math.sin(time*.025),.27,.37,30,79,172],
[.77+.04*Math.sin(time*.019+2),.35,.33,95,39,140],
[.92+.02*Math.sin(time*.015+1),.85,.30,198,73,24]];
for(const c of clouds){const [x,y,r,red,green,blue]=c,rad=Math.max(width,height)*r;const g=ctx.createRadialGradient(width*x,height*y,0,width*x,height*y,rad);g.addColorStop(0,'rgba('+red+','+green+','+blue+',0.16)');g.addColorStop(.5,'rgba('+red+','+green+','+blue+',0.065)');g.addColorStop(1,'rgba('+red+','+green+','+blue+',0)');ctx.fillStyle=g;ctx.fillRect(0,0,width,height)}}
function drawStars(animate){for(const star of stars){const x=star.x*width,y=star.y*height;const alpha=animate?.25+.38*(.5+.5*Math.sin(elapsed*star.speed+star.phase)):.38;ctx.fillStyle='rgba(195,222,255,'+alpha+')';ctx.beginPath();ctx.arc(x,y,star.radius,0,Math.PI*2);ctx.fill()}}
function drawStreaks(animate) {
  if(!animate)return;
  // Independent timings avoid a global scene reset; each moving glint fades naturally.
  const streaks=[
    {start:13.7,interval:43.1,y:.30,x:.80,dx:-.18,dy:.17},
    {start:4.5,interval:57.7,y:.62,x:.31,dx:.15,dy:-.09},
    {start:27.9,interval:71.3,y:.41,x:.71,dx:-.12,dy:.11}
  ];
  for(const meteor of streaks){
    const phase=((elapsed-meteor.start)%meteor.interval+meteor.interval)%meteor.interval;
    if(phase>2.2)continue;
    const u=phase/2.2;
    const envelope=Math.sin(Math.PI*u);
    const x=(meteor.x+meteor.dx*u)*width;
    const y=(meteor.y+meteor.dy*u)*height;
    const tail=Math.max(18,Math.min(width,height)*.082);
    const angle=Math.atan2(meteor.dy,meteor.dx);
    const g=ctx.createLinearGradient(x-Math.cos(angle)*tail,y-Math.sin(angle)*tail,x,y);
    g.addColorStop(0,'rgba(104,175,245,0)');
    g.addColorStop(.75,'rgba(111,190,255,'+(.18*envelope)+')');
    g.addColorStop(1,'rgba(223,243,255,'+(.79*envelope)+')');
    ctx.strokeStyle=g;ctx.lineWidth=1.4;ctx.beginPath();
    ctx.moveTo(x-Math.cos(angle)*tail,y-Math.sin(angle)*tail);ctx.lineTo(x,y);ctx.stroke();
    ctx.fillStyle='rgba(243,252,255,'+(.70*envelope)+')';
    ctx.beginPath();ctx.arc(x,y,1.6,0,Math.PI*2);ctx.fill();
  }
}
function drawOrbits(animate){ctx.save();ctx.translate(width*.5,height*.56);ctx.rotate(-.17);ctx.scale(1,.37);for(let j=0;j<2;j++){ctx.beginPath();ctx.ellipse(0,0,width*(.51+j*.14),height*(.84+j*.18),0,0,Math.PI*2);ctx.lineWidth=.9;ctx.strokeStyle=j?'rgba(255,158,106,.19)':'rgba(112,159,249,.30)';ctx.stroke()}if(animate)for(let i=0;i<motes.length;i++){const m=motes[i],a=m.phase+elapsed*m.rate,x=width*(.51+m.radius*.11)*Math.cos(a),y=height*(.84+m.radius*.13)*Math.sin(a);ctx.beginPath();ctx.arc(x,y,.7+m.brightness*1.6,0,Math.PI*2);ctx.fillStyle='rgba(170,208,255,'+(m.brightness*.65)+')';ctx.fill()}ctx.restore()}
function render(time){raf=0;if(document.hidden||mode!=='high'||document.body.dataset.cosmicView==='session'||document.documentElement.dataset.theme==='light')return;if(!last)last=time;const dt=Math.min((time-last)/1000,.05);last=time;elapsed+=dt;if(ctx){ctx.clearRect(0,0,width,height);drawNebula(true);drawStars(true);drawOrbits(true);drawStreaks(true)}
// Independent ambient motion only. No mouse-tracking parallax.
atmosphere.style.transform='translate3d('+(Math.sin(elapsed*.017)*4.5).toFixed(2)+'px,'+(Math.cos(elapsed*.011)*2.5).toFixed(2)+'px,0) scale(1.015)';
clouds.forEach((cloud,i)=>{const rate=.011+i*.004;cloud.style.transform='translate3d('+(Math.sin(elapsed*rate+i)*4).toFixed(2)+'px,'+(Math.cos(elapsed*rate*.7+i)*2).toFixed(2)+'px,0) scale(1.015)';});
raf=requestAnimationFrame(render)}
function start(){if(raf||document.hidden||mode!=='high'||document.body.dataset.cosmicView==='session'||document.documentElement.dataset.theme==='light')return;last=0;raf=requestAnimationFrame(render)}
function stop(){if(raf){cancelAnimationFrame(raf);raf=0}}
window.addEventListener('resize',measure,{passive:true});document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();else start()});
const themeObserver=new MutationObserver(()=>{if(document.documentElement.dataset.theme==='light')stop();else start()});themeObserver.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
const viewObserver=new MutationObserver(()=>{
 if(document.body.dataset.cosmicView==='session'){stop();drawStatic();}
 else if(mode==='high')start();
});
viewObserver.observe(document.body,{attributes:true,attributeFilter:['data-cosmic-view']});
measure();if(mode==='high')start();
})();