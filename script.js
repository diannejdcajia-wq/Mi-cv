/* Pétalos cayendo */
(function(){
  const box = document.getElementById('petalos');
  const iconos = ['🌸','🌷','💮','🌺'];
  for(let i=0;i<14;i++){
    const p = document.createElement('span');
    p.className = 'petalo';
    p.textContent = iconos[i % iconos.length];
    p.style.left = Math.random()*100 + '%';
    p.style.fontSize = (.8 + Math.random()*.9) + 'rem';
    p.style.animationDuration = (14 + Math.random()*14) + 's';
    p.style.animationDelay = (-Math.random()*20) + 's';
    box.appendChild(p);
  }
})();

/* Texto que se escribe solo */
(function(){
  const el = document.getElementById('tipeo');
  const frases = [
    'Arquitectura de Plataformas y Servicios de TI',
    'Desarrollo web (HTML y CSS)',
    'Programación básica con Python'
  ];
  let f = 0, c = 0, borrando = false;
  function tick(){
    const txt = frases[f];
    el.textContent = txt.slice(0, c);
    if(!borrando && c === txt.length){ borrando = true; return setTimeout(tick, 1800); }
    if(borrando && c === 0){ borrando = false; f = (f+1) % frases.length; }
    c += borrando ? -1 : 1;
    setTimeout(tick, borrando ? 28 : 55);
  }
  tick();
})();

/* Aparecer al hacer scroll + animar barras */
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); }
  });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

/* Menú móvil */
const menu = document.getElementById('menu');
document.getElementById('hamb').onclick = ()=>menu.classList.toggle('abierto');
menu.addEventListener('click', e=>{ if(e.target.tagName==='A') menu.classList.remove('abierto'); });
