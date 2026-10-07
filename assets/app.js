/* TDrone — small interactions only. Nothing that fights the quiet layout. */
(function () {
  'use strict';

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var siblings = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
        el.style.transitionDelay = Math.min(siblings, 5) * 70 + 'ms';
        el.classList.add('is-in');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- Hero video play / pause ---------- */
  var video = document.getElementById('herovideo');
  var toggle = document.getElementById('videotoggle');
  var icon = document.getElementById('videoicon');
  var PAUSE = '<rect x="0" y="0" width="3" height="12" rx="1"></rect><rect x="7" y="0" width="3" height="12" rx="1"></rect>';
  var PLAY = '<path d="M1 1l8 5-8 5V1z"></path>';

  if (video && toggle && icon) {
    toggle.addEventListener('click', function () {
      if (video.paused) {
        video.play();
        icon.innerHTML = PAUSE;
        toggle.setAttribute('aria-label', 'השהיית וידאו רקע');
      } else {
        video.pause();
        icon.innerHTML = PLAY;
        toggle.setAttribute('aria-label', 'הפעלת וידאו רקע');
      }
    });
    video.addEventListener('error', function () { toggle.style.display = 'none'; });
  }

  /* ---------- Mobile drawer ---------- */
  var drawer = document.getElementById('drawer');
  var navtoggle = document.getElementById('navtoggle');
  var drawerclose = document.getElementById('drawerclose');

  function setDrawer(open) {
    if (!drawer) return;
    drawer.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (navtoggle) navtoggle.setAttribute('aria-expanded', String(open));
  }
  if (navtoggle) navtoggle.addEventListener('click', function () { setDrawer(!drawer.classList.contains('is-open')); });
  if (drawerclose) drawerclose.addEventListener('click', function () { setDrawer(false); });
  if (drawer) {
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setDrawer(false); });
    });
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setDrawer(false); });

  /* ---------- Quote form ---------- */
  var form = document.getElementById('quoteform');
  var success = document.getElementById('formsuccess');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      form.querySelectorAll('[required]').forEach(function (input) {
        var valid = input.value.trim() !== '' && (input.type !== 'email' || /\S+@\S+\.\S+/.test(input.value));
        input.style.boxShadow = valid ? '' : 'inset 0 0 0 2px #b64400';
        if (!valid) ok = false;
      });
      if (!ok) return;
      if (success) success.classList.add('is-visible');
      form.reset();
    });
  }
})();
