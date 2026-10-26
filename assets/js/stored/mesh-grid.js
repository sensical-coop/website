// STORED FOR LATER (not loaded anywhere). Intended for a future mesh networks page.
//
// How to use it again:
//   1. Markup: inside an element with the 40px dot grid background, add
//        <canvas class="hero-mesh" aria-hidden="true"></canvas>
//      as its first child. The script draws on the canvas parent; it leaves the
//      first child element of `.hero-text` clear (the white band on the home hero) -
//      adapt the `band` selector below for another layout.
//   2. CSS:
//        .hero-mesh { position: absolute; inset: 0; pointer-events: none; }
//      and give the content above it `position: relative; z-index: 1;`.
//      The parent needs the dot background: radial-gradient(circle at 1px 1px, ...) 40px.
//   3. Template (footer_js block of the page):
//        {{ $mesh := resources.Get "js/stored/mesh-grid.js" | minify | fingerprint }}
//        <script src="{{ $mesh.RelPermalink }}" integrity="{{ $mesh.Data.Integrity }}" defer></script>
//   Tuning: SPEED, TRAIL, PULSE_POWER, CURSOR_R, CURSOR_LIFE below.
//
// Home hero: the background dot grid comes alive as a sensor mesh.
// - On load, a sweep joins all the dots into a grid for a moment.
// - A few dots are sensor nodes. They send pulses that join the dots into a grid as
//   they pass; nodes reached by a pulse light up and sometimes relay it.
// - The grid follows the pointer: dots near it join up, leaving a short fading trail.
//   Clicking sends a pulse from the nearest dot.
// Plain canvas, no dependencies. Lines sit exactly on the CSS background dots
// (.hero-full: 40px grid, dot at 1px 1px). The white "sensical" band is left clear.
(function () {
  var canvas = document.querySelector('.hero-mesh');
  if (!canvas || !canvas.getContext) return;
  var hero = canvas.parentElement;
  var band = hero.querySelector('.hero-text > div'); // the white "sensical" band
  var ctx = canvas.getContext('2d');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var STEP = 40;           // must match background-size in _hero-image.scss
  var OFFSET = 1;          // dot centre (radial-gradient at 1px 1px)
  var SPEED = 0.09;        // pulse speed, px per ms
  var TRAIL = 120;         // grid kept visible behind a pulse front, px
  var PULSE_POWER = 0.4;   // node pulses stay subtle; the pointer is the main actor
  var CURSOR_R = 190;      // radius around the pointer where dots join up, px
  var CURSOR_LIFE = 1400;  // how long the pointer trail lasts, ms
  var MAX_PULSES = 8;

  var view = { w: 0, h: 0, top: 0, bandTop: 0, bandBottom: 0, cols: 0, rows: 0 };
  var nodes = [];
  var pulses = [];
  var trail = [];          // recent pointer positions {x, y, t}
  var grid = [];           // per-dot strength for the current frame
  var nextAuto = 0;
  var introDone = false;

  // Small seeded random so node positions are stable between visits
  var seed = 7;
  function rand() {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  }

  function dotX(col) { return col * STEP + OFFSET; }
  function dotY(row) { return row * STEP + OFFSET; }
  function inBand(y) { return y > view.bandTop - 2 && y < view.bandBottom + 2; }

  function layout() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var rect = hero.getBoundingClientRect();
    view.w = rect.width;
    view.h = rect.height;
    canvas.width = Math.round(view.w * dpr);
    canvas.height = Math.round(view.h * dpr);
    canvas.style.width = view.w + 'px';
    canvas.style.height = view.h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    view.top = 60; // below the header
    if (band) {
      var b = band.getBoundingClientRect();
      view.bandTop = b.top - rect.top;
      view.bandBottom = b.bottom - rect.top;
    } else {
      view.bandTop = view.bandBottom = -1;
    }
    view.cols = Math.floor((view.w - OFFSET) / STEP) + 1;
    view.rows = Math.floor((view.h - OFFSET) / STEP) + 1;
    grid = new Float32Array(view.cols * view.rows);

    // Sensor nodes live in the open area above the band, one per vertical strip
    seed = 7;
    nodes = [];
    var row0 = Math.ceil((view.top + 8 - OFFSET) / STEP);
    var row1 = Math.floor((view.bandTop - 8 - OFFSET) / STEP);
    if (row1 - row0 < 2) return;
    var count = view.w < 768 ? 4 : 7;
    for (var i = 0; i < count; i++) {
      var c0 = Math.floor(view.cols * i / count) + 1;
      var c1 = Math.floor(view.cols * (i + 1) / count) - 1;
      var col = c0 + Math.floor(rand() * Math.max(1, c1 - c0));
      var row = row0 + 1 + Math.floor(rand() * Math.max(1, row1 - row0 - 1));
      nodes.push({ x: dotX(col), y: dotY(row), lit: -1e9 });
    }
  }

  function addPulse(x, y, t, from) {
    if (pulses.length >= MAX_PULSES) pulses.shift();
    pulses.push({ x: x, y: y, t0: t, from: from || null, reached: [] });
  }

  // How strongly a dot is joined into the grid right now (0..1)
  function strength(x, y, t) {
    var best = 0, i, d, s;
    for (i = 0; i < pulses.length; i++) {
      var p = pulses[i];
      var r = (t - p.t0) * (p.speed || SPEED);
      d = p.sweep ? x : Math.sqrt((x - p.x) * (x - p.x) + (y - p.y) * (y - p.y));
      var behind = r - d, tr = p.trail || TRAIL;
      if (behind >= 0 && behind < tr) {
        s = (1 - behind / tr) * (p.power || PULSE_POWER);
        if (s > best) best = s;
      }
    }
    for (i = 0; i < trail.length; i++) {
      var c = trail[i];
      d = Math.sqrt((x - c.x) * (x - c.x) + (y - c.y) * (y - c.y));
      if (d < CURSOR_R) {
        s = (1 - d / CURSOR_R) * (1 - (t - c.t) / CURSOR_LIFE);
        if (s > best) best = s;
      }
    }
    return best;
  }

  function update(t) {
    // Nodes light up (and sometimes relay) when a pulse reaches them
    pulses.forEach(function (p) {
      if (p.sweep) return;
      var r = (t - p.t0) * SPEED;
      nodes.forEach(function (n) {
        if (n === p.from || p.reached.indexOf(n) !== -1) return;
        var d = Math.sqrt((n.x - p.x) * (n.x - p.x) + (n.y - p.y) * (n.y - p.y));
        if (r >= d) {
          p.reached.push(n);
          if (t - n.lit > 2500) {
            n.lit = t;
            if (rand() < 0.15) addPulse(n.x, n.y, t + 600, n);
          }
        }
      });
    });

    var maxD = Math.sqrt(view.w * view.w + view.h * view.h);
    pulses = pulses.filter(function (p) {
      return (t - p.t0) * (p.speed || SPEED) < maxD + (p.trail || TRAIL);
    });
    trail = trail.filter(function (c) { return t - c.t < CURSOR_LIFE; });

    // A node starts a new pulse every few seconds
    if (t >= nextAuto && nodes.length) {
      var n = nodes[Math.floor(rand() * nodes.length)];
      n.lit = t;
      addPulse(n.x, n.y, t, n);
      nextAuto = t + 5500 + rand() * 3500;
    }
  }

  function draw(t) {
    ctx.clearRect(0, 0, view.w, view.h);
    ctx.save();
    // Leave the header and the white band clear
    ctx.beginPath();
    ctx.rect(0, view.top, view.w, Math.max(0, view.bandTop - view.top));
    ctx.rect(0, view.bandBottom, view.w, view.h - view.bandBottom);
    ctx.clip();

    var col, row, i;
    for (row = 0; row < view.rows; row++) {
      for (col = 0; col < view.cols; col++) {
        var y = dotY(row);
        grid[row * view.cols + col] = (y < view.top || inBand(y)) ? 0 : strength(dotX(col), y, t);
      }
    }

    ctx.lineWidth = 1;
    for (row = 0; row < view.rows; row++) {
      for (col = 0; col < view.cols; col++) {
        i = row * view.cols + col;
        var s0 = grid[i];
        if (s0 <= 0.02) continue;
        if (col + 1 < view.cols) segment(col, row, col + 1, row, Math.min(s0, grid[i + 1]));
        if (row + 1 < view.rows) segment(col, row, col, row + 1, Math.min(s0, grid[i + view.cols]));
      }
    }

    nodes.forEach(function (n) {
      var glow = Math.max(0, 1 - (t - n.lit) / 1400);
      ctx.fillStyle = '#000';
      ctx.fillRect(n.x - 4, n.y - 4, 8, 8);
      if (glow > 0 && glow <= 1) {
        ctx.fillStyle = 'rgba(255,255,255,' + glow.toFixed(3) + ')';
        ctx.fillRect(n.x - 2, n.y - 2, 4, 4);
        ctx.strokeStyle = 'rgba(0,0,0,' + (glow * 0.6).toFixed(3) + ')';
        var ring = 8 + (1 - glow) * 14;
        ctx.strokeRect(n.x - ring, n.y - ring, ring * 2, ring * 2);
      }
    });

    ctx.restore();
  }

  function segment(c0, r0, c1, r1, s) {
    if (s <= 0.02) return;
    ctx.strokeStyle = 'rgba(0,0,0,' + (s * 0.65).toFixed(3) + ')';
    ctx.beginPath();
    ctx.moveTo(dotX(c0), dotY(r0));
    ctx.lineTo(dotX(c1), dotY(r1));
    ctx.stroke();
  }

  // --- Pointer --------------------------------------------------------------------
  function localPoint(e) {
    var rect = hero.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  hero.addEventListener('pointermove', function (e) {
    var p = localPoint(e);
    trail.push({ x: p.x, y: p.y, t: performance.now() });
    if (trail.length > 80) trail.shift();
  });

  hero.addEventListener('pointerdown', function (e) {
    var p = localPoint(e);
    if (p.y < view.top || inBand(p.y)) return;
    // snap to the nearest dot and send a pulse from there
    var x = dotX(Math.round((p.x - OFFSET) / STEP));
    var y = dotY(Math.round((p.y - OFFSET) / STEP));
    addPulse(x, y, performance.now());
    pulses[pulses.length - 1].power = 1; // clicks are the pointer's, so full strength
  });

  // --- Still frame for reduced motion ---------------------------------------------
  function drawStill() {
    pulses = [];
    trail = [];
    if (nodes.length) {
      var n = nodes[Math.floor(nodes.length / 2)];
      n.lit = 0;
      pulses.push({ x: n.x, y: n.y, t0: 0, from: n, reached: [] });
      draw(TRAIL * 2.2 / SPEED);
    }
  }

  // --- Loop: only while the hero is visible ---------------------------------------
  var running = false, raf = null;

  function frame(t) {
    if (!introDone) {
      introDone = true;
      pulses.push({ sweep: true, x: 0, y: 0, t0: t, speed: 0.45, trail: 600, power: 0.8, reached: [] });
      nextAuto = t + 4000;
    }
    update(t);
    draw(t);
    if (running) raf = requestAnimationFrame(frame);
  }

  function start() {
    if (reduceMotion) { drawStill(); return; }
    if (running || document.hidden) return;
    running = true;
    raf = requestAnimationFrame(frame);
  }

  function stop() {
    running = false;
    if (raf) cancelAnimationFrame(raf);
  }

  layout();
  if (reduceMotion) drawStill();

  if ('ResizeObserver' in window) {
    new ResizeObserver(function () {
      layout();
      if (reduceMotion) drawStill();
    }).observe(hero);
  }

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      entries[0].isIntersecting ? start() : stop();
    }).observe(hero);
  } else {
    start();
  }

  document.addEventListener('visibilitychange', function () {
    document.hidden ? stop() : start();
  });
})();
