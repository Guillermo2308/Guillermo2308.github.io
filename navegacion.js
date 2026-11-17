/* Componentes globales del sitio: mantener aquí cabecera, menú y pie. */
(()=>{
'use strict';
const sharedHeader = "<header class=\"site-header\"><div class=\"nav-shell\"><a class=\"brand\" href=\"index.html\"><img class=\"ggv-brand-mark\" src=\"imagenes/ggv-identidad.svg?v=antiadherencia-2\" alt=\"\" width=\"48\" height=\"48\"><span class=\"ggv-brand-copy\"><strong>Guillermo Guerrero Vacas</strong><span class=\"brand-short-role\">Universidad de Córdoba</span><span class=\"brand-full-role\">Ingeniería de los Procesos de Fabricación · Universidad de Córdoba</span><span class=\"brand-location\"><span class=\"spain-flag\" role=\"img\" aria-label=\"Bandera de España\">🇪🇸</span> Córdoba · Andalucía · España</span></span></a><nav class=\"primary-nav\" aria-label=\"Navegación principal\"><a href=\"index.html\">Inicio</a><div class=\"nav-dropdown\"><button class=\"nav-parent nav-toggle\" type=\"button\" aria-expanded=\"false\" aria-controls=\"research-menu\">Investigación <span aria-hidden=\"true\">⌄</span></button><div class=\"dropdown-panel\" id=\"research-menu\"><span class=\"menu-eyebrow\">ÁREAS DE INVESTIGACIÓN</span><div class=\"mega-grid\"><a href=\"superficies.html\"><strong>Superficies y recubrimientos</strong><small>Antiadherencia, desmoldeo y caracterización</small></a><a href=\"fabricacion.html\"><strong>Fabricación avanzada</strong><small>Fabricación aditiva y procesos híbridos</small></a><a href=\"conformado.html\"><strong>Conformado y modelización</strong><small>SPIF y comportamiento de chapas</small></a><a href=\"valorwool.html\"><strong>Materiales sostenibles</strong><small>Fibras naturales y nuevos compuestos</small></a></div></div></div><a href=\"publicaciones.html\">Publicaciones</a><a href=\"trayectoria.html\">Trayectoria</a><a href=\"contacto.html\">Contacto y ubicación</a></nav><div class=\"header-actions\"><a class=\"nav-news\" href=\"noticias.html\">Actualidad técnica</a><a class=\"nav-cta\" href=\"asesoramiento.html\">Asesoramiento <span aria-hidden=\"true\">↗</span></a></div><details class=\"mobile-nav\"><summary>Menú <span aria-hidden=\"true\">☰</span></summary><div class=\"mobile-links\"><a href=\"index.html\">Inicio</a><details class=\"mobile-research\"><summary>Investigación <span aria-hidden=\"true\">⌄</span></summary><div><a href=\"superficies.html\">Superficies y recubrimientos</a><a href=\"fabricacion.html\">Fabricación avanzada</a><a href=\"conformado.html\">Conformado y modelización</a><a href=\"valorwool.html\">Materiales sostenibles</a></div></details><a href=\"publicaciones.html\">Publicaciones</a><a href=\"trayectoria.html\">Trayectoria</a><a href=\"contacto.html\">Contacto y ubicación</a><a href=\"noticias.html\">Actualidad técnica</a><a href=\"asesoramiento.html\">Asesoramiento</a></div></details></div></header>";
const sharedFooter = "<footer class=\"v4-footer compact-footer\"><div class=\"footer-inner\"><div class=\"footer-identity\"><strong>Guillermo Guerrero Vacas</strong><span>Universidad de Córdoba · Córdoba, España</span><a href=\"mailto:guillermo.guerrero@uco.es\">guillermo.guerrero@uco.es</a></div><nav class=\"footer-links\" aria-label=\"Información y contacto\"><a href=\"contacto.html\">Contacto y ubicación</a><a href=\"aviso-legal.html\">Aviso legal</a><a href=\"privacidad.html\">Política de privacidad</a></nav><div class=\"footer-meta\"><span>© 2026 Guillermo Guerrero Vacas · Web académica personal</span><time datetime=\"2026-11-17\">Actualizado: 17/11/2026</time><a class=\"site-visit-counter\" href=\"https://hits.sh/guillermo2308.github.io/\" target=\"_blank\" rel=\"noopener noreferrer\" title=\"Consultar estadísticas de visualizaciones\"><img src=\"https://hits.sh/guillermo2308.github.io.svg?view=today-total&amp;style=flat-square&amp;label=Hoy%20%2F%20total&amp;color=147d80&amp;labelColor=24505c\" alt=\"Contador de visualizaciones de hoy y acumuladas\" width=\"155\" height=\"20\" loading=\"lazy\" referrerpolicy=\"no-referrer\"></a></div></div></footer>";
const headerSlot = document.getElementById('site-header-slot');
const footerSlot = document.getElementById('site-footer-slot');
if (headerSlot) headerSlot.outerHTML = sharedHeader;
if(headerSlot){
  const nav=document.querySelector('.primary-nav');
  const mobile=document.querySelector('.mobile-links');
  const groups=[
    ['Publicaciones','publications-menu','publicaciones.html',[['publicaciones.html','Artículos JCR'],['otras-publicaciones.html#otros','Otros artículos'],['otras-publicaciones.html#congresos','Congresos'],['otras-publicaciones.html#libros','Libros y manuales']]],
    ['Trayectoria','career-menu','trayectoria.html',[['trayectoria.html','Perfil académico'],['patentes.html','Patentes'],['proyectos.html','Proyectos y transferencia']]]
  ];
  for(const [label,id,href,items] of groups){
    const a=nav?.querySelector(':scope > a[href="'+href+'"]');
    if(a){const d=document.createElement('div');d.className='nav-dropdown';d.innerHTML='<button type="button" class="nav-parent nav-toggle" aria-expanded="false" aria-controls="'+id+'">'+label+' <span aria-hidden="true">⌄</span></button><div class="dropdown-panel" id="'+id+'"><div class="mega-grid">'+items.map(([url,text])=>'<a href="'+url+'"><strong>'+text+'</strong></a>').join('')+'</div></div>';a.replaceWith(d);}
    const ma=mobile?.querySelector(':scope > a[href="'+href+'"]');
    if(ma){const d=document.createElement('details');d.className='mobile-research';d.innerHTML='<summary>'+label+' <span aria-hidden="true">⌄</span></summary><div>'+items.map(([url,text])=>'<a href="'+url+'">'+text+'</a>').join('')+'</div>';ma.replaceWith(d);}
  }
}
if (footerSlot) {
  const note = footerSlot.dataset.footerNote;
  footerSlot.outerHTML = sharedFooter;
  if (note) {
    const footer = document.querySelector('footer.v4-footer');
    if (footer) { const span = document.createElement('span'); span.className = 'footer-note'; span.textContent = note; (footer.querySelector('.footer-inner') || footer).appendChild(span); }
  }
}

/* Bilingual header. English pages are stored under /en/. */
const isEnglish=location.pathname.split('/').includes('en');
const englishPages=new Set(['index.html','superficies.html','fabricacion.html','conformado.html','valorwool.html','publicaciones.html','trayectoria.html','contacto.html','asesoramiento.html','aviso-legal.html','privacidad.html','patentes.html','proyectos.html','otras-publicaciones.html']);
const currentFile=decodeURIComponent(location.pathname.split('/').pop()||'index.html');
const requestedHref=isEnglish?'../'+currentFile:'en/'+currentFile;
const translatedHref=englishPages.has(currentFile)?requestedHref:(isEnglish?'../index.html':'en/index.html');
const actionGroup=document.querySelector('.site-header .header-actions');
if(actionGroup){
  const switcher=document.createElement('a');
  switcher.className='language-switch';
  switcher.href=translatedHref;
  switcher.hreflang=isEnglish?'es':'en';
  switcher.lang=isEnglish?'es':'en';
  switcher.setAttribute('aria-label',isEnglish?'Ver esta página en español':'Read this page in English');
  switcher.innerHTML=isEnglish?'ES <span aria-hidden="true">↗</span>':'EN <span aria-hidden="true">↗</span>';
  actionGroup.appendChild(switcher);
}
const mobileLinks=document.querySelector('.mobile-links');
if(mobileLinks){
  const mobileSwitch=document.createElement('a');
  mobileSwitch.href=translatedHref;
  mobileSwitch.className='mobile-language-switch';
  mobileSwitch.hreflang=isEnglish?'es':'en';
  mobileSwitch.textContent=isEnglish?'Español (ES)':'English (EN)';
  mobileLinks.appendChild(mobileSwitch);
}
if(isEnglish){
  document.documentElement.lang='en';
  const replacements={
    'Ingeniería de los Procesos de Fabricación · Universidad de Córdoba':'Manufacturing Engineering · University of Córdoba',
    'Universidad de Córdoba':'University of Córdoba',
    'Córdoba · Andalucía · España':'Córdoba · Andalusia · Spain',
    'Inicio':'Home','Investigación':'Research','ÁREAS DE INVESTIGACIÓN':'RESEARCH AREAS',
    'Superficies y recubrimientos':'Surface Engineering & Coatings',
    'Antiadherencia, desmoldeo y caracterización':'Non-stick properties, release and characterization',
    'Fabricación avanzada':'Advanced Manufacturing',
    'Fabricación aditiva y procesos híbridos':'Additive manufacturing and hybrid processes',
    'Conformado y modelización':'Forming & Modelling',
    'SPIF y comportamiento de chapas':'SPIF and sheet-metal behaviour',
    'Materiales sostenibles':'Sustainable Materials',
    'Fibras naturales y nuevos compuestos':'Natural fibres and new composites',
    'Publicaciones':'Publications','Trayectoria':'Academic Profile',
    'Artículos JCR':'JCR articles','Otros artículos':'Other articles','Congresos':'Conferences','Libros y manuales':'Books and manuals','Perfil académico':'Academic profile','Patentes':'Patents','Proyectos y transferencia':'Projects and knowledge transfer',
    'Contacto y ubicación':'Contact','Actualidad técnica':'Technical Insights',
    'Asesoramiento':'Collaboration','Menú':'Menu',
    'Bandera de España':'Flag of Spain','Bandera de Andalucía':'Flag of Andalusia',
    'Universidad de Córdoba · Córdoba, España':'University of Córdoba · Córdoba, Spain',
    'Información y contacto':'Information and contact',
    'Aviso legal':'Legal notice','Política de privacidad':'Privacy policy',
    'Web académica personal':'Personal academic website','Actualizado:':'Updated:',
    'Visualizaciones de la portada:':'Homepage views:',
    'Consultar estadísticas de visualizaciones':'View visitor statistics',
    'Contador de visualizaciones de hoy y acumuladas':'Visitor counter: today and total'
  };
  const targetNodes=document.querySelectorAll('.site-header,footer.v4-footer');
  targetNodes.forEach(root=>{
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(node=>{
      for(const [from,to] of Object.entries(replacements))
        node.nodeValue=node.nodeValue.replaceAll(from,to);
    });
    root.querySelectorAll('[aria-label],[title],[alt]').forEach(el=>{
      for(const key of ['aria-label','title','alt']){
        const v=el.getAttribute(key);if(v&&replacements[v])el.setAttribute(key,replacements[v]);
      }
    });
  });
  document.querySelectorAll('.site-header a[href]').forEach(a=>{
    const href=a.getAttribute('href');
    if(!href || href.startsWith('http') || href.startsWith('#'))return;
    if(href.startsWith('en/'))return;
    if(englishPages.has(href.split('#')[0]))a.setAttribute('href',href);
    else a.setAttribute('href','../'+href);
  });
  document.querySelectorAll('.site-header .brand img').forEach(img=>{
    img.src='../imagenes/ggv-identidad.svg?v=antiadherencia-2';
  });
  const sw=document.querySelector('.site-header .language-switch');
  if(sw){sw.href='../'+currentFile;sw.textContent='ES';sw.setAttribute('aria-label','View this page in Spanish');}
  const ms=document.querySelector('.mobile-language-switch');
  if(ms)ms.href='../'+currentFile;
}


/* Explicit footer copy avoids overlapping translation replacements. */
if(isEnglish){const footer=document.querySelector('.compact-footer');if(footer){const affiliation=footer.querySelector('.footer-identity span');if(affiliation)affiliation.textContent='University of Córdoba · Córdoba, Spain';const nav=footer.querySelector('.footer-links');if(nav)nav.setAttribute('aria-label','Information and contact');const date=footer.querySelector('.footer-meta time');if(date)date.textContent='Updated: 17 November 2026';}}
const consultationForm=document.getElementById('consulta-form');if(consultationForm){const info=document.createElement('p');info.style.cssText='font-size:.85rem;line-height:1.5';info.innerHTML=isEnglish?'Controller: Guillermo Guerrero Vacas. Your details will be used to respond to your enquiry on the basis of legitimate interest or requested pre-contractual steps, as applicable. The form opens your email app. See the <a href="privacidad.html">privacy policy</a> for retention, recipients and rights.':'Responsable: Guillermo Guerrero Vacas. Los datos se utilizarán para atender su consulta, sobre la base del interés legítimo o de las medidas precontractuales solicitadas, cuando proceda. El formulario abre su aplicación de correo. Consulte la <a href="privacidad.html">política de privacidad</a> para conocer la conservación, los destinatarios y sus derechos.';const submit=consultationForm.querySelector('button[type="submit"],input[type="submit"]');if(submit&&submit.parentNode)submit.parentNode.insertBefore(info,submit);else consultationForm.appendChild(info);}

const currentPage = decodeURIComponent(location.pathname.split('/').pop() || 'index.html');
document.querySelectorAll('.site-header a[href]').forEach(a=>{
  if (a.getAttribute('href') === currentPage) a.setAttribute('aria-current','page');
});
const dropdowns=[...document.querySelectorAll('.primary-nav .nav-dropdown')];
const close=d=>{d.classList.remove('is-open');d.querySelector('.nav-toggle')?.setAttribute('aria-expanded','false')};
dropdowns.forEach(d=>{const b=d.querySelector('.nav-toggle');if(!b)return;b.addEventListener('click',()=>{const wasOpen=d.classList.contains('is-open');dropdowns.forEach(close);if(!wasOpen){d.classList.add('is-open');b.setAttribute('aria-expanded','true')}else b.blur()})});
document.addEventListener('click',event=>dropdowns.forEach(d=>{if(!d.contains(event.target))close(d)}));
document.addEventListener('keydown',event=>{if(event.key==='Escape'){const d=dropdowns.find(x=>x.classList.contains('is-open'));if(d){close(d);d.querySelector('.nav-toggle')?.focus()}}});
})();