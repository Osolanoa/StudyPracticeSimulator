(function () {
  const esc = value => String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
function render(v){
 if(v&&mathTypes.has(v.type))return renderMath(v);
 if(!v)return '';
 const highlight=String(v.highlight||'').toLowerCase();
 const node=(label,match)=>'<span class="diagram-node'+(highlight.includes((match||label).toLowerCase())?' relevant':'')+'">'+esc(label)+'</span>';
 const flow=labels=>'<div class="diagram-flow">'+labels.map(x=>node(x)).join('<span class="diagram-arrow" aria-hidden="true">→</span>')+'</div>';
 let diagram='';
 switch(v.type){
 case 'cloud-service-models':{
  const columns=['IaaS','PaaS','SaaS'],rows=[['Application implementation','Customer','Customer','Microsoft'],['Guest OS / runtime','Customer','Microsoft','Microsoft'],['Virtualization / hardware','Microsoft','Microsoft','Microsoft'],['Customer data / access governance','Customer','Customer','Customer']];
  diagram='<div class="diagram-table-wrap"><table class="diagram-table"><caption>Simplified shared responsibilities; customers retain identity, access, and data duties.</caption><thead><tr><th scope="col">Area</th>'+columns.map(c=>'<th scope="col" class="'+(highlight.includes(c.toLowerCase())?'relevant':'')+'">'+c+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr><th scope="row">'+esc(r[0])+'</th>'+r.slice(1).map((cell,i)=>'<td class="'+(highlight.includes(columns[i].toLowerCase())?'relevant':'')+'">'+cell+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';break;}
 case 'cloud-deployment-models':diagram=flow(['Company datacenter','Connected / integrated','Azure public cloud'])+'<p>Public: provider infrastructure · Private: dedicated to one organization · Hybrid: connected environments</p>';break;
 case 'capital-operating-cost':diagram=flow(['CapEx: buy server assets','OpEx: pay ongoing service costs']);break;
 case 'scaling':diagram='<div class="diagram-columns"><section><h4>Scale OUT — more instances</h4>'+flow(['1 server','3 servers'])+'</section><section><h4>Scale UP — bigger instance</h4>'+flow(['2 CPU / 4 GB','8 CPU / 32 GB'])+'</section></div>';break;
 case 'azure-hierarchy':diagram=flow(['Management group','Subscription','Resource group','Resource']);break;
 case 'region-zones':diagram='<div class="diagram-region"><strong>Azure region</strong><div class="diagram-flow">'+node('Zone 1')+node('Zone 2')+node('Zone 3')+'</div><p>Separate locations with independent facility dependencies. Multi-region recovery is a separate design.</p></div>';break;
 case 'identity-access':diagram=flow(['User / workload','Authentication: Who are you?','Authorization: What may you do?','Azure resource']);break;
 case 'rbac-policy-lock':diagram=flow(['RBAC: WHO may act?','Policy: WHAT configuration is allowed?','Lock: prevent management change/delete']);break;
 case 'monitoring-tools':diagram=flow(['Monitor: metrics and logs','Service Health: Azure incidents','Advisor: recommendations']);break;
 case 'storage-redundancy':diagram='<div class="diagram-columns">'+['LRS: copies in one datacenter','ZRS: copies across primary-region zones','GRS: local primary copies + asynchronous secondary','GZRS: zonal primary copies + asynchronous secondary'].map(x=>node(x,x.split(':')[0])).join('')+'</div>';break;
 case 'networking-connectivity':diagram='<div class="diagram-columns"><section><h4>VPN Gateway</h4>'+flow(['On premises','Encrypted Internet tunnel','Azure VNet'])+'</section><section><h4>ExpressRoute</h4>'+flow(['On premises','Private provider connection','Azure'])+'</section></div><p>Private connectivity and encryption are separate considerations.</p>';break;
 case 'public-private-endpoint':diagram='<div class="diagram-columns"><section><h4>Public endpoint</h4>'+flow(['Client','Public network path','Azure service'])+'</section><section><h4>Private endpoint</h4>'+flow(['VNet client','Private IP / Private Link','Azure service'])+'</section></div><p>Network reachability does not replace identity and data authorization.</p>';break;
 default:return '';
 }
 return '<section class="teaching-card diagram" role="group" aria-label="Visual explanation: '+esc(v.type)+'"><h3>Visual explanation</h3>'+diagram+'</section>';
}

const mathTypes=new Set(['number-line','right-triangle','general-triangle','coordinate-plane','angle','parabola','prism','pyramid','regular-polygon-apothem','frequency-table','histogram','frequency-polygon','probability-simple']);
function renderMath(v){
 const line=(x1,y1,x2,y2,cl='math-axis')=>'<line class="'+cl+'" x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'"/>';
 const text=(x,y,label,anchor='middle',cl='math-label')=>'<text class="'+cl+'" x="'+x+'" y="'+y+'" text-anchor="'+anchor+'">'+esc(label)+'</text>';
 const circle=(x,y,r=4)=>'<circle class="math-point" cx="'+x+'" cy="'+y+'" r="'+r+'"/>';
 const path=(d,cl='math-shape')=>'<path class="'+cl+'" d="'+d+'"/>';
 const title=v.title||'Representación matemática';
 const svg=content=>'<svg class="math-svg" viewBox="0 0 420 310" role="img" aria-label="'+esc(title)+'"><title>'+esc(title)+'</title>'+content+'</svg>';
 let body='';
 function plane(range){
  const x0=range.x[0],x1=range.x[1],y0=range.y[0],y1=range.y[1],X=x=>50+(x-x0)*330/(x1-x0),Y=y=>265-(y-y0)*225/(y1-y0);
  let content='';
  for(let x=Math.ceil(x0);x<=x1;x++){content+=line(X(x),40,X(x),265,'math-grid')+text(X(x),285,x);}
  for(let y=Math.ceil(y0);y<=y1;y++){content+=line(50,Y(y),380,Y(y),'math-grid')+text(38,Y(y)+4,y,'end');}
  if(y0<=0&&y1>=0)content+=line(50,Y(0),380,Y(0))+text(398,Y(0)+5,'x');
  if(x0<=0&&x1>=0)content+=line(X(0),40,X(0),265)+text(X(0),25,'y');
  return {X,Y,content};
 }
 if(v.type==='frequency-table'){
  body='<div class="diagram-table-wrap"><table class="diagram-table"><caption>Datos del ejercicio</caption><thead><tr>'+v.headers.map(h=>'<th scope="col">'+esc(h)+'</th>').join('')+'</tr></thead><tbody>'+v.rows.map(row=>'<tr>'+row.map((cell,i)=>'<'+(i?'td':'th scope="row"')+'>'+esc(cell)+'</'+(i?'td':'th')+'>').join('')+'</tr>').join('')+'</tbody></table></div>';
 }else if(v.type==='number-line'){
  const X=n=>40+(n-v.min)*340/(v.max-v.min);let s=line(30,155,390,155);
  for(let n=Math.ceil(v.min);n<=v.max;n++)s+=line(X(n),150,X(n),160)+text(X(n),185,String(n).replace('-', '−'));
  v.points.forEach((p,i)=>{const y=i%2?85:120;s+=circle(X(p.value),155)+line(X(p.value),150,X(p.value),y+5,'math-guide')+text(X(p.value),y,p.label);});
  body=svg(s+text(210,240,'Los puntos se ubican según su valor.'));
 }else if(v.type==='right-triangle'){
  const base=parseFloat(v.sideLabels.base),height=parseFloat(v.sideLabels.vertical),degrees=parseFloat(v.angle);
  const ratio=Number.isFinite(degrees)?Math.tan(degrees*Math.PI/180):(base>0&&height>0?height/base:0.75);
  const w=Math.min(270,175/ratio),h=w*ratio,x=60,y=245;
  let s=path('M '+x+' '+y+' L '+(x+w)+' '+y+' L '+(x+w)+' '+(y-h)+' Z');
  s+=path('M '+(x+w-13)+' '+y+' L '+(x+w-13)+' '+(y-13)+' L '+(x+w)+' '+(y-13),'math-guide');
  s+=text(x+w/2,y+24,v.sideLabels.base)+text(x+w+18,y-h/2,v.sideLabels.vertical,'start')+text(x+w/2-17,y-h/2-12,v.sideLabels.hypotenuse);
  s+=text(x-14,y+8,'A')+text(x+w+10,y+22,'B')+text(x+w+10,y-h-10,'C');
  if(v.angle){const a=Math.atan(ratio),r=34;s+=path('M '+(x+r)+' '+y+' A '+r+' '+r+' 0 0 0 '+(x+r*Math.cos(a))+' '+(y-r*Math.sin(a)),'math-guide')+text(x+53,y-9,v.angle,'start');}
  body=svg(s);
 }else if(v.type==='coordinate-plane'){
  const {X,Y,content}=plane(v.range);let s=content;
  if(v.connect&&v.points.length===2){const [a,b]=v.points;s+=line(X(a.x),Y(a.y),X(b.x),Y(b.y),'math-shape');if(v.showRightPath)s+=path('M '+X(a.x)+' '+Y(a.y)+' L '+X(b.x)+' '+Y(a.y)+' L '+X(b.x)+' '+Y(b.y),'math-guide');}
  v.points.forEach(p=>{s+=circle(X(p.x),Y(p.y))+text(X(p.x)+(X(p.x)>260?-8:8),Y(p.y)-12,p.label,X(p.x)>260?'end':'start');});body=svg(s);
 }else if(v.type==='angle'){
  const x=155,y=220,r=64,a=v.degrees*Math.PI/180,ex=x+125*Math.cos(a),ey=y-125*Math.sin(a);
  const d='M '+(x+r)+' '+y+' A '+r+' '+r+' 0 '+(v.degrees>180?1:0)+' 0 '+(x+r*Math.cos(a))+' '+(y-r*Math.sin(a));
  body=svg(line(x,y,x+150,y)+line(x,y,ex,ey)+path(d,'math-guide')+text(x+80*Math.cos(a/2),y-80*Math.sin(a/2),v.label));
 }else if(v.type==='general-triangle'){
  const A=v.angles.A*Math.PI/180,B=v.angles.B*Math.PI/180,b=220*Math.sin(B)/Math.sin(Math.PI-A-B);
  const ax=65,ay=260,bx=285,by=260,cx=ax+b*Math.cos(A),cy=ay-b*Math.sin(A);
  // Scale the triangle into the SVG without changing its angles.
  const top=Math.min(cy,ay),scale=Math.min(1,190/(ay-top)),X=x=>65+(x-65)*scale,Y=y=>250+(y-ay)*scale;
  body=svg(path('M '+X(ax)+' '+Y(ay)+' L '+X(bx)+' '+Y(by)+' L '+X(cx)+' '+Y(cy)+' Z')+
    text(X(ax)-8,Y(ay)+22,'A: '+v.angles.A+'°')+text(X(bx)+5,Y(by)+22,'B: '+v.angles.B+'°')+text(X(cx),Y(cy)-15,'C')+
    text((X(bx)+X(cx))/2+22,(Y(by)+Y(cy))/2,v.sides.a)+text((X(ax)+X(cx))/2-25,(Y(ay)+Y(cy))/2,v.sides.b)+text((X(ax)+X(bx))/2,Y(ay)-9,v.sides.c));
 }else if(v.type==='parabola'){
  const {X,Y,content}=plane({x:v.xRange,y:v.yRange});let s=content,d='',drawing=false;
  for(let i=0;i<=240;i++){const x=v.xRange[0]+i*(v.xRange[1]-v.xRange[0])/240,y=v.a*x*x+v.b*x+v.c;if(y>=v.yRange[0]&&y<=v.yRange[1]){d+=(drawing?' L ':' M ')+X(x)+' '+Y(y);drawing=true;}else drawing=false;}
  s+=path(d,'math-curve')+text(210,305,v.label);
  if(v.showVertex){const x=-v.b/(2*v.a),y=v.a*x*x+v.b*x+v.c;s+=circle(X(x),Y(y))+text(X(x)+8,Y(y)-12,'V('+x+', '+y+')','start');}
  if(v.showRoots){const delta=v.b*v.b-4*v.a*v.c;if(delta>=0){for(const x of [...new Set([(-v.b-Math.sqrt(delta))/(2*v.a),(-v.b+Math.sqrt(delta))/(2*v.a)])])s+=circle(X(x),Y(0))+text(X(x),Y(0)-12,'('+x+', 0)');}}
  body=svg(s);
 }else if(v.type==='regular-polygon-apothem'){
  const n=v.sides,cx=210,cy=155,r=95,pts=Array.from({length:n},(_,i)=>{const a=2*Math.PI*i/n+Math.PI/2-Math.PI/n;return[cx+r*Math.cos(a),cy+r*Math.sin(a)];});
  const p=pts[0],q=pts[1],mx=(p[0]+q[0])/2,my=(p[1]+q[1])/2;
  body=svg('<polygon class="math-shape" points="'+pts.map(p=>p.join(',')).join(' ')+'"/>'+line(cx,cy,mx,my,'math-guide')+circle(cx,cy,3)+text((cx+mx)/2-15,(cy+my)/2,v.apothemLabel,'end')+text(mx+16,my+20,v.sideLabel)+text(210,285,'Apotema: del centro al punto medio de un lado.'));
 }else if(v.type==='prism'){
  const a=[75,250],b=[265,250],c=[265,105],d=[75,105],e=[135,210],f=[325,210],g=[325,65],h=[135,65];
  let s=path('M '+a+' L '+b+' L '+c+' L '+d+' Z M '+d+' L '+h+' L '+g+' L '+c+' M '+g+' L '+f+' L '+b,'math-shape');
  s+=path('M '+a+' L '+e+' L '+f+' M '+e+' L '+h,'math-guide');
  body=svg(s+text(170,280,v.width+' '+v.unit)+text(330,242,v.depth+' '+v.unit)+text(45,175,v.height+' '+v.unit));
 }else if(v.type==='pyramid'){
  let s=path('M 70 235 L 260 265 L 335 215 L 145 185 Z M 70 235 L 205 55 L 260 265 M 205 55 L 335 215','math-shape');
  s+=line(205,55,145,185,'math-guide')+line(205,55,202,225,'math-guide')+line(205,55,165,250,'math-guide');
  body=svg(s+text(210,152,v.height+' '+v.unit,'start')+text(165,283,v.baseSide+' '+v.unit)+text(165,156,v.slantLabel,'end')+text(210,305,'Altura vertical y apotema lateral distintas.'));
 }else if(v.type==='histogram'||v.type==='frequency-polygon'){
  const max=Math.max(...v.frequencies),Y=n=>255-n*195/(max+1);let s=line(60,45,60,255)+line(60,255,380,255);
  for(let n=0;n<=max+1;n++)s+=line(60,Y(n),380,Y(n),'math-grid')+text(48,Y(n)+4,n,'end');
  if(v.type==='histogram'){const e=v.edges,X=n=>60+(n-e[0])*320/(e[e.length-1]-e[0]);
   v.frequencies.forEach((f,i)=>{s+='<rect class="math-bar" x="'+X(e[i])+'" y="'+Y(f)+'" width="'+(X(e[i+1])-X(e[i]))+'" height="'+(255-Y(f))+'"/>'+text((X(e[i])+X(e[i+1]))/2,Y(f)-8,f);});
   e.forEach(n=>s+=text(X(n),275,n));
  }else{const marks=v.marks,X=n=>70+(n-marks[0])*300/(marks[marks.length-1]-marks[0]);s+=path(marks.map((n,i)=>(i?'L ':'M ')+X(n)+' '+Y(v.frequencies[i])).join(' '),'math-curve');marks.forEach((n,i)=>s+=circle(X(n),Y(v.frequencies[i]))+text(X(n),Y(v.frequencies[i])-12,v.frequencies[i])+text(X(n),275,n));}
  s+=text(220,301,v.xLabel)+'<text class="math-label" x="16" y="160" transform="rotate(-90 16 160)" text-anchor="middle">'+esc(v.yLabel)+'</text>';
  body=svg(s);
 }else if(v.type==='probability-simple'){
  body='<div class="math-items">'+v.groups.map(g=>'<section><h4>'+esc(g.label)+' ('+g.count+')</h4><div>'+Array.from({length:g.count},()=>'<span class="math-token" aria-hidden="true">●</span>').join(' ')+'</div></section>').join('')+'</div>';
 }
 return body?'<section class="teaching-card diagram math-diagram" role="group" aria-label="'+esc(title)+'"><h3>Representación gráfica</h3>'+body+(v.caption?'<p>'+esc(v.caption)+'</p>':'')+'</section>':'';
}

  window.StudyVisuals = { render };
})();
