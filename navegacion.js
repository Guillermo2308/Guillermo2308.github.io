/* Componentes globales del sitio: mantener aquí cabecera, menú y pie. */
(()=>{
'use strict';
const sharedHeader = "<header class=\"site-header\"><div class=\"nav-shell\"><a class=\"brand\" href=\"index.html\"><img class=\"ggv-brand-mark\" src=\"imagenes/ggv-identidad.svg?v=antiadherencia-2\" alt=\"\" width=\"48\" height=\"48\"><span class=\"ggv-brand-copy\"><strong>Guillermo Guerrero Vacas</strong><span>Ingeniería de los Procesos de Fabricación · Universidad de Córdoba</span><span class=\"brand-location\"><span class=\"spain-flag\" role=\"img\" aria-label=\"Bandera de España\">🇪🇸</span> Córdoba · Andalucía · España</span></span></a><nav class=\"primary-nav\" aria-label=\"Navegación principal\"><a href=\"index.html\">Inicio</a><div class=\"nav-dropdown\"><button class=\"nav-parent nav-toggle\" type=\"button\" aria-expanded=\"false\" aria-controls=\"research-menu\">Investigación <span aria-hidden=\"true\">⌄</span></button><div class=\"dropdown-panel\" id=\"research-menu\"><span class=\"menu-eyebrow\">ÁREAS DE INVESTIGACIÓN</span><div class=\"mega-grid\"><a href=\"superficies.html\"><strong>Superficies y recubrimientos</strong><small>Antiadherencia, desmoldeo y caracterización</small></a><a href=\"fabricacion.html\"><strong>Fabricación avanzada</strong><small>Fabricación aditiva y procesos híbridos</small></a><a href=\"conformado.html\"><strong>Conformado y modelización</strong><small>SPIF y comportamiento de chapas</small></a><a href=\"valorwool.html\"><strong>Materiales sostenibles</strong><small>Fibras naturales y nuevos compuestos</small></a></div></div></div><a href=\"publicaciones.html\">Publicaciones</a><a href=\"trayectoria.html\">Trayectoria</a><a href=\"contacto.html\">Contacto y ubicación</a></nav><div class=\"header-actions\"><a class=\"nav-news\" href=\"noticias.html\">Actualidad técnica</a><a class=\"nav-cta\" href=\"asesoramiento.html\">Asesoramiento <span aria-hidden=\"true\">↗</span></a></div></div><details class=\"mobile-nav\"><summary>Menú <span aria-hidden=\"true\">☰</span></summary><div class=\"mobile-links\"><a href=\"index.html\">Inicio</a><details class=\"mobile-research\"><summary>Investigación <span aria-hidden=\"true\">⌄</span></summary><div><a href=\"superficies.html\">Superficies y recubrimientos</a><a href=\"fabricacion.html\">Fabricación avanzada</a><a href=\"conformado.html\">Conformado y modelización</a><a href=\"valorwool.html\">Materiales sostenibles</a></div></details><a href=\"publicaciones.html\">Publicaciones</a><a href=\"trayectoria.html\">Trayectoria</a><a href=\"contacto.html\">Contacto y ubicación</a><a href=\"noticias.html\">Actualidad técnica</a><a href=\"asesoramiento.html\">Asesoramiento</a></div></details></header>";
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
