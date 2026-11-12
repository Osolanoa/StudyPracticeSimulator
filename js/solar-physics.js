/* Cinematic solar physics layer — single continuously evolving solar disc.
   Canvas is an artistic procedural visualization; NASA imagery adds real solar detail.
   The solar surface never ends or resets a video timeline. */
(function () {
  'use strict';
  const sun=document.querySelector('#cosmic-scene .cosmic-sun');
  if(!sun)return;
  const surface=sun.querySelector('.cosmic-solar-surface');
  const corona=sun.querySelector('.cosmic-solar-corona');
  const ctx=surface?.getContext('2d',{alpha:true});
  const outer=corona?.getContext('2d',{alpha:true});
  if(!ctx||!outer)return;
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  const rand=n=>{const s=Math.sin(n*128.97+31.2)*43758.545;return s-Math.floor(s)};
  const spots=Array.from({length:88},(_,i)=>({
    a:rand(i+1)*Math.PI*2,
    r:Math.sqrt(rand(i+2))*.86,
    size:2+rand(i+3)*17,
    phase:rand(i+4)*7,
    speed:.027+rand(i+5)*.11,
    strength:.17+rand(i+6)*.45
  }));
  const arches=Array.from({length:21},(_,i)=>({
    angle:(.41+i*2.399+rand(i+37)*.3)*Math.PI,
    span:.12+rand(i+39)*.40,
    height:14+rand(i+41)*54,
    phase:rand(i+43)*6.28,
    speed:.17+rand(i+45)*.18,
    strength:.23+rand(i+47)*.4
  }));
  let raf=0,lastPaint=-1;
  const sizeSurface=384,sizeCorona=640;
  surface.width=sizeSurface;surface.height=sizeSurface;
  corona.width=sizeCorona;corona.height=sizeCorona;
  const diskR=sizeSurface*.497;
  function paintDisc(t){
    const C=sizeSurface/2,R=diskR;
    ctx.clearRect(0,0,sizeSurface,sizeSurface);
    ctx.save();ctx.beginPath();ctx.arc(C,C,R,0,Math.PI*2);ctx.clip();
    let g=ctx.createRadialGradient(C-R*.31,C-R*.24,R*.07,C,C,R*1.1);
    g.addColorStop(0,'#fff09c');
    g.addColorStop(.27,'#ffb630');
    g.addColorStop(.59,'#f97615');
    g.addColorStop(.82,'#de4c0b');
    g.addColorStop(1,'#772106');
    ctx.fillStyle=g;ctx.fillRect(0,0,sizeSurface,sizeSurface);
    // Slowly advect active regions across the entire visible disc.
    ctx.globalCompositeOperation='screen';
    for(const spot of spots){
      const a=spot.a+Math.sin(t*spot.speed+spot.phase)*.11;
      const radial=spot.r*(.99+.02*Math.sin(t*.11+spot.phase));
      const x=C+Math.cos(a)*R*radial, y=C+Math.sin(a)*R*radial;
      const w=spot.size*(1+.19*Math.sin(t*spot.speed*2+spot.phase));
      const glow=ctx.createRadialGradient(x,y,0,x,y,w*2.2);
      glow.addColorStop(0,'rgba(255,245,178,'+(spot.strength*.85).toFixed(3)+')');
      glow.addColorStop(.35,'rgba(255,177,50,'+(spot.strength*.3).toFixed(3)+')');
      glow.addColorStop(1,'rgba(255,116,15,0)');
      ctx.fillStyle=glow;ctx.fillRect(x-w*2.2,y-w*2.2,w*4.4,w*4.4);
    }
    ctx.globalCompositeOperation='multiply';
    for(let j=0;j<52;j++){
      const theta=j*2.39996323+t*.015,rad=.9*Math.sqrt(rand(j+101));
      const x=C+Math.cos(theta)*R*rad,y=C+Math.sin(theta)*R*rad;
      ctx.beginPath();ctx.ellipse(x,y,1+rand(j+102)*10,1+rand(j+103)*4,theta,0,Math.PI*2);
      ctx.fillStyle='rgba(106,31,13,'+(.1+.12*rand(j+104))+')';ctx.fill();
    }
    ctx.restore();
    // Limb brightening is flush with the same circular disc, not another sphere.
    ctx.beginPath();ctx.arc(C,C,R-.8,0,2*Math.PI);
    ctx.strokeStyle='rgba(255,193,74,.57)';ctx.lineWidth=2;ctx.stroke();
  }
  function paintCorona(t){
    const C=sizeCorona/2, R=sizeCorona/3.04;
    outer.clearRect(0,0,sizeCorona,sizeCorona);
    // Translucent, irregular micro-filaments at the solar limb.
    for(let j=0;j<150;j++){
      const a=j*2.39996323,amp=3+rand(j+209)*16;
      const r=R+Math.sin(j*17.1+t*.31)*amp*.36;
      const a2=a+.007+rand(j+219)*.020;
      const x=C+Math.cos(a)*r,y=C+Math.sin(a)*r;
      const xx=C+Math.cos(a2)*(r+amp),yy=C+Math.sin(a2)*(r+amp);
      outer.beginPath();outer.moveTo(x,y);outer.quadraticCurveTo(
        C+Math.cos(a+.04)*(r+amp*.7),
        C+Math.sin(a+.04)*(r+amp*.7),xx,yy);
      outer.strokeStyle='rgba(255,'+(127+Math.floor(rand(j+210)*85))+',37,'+
        (.06+rand(j+206)*.18).toFixed(3)+')';
      outer.lineWidth=.7+rand(j+208)*.8;outer.stroke();
    }
    // Active prominence arches. Footpoints stay connected to the single Sun.
    for(const arch of arches){
      const a=arch.angle,delta=arch.span;
      const rise=arch.height*(.85+.15*Math.sin(t*arch.speed+arch.phase));
      const centerA=a+delta/2;
      const x1=C+Math.cos(a)*R,y1=C+Math.sin(a)*R;
      const x2=C+Math.cos(a+delta)*R,y2=C+Math.sin(a+delta)*R;
      const c1=C+Math.cos(a+delta*.27)*(R+rise);
      const c2=C+Math.sin(a+delta*.27)*(R+rise);
      const d1=C+Math.cos(a+delta*.73)*(R+rise*.92);
      const d2=C+Math.sin(a+delta*.73)*(R+rise*.92);
      const bri=arch.strength*(.8+.2*Math.sin(t*arch.speed+.3+arch.phase));
      for(let k=0;k<3;k++){
        const off=(k-1)*2.5;
        outer.save();
        outer.shadowColor=k===1?'#ffba4b':'#f26819';outer.shadowBlur=k===1?9:4;
        outer.beginPath();outer.moveTo(x1+off*.16,y1+off*.15);
        outer.bezierCurveTo(c1+off,c2+off*.4,d1-off,d2-off*.3,x2,y2);
        outer.strokeStyle=k===1?'rgba(255,223,130,'+(bri*.66).toFixed(3)+')':
          'rgba(255,113,28,'+(bri*.3).toFixed(3)+')';
        outer.lineWidth=k===1?1.35:.8;outer.stroke();
        outer.restore();
      }
      // A slight, unstable glow near each magnetic loop footpoint.
      if(arch.height>43){
        const g=outer.createRadialGradient(x1,y1,0,x1,y1,10);
        g.addColorStop(0,'rgba(255,232,148,'+(bri*.41).toFixed(3)+')');
        g.addColorStop(1,'rgba(255,95,23,0)');
        outer.fillStyle=g;outer.fillRect(x1-10,y1-10,20,20);
      }
    }
  }
  function enabled(){return !reduced.matches&&!document.hidden&&document.body.dataset.cosmicView!=='session'&&document.documentElement.dataset.theme!=='light'}
  function loop(now){
    raf=0;
    if(!enabled())return;
    if(lastPaint<0||now-lastPaint>=49){const t=now*.001;paintDisc(t);paintCorona(t);lastPaint=now}
    raf=requestAnimationFrame(loop);
  }
  function sync(){if(!enabled()){if(raf)cancelAnimationFrame(raf);raf=0;paintDisc(0);paintCorona(0);lastPaint=-1;return}
    if(!raf)raf=requestAnimationFrame(loop)}
  const observer=new MutationObserver(sync);
  observer.observe(document.body,{attributes:true,attributeFilter:['data-cosmic-view']});
  observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
  reduced.addEventListener?.('change',sync);
  document.addEventListener('visibilitychange',sync);
  paintDisc(0);paintCorona(0);sync();
})();