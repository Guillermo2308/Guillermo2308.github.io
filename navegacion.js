/* Componentes globales del sitio: mantener aquí cabecera, menú y pie. */
(()=>{
'use strict';
const sharedHeader = "<header class=\"site-header\"><div class=\"nav-shell\"><a class=\"brand\" href=\"index.html\"><img class=\"ggv-brand-mark\" src=\"imagenes/ggv-identidad.svg?v=antiadherencia-2\" alt=\"\" width=\"48\" height=\"48\"><span class=\"ggv-brand-copy\"><strong>Guillermo Guerrero Vacas</strong><span class=\"brand-short-role\">Universidad de Córdoba</span><span class=\"brand-full-role\">Ingeniería de los Procesos de Fabricación · Universidad de Córdoba</span><span class=\"brand-location\"><span class=\"spain-flag\" role=\"img\" aria-label=\"Bandera de España\">🇪🇸</span> Córdoba · Andalucía · España</span></span></a><nav class=\"primary-nav\" aria-label=\"Navegación principal\"><a href=\"index.html\">Inicio</a><div class=\"nav-dropdown\"><button class=\"nav-parent nav-toggle\" type=\"button\" aria-expanded=\"false\" aria-controls=\"research-menu\">Investigación <span aria-hidden=\"true\">⌄</span></button><div class=\"dropdown-panel\" id=\"research-menu\"><span class=\"menu-eyebrow\">ÁREAS DE INVESTIGACIÓN</span><div class=\"mega-grid\"><a href=\"superficies.html\"><strong>Superficies y recubrimientos</strong><small>Antiadherencia, desmoldeo y caracterización</small></a><a href=\"fabricacion.html\"><strong>Fabricación avanzada</strong><small>Fabricación aditiva y procesos híbridos</small></a><a href=\"conformado.html\"><strong>Conformado y modelización</strong><small>SPIF y comportamiento de chapas</small></a><a href=\"valorwool.html\"><strong>Materiales sostenibles</strong><small>Fibras naturales y nuevos compuestos</small></a></div></div></div><a href=\"publicaciones.html\">Publicaciones</a><a href=\"trayectoria.html\">Trayectoria</a><a href=\"contacto.html\">Contacto y ubicación</a></nav><div class=\"header-actions\"><a class=\"nav-news\" href=\"noticias.html\">Actualidad técnica</a><a class=\"nav-cta\" href=\"asesoramiento.html\">Asesoramiento <span aria-hidden=\"true\">↗</span></a></div><details class=\"mobile-nav\"><summary>Menú <span aria-hidden=\"true\">☰</span></summary><div class=\"mobile-links\"><a href=\"index.html\">Inicio</a><details class=\"mobile-research\"><summary>Investigación <span aria-hidden=\"true\">⌄</span></summary><div><a href=\"superficies.html\">Superficies y recubrimientos</a><a href=\"fabricacion.html\">Fabricación avanzada</a><a href=\"conformado.html\">Conformado y modelización</a><a href=\"valorwool.html\">Materiales sostenibles</a></div></details><a href=\"publicaciones.html\">Publicaciones</a><a href=\"trayectoria.html\">Trayectoria</a><a href=\"contacto.html\">Contacto y ubicación</a><a href=\"noticias.html\">Actualidad técnica</a><a href=\"asesoramiento.html\">Asesoramiento</a></div></details></div></header>";
const sharedFooter = "<footer class=\"v4-footer\"><strong>Guillermo Guerrero Vacas</strong><span>Ingeniería de los Procesos de Fabricación · Universidad de Córdoba</span><span class=\"footer-location\"><span class=\"andalucia-flag\" role=\"img\" aria-label=\"Bandera de Andalucía\"></span> Córdoba · Andalucía · España</span><span class=\"site-visit-counter\" style=\"display:inline-flex;align-items:center;gap:9px;flex-wrap:wrap\"><span>Visualizaciones de la portada:</span><a href=\"https://hits.sh/guillermo2308.github.io/\" target=\"_blank\" rel=\"noopener noreferrer\" title=\"Consultar estadísticas de visualizaciones\"><img src=\"https://hits.sh/guillermo2308.github.io.svg?view=today-total&amp;style=flat-square&amp;label=Hoy%20%2F%20total&amp;color=147d80&amp;labelColor=24505c\" alt=\"Contador de visualizaciones de hoy y acumuladas\" width=\"155\" height=\"20\" loading=\"eager\" referrerpolicy=\"no-referrer\"></a></span></footer>";
const headerSlot = document.getElementById('site-header-slot');
const footerSlot = document.getElementById('site-footer-slot');
if (headerSlot) headerSlot.outerHTML = sharedHeader;
if (footerSlot) {
  const note = footerSlot.dataset.footerNote;
  footerSlot.outerHTML = sharedFooter;
  if (note) {
    const footer = document.querySelector('footer.v4-footer');
    if (footer) { const span = document.createElement('span'); span.className = 'footer-note'; span.textContent = note; footer.appendChild(span); }
  }
}

/* Bilingual header. English pages are stored under /en/. */
const isEnglish=location.pathname.split('/').includes('en');
const englishPages=new Set(['index.html','superficies.html','fabricacion.html','conformado.html','valorwool.html','publicaciones.html','trayectoria.html','contacto.html','asesoramiento.html']);
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
    'Contacto y ubicación':'Contact','Actualidad técnica':'Technical Insights',
    'Asesoramiento':'Collaboration','Menú':'Menu',
    'Bandera de España':'Flag of Spain','Bandera de Andalucía':'Flag of Andalusia',
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
    if(englishPages.has(href))a.setAttribute('href',href);
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

const currentPage = decodeURIComponent(location.pathname.split('/').pop() || 'index.html');
document.querySelectorAll('.site-header a[href]').forEach(a=>{
  if (a.getAttribute('href') === currentPage) a.setAttribute('aria-current','page');
});
const dropdown=document.querySelector('.nav-dropdown');
const button=dropdown?.querySelector('.nav-toggle');
if (!dropdown || !button) return;
const close=()=>{dropdown.classList.remove('is-open');button.setAttribute('aria-expanded','false')};
button.addEventListener('click',()=>{const isOpen=dropdown.classList.toggle('is-open');button.setAttribute('aria-expanded',String(isOpen))});
document.addEventListener('click',event=>{if(!dropdown.contains(event.target))close()});
document.addEventListener('keydown',event=>{if(event.key==='Escape' && dropdown.classList.contains('is-open')){close();button.focus()}});
})();
