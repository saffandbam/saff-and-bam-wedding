(function(){
  "use strict";
  var toggle = document.querySelector('.nav-toggle');
  var drawer = document.querySelector('.nav-drawer');
  if (!toggle || !drawer) return;

  function closeNav(){
    document.body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  function openNav(){
    document.body.classList.add('nav-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', function(){
    if (document.body.classList.contains('nav-open')) { closeNav(); } else { openNav(); }
  });

  drawer.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', closeNav);
  });

  window.addEventListener('keydown', function(e){
    if (e.key === 'Escape') closeNav();
  });

  // close drawer automatically if the viewport is resized back to desktop width
  window.addEventListener('resize', function(){
    if (window.matchMedia('(min-width:861px)').matches) closeNav();
  });
})();
