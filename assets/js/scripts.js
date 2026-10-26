var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    var open = menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    menuTrigger.setAttribute('aria-expanded', open)
    body.classList.toggle('lock-scroll')
}

// Language dropdown (replaces Bootstrap's dropdown JS)
var langToggle = document.querySelector('.language-select .dropdown-toggle');
var langMenu = document.querySelector('.language-select .dropdown-menu');

function setLangMenu(open) {
  langMenu.classList.toggle('show', open);
  langToggle.setAttribute('aria-expanded', open);
}

if (langToggle && langMenu) {
  langToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    setLangMenu(!langMenu.classList.contains('show'));
  });
  document.addEventListener('click', function(e) {
    if (!langMenu.contains(e.target)) setLangMenu(false);
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') setLangMenu(false);
  });
}

// FAQ: animate <details> opening/closing (height grows downwards, answer fades in).
// Native <details> still does the work without JS or with reduced motion.
var faqReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll('details.faq-item').forEach(function(item) {
  var summary = item.querySelector('summary');
  var answer = item.querySelector('.faq-answer');
  if (!summary || !answer || !item.animate) return;

  function finish() {
    item.style.height = '';
    item.style.overflow = '';
    item.classList.remove('is-closing');
    item._anim = null;
  }

  summary.addEventListener('click', function(e) {
    if (faqReduceMotion) return;
    e.preventDefault();
    if (item._anim) item._anim.cancel();
    answer.getAnimations().forEach(function(a) { a.cancel(); });

    var borders = item.offsetHeight - item.clientHeight;
    var startHeight = item.offsetHeight;
    var closedHeight = summary.offsetHeight + borders;
    item.style.overflow = 'hidden';

    if (!item.open || item.classList.contains('is-closing')) {
      // open: let it render, measure, then grow from the current height
      item.classList.remove('is-closing');
      item.open = true;
      var openHeight = item.offsetHeight;
      item._anim = item.animate({ height: [startHeight + 'px', openHeight + 'px'] }, { duration: 300, easing: 'ease-out' });
      answer.animate({ opacity: [0, 1], transform: ['translateY(-6px)', 'none'] }, { duration: 300, easing: 'ease-out' });
      item._anim.onfinish = finish;
      item._anim.oncancel = function() { item.style.height = ''; };
    } else {
      // close: shrink back to the summary, then close for real
      item.classList.add('is-closing');
      item._anim = item.animate({ height: [startHeight + 'px', closedHeight + 'px'] }, { duration: 250, easing: 'ease-in' });
      answer.animate({ opacity: [1, 0] }, { duration: 200, easing: 'ease-in', fill: 'forwards' });
      item._anim.onfinish = function() { item.open = false; finish(); };
      item._anim.oncancel = function() { item.style.height = ''; };
    }
  });
});
