(function () {
  const esc = value => String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
function render(v){
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
  window.StudyVisuals = { render };
})();
