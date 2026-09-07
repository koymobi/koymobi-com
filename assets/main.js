(function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav-links');
  function setHeader() { if (header) header.classList.toggle('is-scrolled', window.scrollY > 8); }
  setHeader(); window.addEventListener('scroll', setHeader, { passive: true });
  if (toggle && nav) {
    toggle.addEventListener('click', function () { var open = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!open)); nav.classList.toggle('open', !open); document.body.classList.toggle('nav-open', !open); });
    nav.addEventListener('click', function (event) { if (event.target.closest('a')) { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); document.body.classList.remove('nav-open'); } });
  }
  var revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var observer = new IntersectionObserver(function (entries) { entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); }, { threshold: 0.12 });
    revealItems.forEach(function (item) { observer.observe(item); });
  } else { revealItems.forEach(function (item) { item.classList.add('visible'); }); }
  var previewForm = document.querySelector('[data-preview-form]');
  if (previewForm) previewForm.addEventListener('submit', function (event) { event.preventDefault(); var status = previewForm.querySelector('.form-status'); if (status) status.textContent = 'Preview only — form delivery will be enabled after KOYMOBI confirms its business email.'; });
})();
