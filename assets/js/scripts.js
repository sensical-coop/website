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

// Image carousel (layouts/partials/carousel.html). The track is a scroll-snap strip,
// so swiping and trackpads work on their own; this adds arrows, dots, arrow keys and
// an eased lateral slide. Snapping is paused while the slide animates.
var carouselReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

document.querySelectorAll('[data-carousel]').forEach(function(root) {
  var track = root.querySelector('.image-carousel__track');
  var slides = Array.prototype.slice.call(track.children);
  var controls = root.querySelector('.image-carousel__controls');
  if (!controls || slides.length < 2) return;

  var dotsBox = root.querySelector('[data-carousel-dots]');
  var counter = root.querySelector('[data-carousel-current]');
  var index = 0;
  var frame = null;

  var dots = slides.map(function(slide, i) {
    var dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'image-carousel__dot';
    dot.setAttribute('aria-label', root.dataset.labelGoto + ' ' + (i + 1));
    dot.addEventListener('click', function() { go(i); });
    dotsBox.appendChild(dot);
    return dot;
  });

  function mark(i) {
    index = i;
    dots.forEach(function(dot, j) { dot.setAttribute('aria-current', j === i ? 'true' : 'false'); });
    counter.textContent = (i + 1 < 10 ? '0' : '') + (i + 1);
  }

  function slideTo(target) {
    if (frame) cancelAnimationFrame(frame);
    var start = track.scrollLeft;
    var distance = target - start;
    if (carouselReduceMotion.matches || !distance) {
      track.scrollLeft = target;
      return;
    }
    // Longer jumps (e.g. wrapping back to the first image) get a little more time
    var duration = Math.min(900, 450 + Math.abs(distance) / track.clientWidth * 150);
    var t0 = null;
    track.classList.add('is-animating');
    function step(now) {
      if (t0 === null) t0 = now;
      var p = Math.min(1, (now - t0) / duration);
      var eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      track.scrollLeft = start + distance * eased;
      if (p < 1) {
        frame = requestAnimationFrame(step);
      } else {
        frame = null;
        track.classList.remove('is-animating');
      }
    }
    frame = requestAnimationFrame(step);
  }

  function go(i) {
    i = (i + slides.length) % slides.length;
    mark(i);
    slideTo(slides[i].offsetLeft);
  }

  // Keep dots and counter in sync when the user swipes or scrolls
  var ticking = false;
  track.addEventListener('scroll', function() {
    if (frame || ticking) return;
    ticking = true;
    requestAnimationFrame(function() {
      ticking = false;
      var nearest = 0;
      slides.forEach(function(slide, i) {
        if (Math.abs(slide.offsetLeft - track.scrollLeft) < Math.abs(slides[nearest].offsetLeft - track.scrollLeft)) nearest = i;
      });
      if (nearest !== index) mark(nearest);
    });
  }, { passive: true });

  // A manual swipe or wheel cancels a running animation
  ['pointerdown', 'wheel', 'touchstart'].forEach(function(type) {
    track.addEventListener(type, function() {
      if (!frame) return;
      cancelAnimationFrame(frame);
      frame = null;
      track.classList.remove('is-animating');
    }, { passive: true });
  });

  track.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(index - 1); }
  });
  root.querySelector('[data-carousel-prev]').addEventListener('click', function() { go(index - 1); });
  root.querySelector('[data-carousel-next]').addEventListener('click', function() { go(index + 1); });

  // Stay on the current image when the layout width changes
  window.addEventListener('resize', function() {
    if (!frame) track.scrollLeft = slides[index].offsetLeft;
  });

  mark(0);
  controls.hidden = false;
  root.classList.add('is-ready');
});

// Projects filter (layouts/projects/list.html): one topic and one year at a time,
// combined. The choice is kept in the URL (?topic=…&year=…) so a filtered view can be
// shared. Without JS the filter stays hidden and every project shows.
document.querySelectorAll('[data-project-filter]').forEach(function(filter) {
  var grid = document.querySelector('[data-filter-grid]');
  var empty = document.querySelector('[data-filter-empty]');
  if (!grid) return;
  var cards = Array.prototype.slice.call(grid.querySelectorAll('[data-topics]'));
  var chips = Array.prototype.slice.call(filter.querySelectorAll('[data-filter]'));
  var state = { topic: '', year: '' };
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Start from the URL, ignoring values that have no chip
  var params = new URLSearchParams(window.location.search);
  Object.keys(state).forEach(function(group) {
    var value = params.get(group) || '';
    var known = chips.some(function(chip) { return chip.dataset.filter === group && chip.dataset.value === value; });
    if (known) state[group] = value;
  });

  function matches(card, group, attr) {
    return !state[group] || card.getAttribute(attr).split(' ').indexOf(state[group]) > -1;
  }

  function apply(animate) {
    var shown = 0;
    cards.forEach(function(card) {
      var show = matches(card, 'topic', 'data-topics') && matches(card, 'year', 'data-years');
      var wasHidden = card.hidden;
      card.hidden = !show;
      if (show) {
        shown++;
        if (animate && wasHidden && !reduceMotion.matches && card.animate) {
          card.animate({ opacity: [0, 1], transform: ['translateY(8px)', 'none'] }, { duration: 250, easing: 'ease-out' });
        }
      }
    });
    chips.forEach(function(chip) {
      chip.setAttribute('aria-pressed', state[chip.dataset.filter] === chip.dataset.value ? 'true' : 'false');
    });
    if (empty) empty.hidden = shown > 0;

    var url = new URLSearchParams(window.location.search);
    Object.keys(state).forEach(function(group) {
      if (state[group]) url.set(group, state[group]); else url.delete(group);
    });
    var query = url.toString();
    history.replaceState(null, '', window.location.pathname + (query ? '?' + query : '') + window.location.hash);
  }

  chips.forEach(function(chip) {
    chip.addEventListener('click', function() {
      var group = chip.dataset.filter;
      // Clicking the active chip again goes back to "All"
      state[group] = state[group] === chip.dataset.value ? '' : chip.dataset.value;
      apply(true);
    });
  });
  document.querySelectorAll('[data-filter-reset]').forEach(function(button) {
    button.addEventListener('click', function() {
      state.topic = '';
      state.year = '';
      apply(true);
    });
  });

  filter.hidden = false;
  apply(false);
});

// Sticky header: slides away while scrolling down, comes back on scroll up
(function() {
  var header = document.querySelector('.header');
  if (!header) return;
  var lastY = window.scrollY;
  var ticking = false;
  function update() {
    var y = window.scrollY;
    var menuOpen = body.classList.contains('lock-scroll');
    var langOpen = langMenu && langMenu.classList.contains('show');
    if (Math.abs(y - lastY) > 4) {
      var hide = y > lastY && y > header.offsetHeight && !menuOpen && !langOpen;
      header.classList.toggle('is-hidden', hide);
      lastY = y;
    }
    ticking = false;
  }
  window.addEventListener('scroll', function() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  // Keyboard users tabbing into the menu always see it
  header.addEventListener('focusin', function() {
    header.classList.remove('is-hidden');
  });
})();
