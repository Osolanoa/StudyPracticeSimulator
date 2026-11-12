/* Optional cinematic WebGL enhancement. A photo/Canvas fallback remains visible if WebGL,
   network modules, textures, or reduced-motion settings prohibit 3D rendering. */
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js';
(() => {
  'use strict';
  const container=document.getElementById('cosmic-scene');
  if(!container||!window.WebGLRenderingContext||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  // High-density 3D remains optional on narrow/low-memory devices.
  if(window.innerWidth<740 || (navigator.deviceMemory && navigator.deviceMemory<4))return;
  if(document.body.dataset.cosmicEffect!=='high'||document.documentElement.dataset.theme==='light')return;
  let renderer,raf=0,visible=true,elapsed=0,last=0,px=0,py=0,aimX=0,aimY=0,disposed=false;
  const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(-7,7,5,-5,.1,100);
  camera.position.z=16;
  try {
    renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'high-performance',premultipliedAlpha:true});
    renderer.setClearColor(0x000000,0);
    renderer.outputColorSpace=THREE.SRGBColorSpace;
    renderer.toneMapping=THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure=1.12;
  } catch (_) { return; }
  const layer=renderer.domElement;layer.className='cosmic-webgl-layer';layer.setAttribute('aria-hidden','true');
  container.appendChild(layer);
  const ambient=new THREE.AmbientLight(0xa9c7f4,.56);scene.add(ambient);
  const moonLight=new THREE.DirectionalLight(0xddeeff,2.2);moonLight.position.set(-5,8,12);scene.add(moonLight);
  const moon=new THREE.Mesh(new THREE.SphereGeometry(1,96,64),new THREE.MeshStandardMaterial({
    color:0xd5e8f5,roughness:1,metalness:0
  }));
  scene.add(moon);
  const vertex=String.raw`varying vec3 vNormal3;varying vec3 vLocal;void main(){vNormal3=normalize(normalMatrix*normal);vLocal=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;
  const plasma=String.raw`
    uniform float uTime; uniform sampler2D uSolarPhoto; uniform float uPhotoMix; varying vec3 vNormal3;varying vec3 vLocal;
    float hash(vec3 p){p=fract(p*.3183099+.1);p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
    float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
      return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),
                     mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),
                 mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),
                     mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}
    float fbm(vec3 p){float sum=0.,amplitude=.53;for(int i=0;i<5;i++){sum+=noise(p)*amplitude;p=p*2.08+13.5;amplitude*=.48;}return sum;}
    void main(){
      vec3 p=vLocal*3.3;float t=uTime*.12;
      float turbulence=fbm(p+vec3(t,-t*.32,t*.2));
      float hot=fbm(p*3.6+vec3(-t*.9,t*.27,t*.7));
      float filaments=sin(p.y*9.+t*2.+turbulence*12.)*.15;
      float activity=clamp(.30+turbulence*.75+hot*.35+filaments,0.,1.);
      vec3 orange=vec3(.90,.13,.018);
      vec3 amber=vec3(1.,.49,.055);
      vec3 yellow=vec3(1.,.80,.24);
      vec3 color=mix(orange,amber,smoothstep(.22,.68,activity));
      color=mix(color,yellow,smoothstep(.69,.96,activity));
      color+=vec3(1.,.45,.1)*pow(max(0.,activity-.85),2.)*2.5;
      float rim=pow(1.-max(dot(normalize(vNormal3),vec3(0.,0.,1.)),0.),2.);
      color+=vec3(.85,.28,.025)*rim*.7;
      // SDO 171 A full-disc photography adds real magnetic filaments and active regions.
      vec3 n=normalize(vNormal3);
      vec2 uv=.5+n.xy*.425;
      uv+=.0025*vec2(sin(n.y*22.+t*.65),cos(n.x*24.-t*.42));
      vec3 photo=texture2D(uSolarPhoto,uv).rgb;
      float photographicMask=smoothstep(.045,.21,max(photo.r,max(photo.g,photo.b)));
      vec3 photographicColor=photo*vec3(1.6,1.02,.53);
      color=mix(color,photographicColor,clamp(uPhotoMix*photographicMask*.80,0.,.8));
      gl_FragColor=vec4(color,1.);
    }`;
  const sunMaterial=new THREE.ShaderMaterial({uniforms:{uTime:{value:0},uSolarPhoto:{value:null},uPhotoMix:{value:0}},vertexShader:vertex,fragmentShader:plasma});
  const sun=new THREE.Mesh(new THREE.SphereGeometry(1,96,64),sunMaterial);scene.add(sun);
  const corona=new THREE.Mesh(new THREE.PlaneGeometry(2,2),new THREE.ShaderMaterial({
    uniforms:{uTime:{value:0}},
    vertexShader:String.raw`varying vec2 vUv2;void main(){vUv2=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader:String.raw`uniform float uTime;varying vec2 vUv2;
      void main(){vec2 p=(vUv2-.5)*2.;float r=length(p);float a=atan(p.y,p.x);
        float modulation=.035*sin(11.*a+uTime*.11)+.023*sin(24.*a-uTime*.23)+.021*sin(41.*a+uTime*.16);
        float flame=exp(-pow((r-.61-modulation)/.075,2.));
        float glow=exp(-r*r*9.)*.68 + exp(-r*r*2.8)*.16;
        float ray=pow(abs(sin(a*11.+uTime*.085)),18.)*exp(-abs(r-.72)*7.)*.21;
        float alpha=clamp(glow*.78+flame*.35+ray,0.,.68);
        gl_FragColor=vec4(vec3(1.,.42+.16*sin(a*5.),.08),alpha);
      }`,
    transparent:true,depthWrite:false,blending:THREE.AdditiveBlending
  }));
  scene.add(corona);
  const axes=new THREE.Group();scene.add(axes);
  function layout(){
    const w=window.innerWidth,h=window.innerHeight;
    const ratio=w/Math.max(h,1);
    camera.top=h/200;camera.bottom=-h/200;camera.left=-w/200;camera.right=w/200;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));
    renderer.setSize(w,h,false);
    const moonRadius=Math.min(Math.max(w*.23,185),365)/100;
    const sunRadius=Math.min(Math.max(w*.27,240),470)/100;
    const small=w<700;
    moon.position.set(camera.left+moonRadius*(small?.35:.57),camera.top-moonRadius*(small?.28:.62),0);
    moon.scale.setScalar(moonRadius);
    sun.position.set(camera.right-sunRadius*(small?.24:.32),camera.bottom+sunRadius*(small?.40:.61),0);
    sun.scale.setScalar(sunRadius);
    corona.position.copy(sun.position);corona.position.z=-.2;
    corona.scale.setScalar(sunRadius*3.2);
  }
  layout();window.addEventListener('resize',layout,{passive:true});
  window.addEventListener('pointermove',e=>{aimX=(e.clientX/window.innerWidth-.5)*2;aimY=(e.clientY/window.innerHeight-.5)*2},{passive:true});
  document.addEventListener('visibilitychange',()=>{visible=!document.hidden;if(visible)start();else stop()});
  const observer=new MutationObserver(()=>{
    if(document.body.dataset.cosmicEffect!=='high'||document.documentElement.dataset.theme==='light'){
      layer.style.opacity='0';document.body.classList.remove('cosmic-3d-ready');stop();
    }else{
      layer.style.opacity='1';document.body.classList.add('cosmic-3d-ready');if(document.body.dataset.cosmicView==='session')stop();else start();
    }
  });observer.observe(document.body,{attributes:true,attributeFilter:['data-cosmic-effect','data-cosmic-view']});
  observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
  function stop(){if(raf){cancelAnimationFrame(raf);raf=0;}last=0}
  function start(){if(raf||!visible||document.body.dataset.cosmicEffect!=='high'||document.body.dataset.cosmicView==='session'||document.documentElement.dataset.theme==='light'||disposed)return;last=0;raf=requestAnimationFrame(render)}
  function render(now){
    raf=0;if(!visible||disposed)return;
    if(last)elapsed+=Math.min((now-last)/1000,.05);last=now;
    px+=(aimX-px)*.045;py+=(aimY-py)*.045;
    moon.rotation.y= -.2+Math.sin(elapsed*.025)*.1;moon.rotation.x=.07+Math.sin(elapsed*.018)*.04;
    moon.position.z=Math.sin(elapsed*.08)*.12;
    const t=elapsed;
    sunMaterial.uniforms.uTime.value=t;corona.material.uniforms.uTime.value=t;
    sun.rotation.y=t*.012;sun.rotation.z=Math.sin(t*.022)*.06;
    const driftX=Math.sin(t*.065)*.08,driftY=Math.cos(t*.055)*.07;
    sun.rotation.x=driftX;sun.rotation.z=driftY;
    scene.rotation.y=px*.011;scene.rotation.x=-py*.008;
    renderer.render(scene,camera);
    raf=requestAnimationFrame(render);
  }
  const loader=new THREE.TextureLoader();
  loader.setCrossOrigin('anonymous');
  // The solar photograph is a static surface source, not a video.
  // Its slight UV drift and independent plasma shader do not reset at a loop boundary.
  loader.load('https://assets.science.nasa.gov/content/dam/science/psd/photojournal/pia/pia26/pia26681/PIA26681.jpg',
    texture=>{texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());
      sunMaterial.uniforms.uSolarPhoto.value=texture;sunMaterial.uniforms.uPhotoMix.value=1;},
    undefined,()=>{/* Procedural plasma remains available without this optional texture. */});
  // NASA 2025 globe color map. If CORS is not allowed, retain CSS-photography mode.
  loader.load('https://svs.gsfc.nasa.gov/vis/a000000/a004700/a004720/lroc_color_2k.jpg',
    texture=>{
      texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
      moon.material.map=texture;moon.material.color.set(0xd8e7fb);moon.material.needsUpdate=true;
      layer.style.opacity='1';document.body.classList.add('cosmic-3d-ready');start();
    },undefined,()=>loader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/moon_1024.jpg', texture=>{texture.colorSpace=THREE.SRGBColorSpace;moon.material.map=texture;moon.material.needsUpdate=true;layer.style.opacity='1';document.body.classList.add('cosmic-3d-ready');start();},undefined,()=>{layer.remove();disposed=true;renderer.dispose();}));
})();
