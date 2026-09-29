(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('[data-lb]'));
  if (!links.length) return;
  var lb = document.createElement('div');
  lb.className = 'lb';
  lb.innerHTML = '<button class="x" aria-label="Schließen">×</button><button class="p" aria-label="Zurück">‹</button><img alt=""><button class="n" aria-label="Weiter">›</button>';
  document.body.appendChild(lb);
  var img = lb.querySelector('img'), i = 0;
  function show(k) { i = (k + links.length) % links.length; img.src = links[i].href; img.alt = links[i].querySelector('img').alt; lb.classList.add('open'); }
  function hide() { lb.classList.remove('open'); img.removeAttribute('src'); }
  links.forEach(function (a, k) { a.addEventListener('click', function (e) { e.preventDefault(); show(k); }); });
  lb.querySelector('.x').onclick = hide;
  lb.querySelector('.p').onclick = function (e) { e.stopPropagation(); show(i - 1); };
  lb.querySelector('.n').onclick = function (e) { e.stopPropagation(); show(i + 1); };
  lb.addEventListener('click', function (e) { if (e.target === lb) hide(); });
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') hide(); if (e.key === 'ArrowLeft') show(i - 1); if (e.key === 'ArrowRight') show(i + 1);
  });
})();
