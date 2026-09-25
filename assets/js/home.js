/* =====================================================================
   INTRICON — homepage behaviour
   Image trail hero · flip words · project index with floating preview
   pinned horizontal gallery · word-by-word manifesto · counters
   tracing-beam timeline · testimonials · text hover fill · tubelight dock
   ===================================================================== */
(function () {
  "use strict";
  var D = window.INTRICON, U = D.util, $ = U.$, $$ = U.$$;
  var beach = D.projects[0];
  var capOf = {};
  beach.chapters.forEach(function (c) { c.images.forEach(function (im) { capOf[im.n] = { cap: im.cap, chapter: c.title }; }); });

  /* ---------- Hero: cursor image trail ---------- */
  function heroTrail() {
    var host = $("#heroTrail"), hero = $(".hero");
    if (!host || !hero || U.reduce) return;
    var list = beach.trail.length ? beach.trail : [beach.cover];
    var srcs = list.map(function (n) { return D.img(beach, n, "md"); });
    // warm the cache after the preloader so the first spawns are instant
    setTimeout(function () { srcs.forEach(function (s) { var i = new Image(); i.src = s; }); }, 900);
    var idx = 0, lastX = -999, lastY = -999, live = 0, MAX = 14, GAP = 96;
    function spawn(x, y) {
      var img = document.createElement("img");
      img.src = srcs[idx % srcs.length]; idx++;
      img.alt = "";
      img.style.left = x + "px"; img.style.top = y + "px";
      img.style.setProperty("--rot", (Math.random() * 16 - 8).toFixed(1) + "deg");
      img.style.zIndex = String(1000 + idx);
      host.appendChild(img); live++;
      img.addEventListener("animationend", function () { img.remove(); live--; });
      if (live > MAX) { var first = host.firstElementChild; if (first) { first.remove(); live--; } }
    }
    if (U.fine) {
      hero.addEventListener("mousemove", function (e) {
        var r = hero.getBoundingClientRect();
        var x = e.clientX - r.left, y = e.clientY - r.top;
        if (Math.hypot(x - lastX, y - lastY) < GAP) return;
        lastX = x; lastY = y; spawn(x, y);
      }, { passive: true });
    } else {
      // touch devices: a slow, automatic drift so the hero still feels alive
      var t = 0, timer = setInterval(function () {
        if (!document.body.classList.contains("is-ready")) return;
        var r = hero.getBoundingClientRect();
        if (r.bottom < 0) return;
        t += 0.9;
        var x = r.width * (0.5 + 0.38 * Math.sin(t * 0.9)), y = r.height * (0.45 + 0.3 * Math.sin(t * 1.7 + 1));
        spawn(x, y);
      }, 1100);
    }
  }

  /* ---------- Hero title letters ---------- */
  function heroTitle() {
    var h = $("#heroTitle"); if (!h) return;
    var txt = h.textContent.trim();
    h.innerHTML = txt.split("").map(function (ch, i) {
      var cls = ch === "O" ? ' class="o"' : "";
      return '<span' + cls + ' style="animation-delay:' + (0.05 + i * 0.06) + 's">' + ch + '</span>';
    }).join("");
  }

  /* ---------- Flip words ---------- */
  function flipWords() {
    var box = $("#flipWords"); if (!box) return;
    var words = $$("span", box), i = 0;
    function fit() { box.style.width = words[i].offsetWidth + "px"; }
    box.style.transition = "width 0.6s cubic-bezier(0.22,1,0.36,1)";
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit); else fit();
    window.addEventListener("resize", fit);
    if (U.reduce) return;
    setInterval(function () {
      var cur = words[i]; i = (i + 1) % words.length; var nxt = words[i];
      cur.classList.remove("is-in"); cur.classList.add("is-out");
      nxt.classList.add("is-in"); fit();
      setTimeout(function () { cur.classList.remove("is-out"); }, 700);
    }, 2600);
  }

  /* ---------- Project index with floating preview ---------- */
  function projectIndex() {
    var list = $("#indexList"), prev = $("#indexPreview");
    if (!list) return;
    list.innerHTML = D.projects.map(function (p, i) {
      var soon = p.status !== "complete";
      var meta = soon
        ? '<span class="tag"><i></i>Coming soon</span><span>' + p.subtitle + '</span>'
        : '<b>' + p.subtitle + '</b><span>' + p.location + ' · ' + p.year + '</span>';
      return '<a class="index__row' + (soon ? " index__row--soon" : "") + '" href="project.html?p=' + p.id + '" data-i="' + i + '" data-cursor="view" data-cursor-label="' + (soon ? "Preview" : "Open") + '">' +
        '<span class="index__num">' + String(i + 1).padStart(2, "0") + '</span>' +
        '<span class="index__title">' + p.title + '</span>' +
        '<span class="index__meta">' + meta + '<svg class="index__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 17 17 7M8 7h9v9"/></svg></span>' +
        '</a>';
    }).join("");
    if (!prev || !U.fine) return;
    // one <img> per project, swapped on hover; the frame lerps toward the cursor
    prev.innerHTML = D.projects.map(function (p) {
      var src = p.cover === null ? D.placeholder(p.title + " — photos coming soon", p.accent, 1200, 900) : D.img(p, p.cover, "md");
      return '<img src="' + src + '" alt="" />';
    }).join("");
    var imgs = $$("img", prev);
    var mx = 0, my = 0, x = 0, y = 0, on = false, raf;
    function loop() {
      x = U.lerp(x, mx, 0.12); y = U.lerp(y, my, 0.12);
      prev.style.left = x + "px"; prev.style.top = y + "px";
      if (on || Math.abs(x - mx) > 0.5) raf = requestAnimationFrame(loop);
    }
    list.addEventListener("mousemove", function (e) { mx = e.clientX + 40; my = e.clientY; }, { passive: true });
    $$(".index__row", list).forEach(function (row) {
      row.addEventListener("mouseenter", function (e) {
        var i = +row.getAttribute("data-i");
        imgs.forEach(function (im, k) { im.classList.toggle("is-on", k === i); });
        if (!on) { x = e.clientX + 40; y = e.clientY; }
        on = true; prev.classList.add("is-on"); cancelAnimationFrame(raf); loop();
      });
    });
    list.addEventListener("mouseleave", function () { on = false; prev.classList.remove("is-on"); });
  }

  /* ---------- Pinned horizontal gallery ---------- */
  function hscroll() {
    var sec = $("#highlights"), pin = $(".hscroll__pin", sec), track = $("#hscrollTrack"), bar = $("#hscrollBar"), count = $("#hscrollCount");
    if (!sec || !track) return;
    var nums = beach.highlights;
    var html = '<div class="hscroll__intro"><span class="eyebrow">Latest project</span><h2 class="display" data-cut>' + beach.title + ' <span class="serif">highlights</span></h2><p class="muted">' + beach.tagline + ' Scroll to move through the strip.</p><a class="btn magnetic" href="project.html?p=' + beach.id + '"><i class="btn__dot"></i><span>Open the project</span></a></div>';
    nums.forEach(function (n, i) {
      var c = capOf[n] || { cap: "", chapter: "" };
      var tall = (i === 2 || i === 5) ? " hscroll__item--tall" : "";
      html += '<figure class="hscroll__item' + tall + '" data-cursor="view" data-i="' + i + '"><figure><img src="' + D.img(beach, n, "md") + '" alt="' + c.cap + '" loading="lazy" /></figure><figcaption><span>' + c.chapter + '</span><b>' + String(i + 1).padStart(2, "0") + '</b></figcaption></figure>';
    });
    html += '<div class="hscroll__end"><h3 class="display" data-cut>Twenty-eight photos, <span class="serif">six rooms.</span></h3><p class="muted">The full record of the build, room by room, with captions.</p><a class="btn btn--solid magnetic" href="project.html?p=' + beach.id + '"><span>See all photos</span><svg class="btn__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a></div>';
    track.innerHTML = html;
    var items = $$(".hscroll__item", track);
    items.forEach(function (it) {
      it.addEventListener("click", function () {
        var all = nums.map(function (n) { var c = capOf[n] || {}; return { src: D.img(beach, n, "xl"), cap: c.cap }; });
        D.lightbox.open(all, +it.getAttribute("data-i"));
      });
    });
    var mobile = function () { return !U.fine || innerWidth <= 720; };
    if (mobile()) {
      items.forEach(function (i) { i.classList.add("is-vis"); });
      pin.setAttribute("data-cursor", "drag");
      return;
    }
    var max = 0, top = 0, h = 0, cur = 0, target = 0, raf = null;
    function measure() {
      if (mobile()) { sec.style.height = ""; track.style.transform = ""; return; }
      max = track.scrollWidth - innerWidth;
      h = max + innerHeight;
      sec.style.height = h + "px";
      top = sec.getBoundingClientRect().top + scrollY;
      onScroll();
    }
    function onScroll() {
      var p = U.clamp((scrollY - top) / (h - innerHeight), 0, 1);
      target = -p * max;
      if (bar) bar.style.transform = "scaleX(" + p + ")";
      if (count) count.textContent = String(Math.min(nums.length, Math.floor(p * nums.length) + 1)).padStart(2, "0") + " / " + String(nums.length).padStart(2, "0");
      if (!raf) raf = requestAnimationFrame(tick);
    }
    function tick() {
      cur = U.lerp(cur, target, 0.14);
      if (Math.abs(cur - target) < 0.3) cur = target;
      track.style.transform = "translate3d(" + cur + "px,0,0)";
      items.forEach(function (it) { var r = it.getBoundingClientRect(); it.classList.toggle("is-vis", r.left < innerWidth * 0.95 && r.right > 0); });
      raf = cur === target ? null : requestAnimationFrame(tick);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    setTimeout(measure, 100); setTimeout(measure, 1200);
  }

  /* ---------- Manifesto: word-by-word reveal tied to scroll ---------- */
  function revealWords() {
    var el = $("#revealWords"); if (!el) return;
    // wrap each word (keeping <em> wrappers)
    function wrap(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function (w) {
            if (!w) return;
            if (/^\s+$/.test(w)) frag.appendChild(document.createTextNode(" "));
            else { var s = document.createElement("span"); s.textContent = w; frag.appendChild(s); }
          });
          node.replaceChild(frag, n);
        } else if (n.nodeType === 1) wrap(n);
      });
    }
    wrap(el);
    var words = $$("span", el);
    if (U.reduce) { words.forEach(function (w) { w.classList.add("is-on"); }); return; }
    function upd() {
      var r = el.getBoundingClientRect();
      var start = innerHeight * 0.85, end = innerHeight * 0.35;
      var p = U.clamp((start - r.top) / (r.height + (start - end)), 0, 1);
      var n = Math.round(p * words.length);
      words.forEach(function (w, i) { w.classList.toggle("is-on", i < n); });
    }
    window.addEventListener("scroll", upd, { passive: true }); window.addEventListener("resize", upd); upd();
  }

  /* ---------- Stats counters ---------- */
  function stats() {
    var box = $("#stats"); if (!box) return;
    box.innerHTML = D.company.stats.map(function (s) {
      return '<div class="stat"><div class="stat__value"><span data-count="' + s.value + '">0</span><sup>' + s.suffix + '</sup></div><div class="stat__label">' + s.label + '</div></div>';
    }).join("");
    var nums = $$("[data-count]", box);
    function run(el) {
      var to = +el.getAttribute("data-count"), start = null, dur = 1700;
      function f(ts) { if (!start) start = ts; var t = U.clamp((ts - start) / dur, 0, 1); var e = 1 - Math.pow(2, -10 * t); el.textContent = Math.round(e * to); if (t < 1) requestAnimationFrame(f); else el.textContent = to; }
      requestAnimationFrame(f);
    }
    if (U.reduce || !("IntersectionObserver" in window)) { nums.forEach(function (n) { n.textContent = n.getAttribute("data-count"); }); return; }
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } }); }, { threshold: 0.6 });
    nums.forEach(function (n) { io.observe(n); });
  }

  /* ---------- Timeline tracing beam ---------- */
  function timeline() {
    var tl = $("#timeline"), beam = $("#timelineBeam"); if (!tl) return;
    var steps = $$(".step", tl);
    function upd() {
      var r = tl.getBoundingClientRect();
      var line = innerHeight * 0.68;
      var p = U.clamp((line - r.top) / r.height, 0, 1);
      if (beam) beam.style.transform = "scaleY(" + p + ")";
      steps.forEach(function (s) { s.classList.toggle("is-on", s.getBoundingClientRect().top < line); });
    }
    window.addEventListener("scroll", upd, { passive: true }); window.addEventListener("resize", upd); upd();
  }

  /* ---------- Testimonials ---------- */
  var TESTIMONIALS = [
    // Sample quotes — replace with real client words (and, if you like, real client photos).
    { quote: "Every trade on site knew the drawings better than we did. The stair alone would have been enough — it's the first thing every visitor touches.", name: "Owners, 25 Beach Street", role: "Waterfront new build · 2025", img: 12 },
    { quote: "We were warned that a build this detailed would run late. Intricon handed over on the program they gave us at the estimate, with a house that felt finished on day one.", name: "Sample client", role: "Replace with a real quote", img: 17 },
    { quote: "The weekly photo reports meant we never had to ask what was happening. When we did have a question, the director answered it himself, usually from site.", name: "Sample client", role: "Replace with a real quote", img: 10 },
  ];
  function testimonials() {
    var stack = $("#testiStack"), q = $("#testiQuote"), nm = $("#testiName"), rl = $("#testiRole");
    if (!stack || !q) return;
    stack.innerHTML = TESTIMONIALS.map(function (t) { return '<figure><img src="' + D.img(beach, t.img, "md") + '" alt="" loading="lazy" /></figure>'; }).join("");
    var figs = $$("figure", stack), i = 0, timer, first = true;
    function render() {
      var t = TESTIMONIALS[i];
      q.innerHTML = t.quote.split(" ").map(function (w, k) { return '<span style="animation-delay:' + (k * 22) + 'ms">' + w + '</span>'; }).join(" ");
      nm.textContent = t.name; rl.textContent = t.role;
      figs.forEach(function (f, k) {
        var pos = (k - i + figs.length) % figs.length;
        f.className = pos === 0 ? "pos-0" : pos === 1 ? "pos-1" : pos === 2 ? "pos-2" : "pos-hidden";
        if (pos === 0 && !first && !U.reduce) { void f.offsetWidth; f.classList.add("is-hop"); }
      });
      first = false;
    }
    function go(d) { i = (i + d + TESTIMONIALS.length) % TESTIMONIALS.length; render(); restart(); }
    function restart() { clearInterval(timer); if (!U.reduce) timer = setInterval(function () { i = (i + 1) % TESTIMONIALS.length; render(); }, 6500); }
    $("#testiPrev").addEventListener("click", function () { go(-1); });
    $("#testiNext").addEventListener("click", function () { go(1); });
    stack.addEventListener("click", function () { go(1); });
    stack.setAttribute("data-cursor", "view"); stack.setAttribute("data-cursor-label", "Next");
    render(); restart();
  }

  /* ---------- Tubelight dock: active section ---------- */
  function dock() {
    var dock = $("#dock"); if (!dock) return;
    var links = $$("a", dock);
    var secs = links.map(function (a) { return document.getElementById(a.getAttribute("data-section")); });
    var current = -1;
    function upd() {
      var y = scrollY + innerHeight * 0.4, active = 0;
      secs.forEach(function (s, i) { if (s && s.getBoundingClientRect().top + scrollY <= y) active = i; });
      if (scrollY + innerHeight >= document.documentElement.scrollHeight - 4) active = links.length - 1;
      if (active === current) return; current = active;
      links.forEach(function (a, i) { a.classList.toggle("is-active", i === active); });
      if (D.dockUpdate) D.dockUpdate();
    }
    window.addEventListener("scroll", upd, { passive: true }); upd();
  }

  /* ---------- Curtain footer: the page lifts away to reveal a fixed footer ---------- */
  function curtain() {
    var wrap = $("#contact"), foot = wrap && $(".cta", wrap), inner = foot && $(".cta__inner", foot);
    if (!wrap || !foot || U.reduce) return;
    function measure() {
      wrap.classList.remove("is-curtain"); wrap.style.height = "";
      var h = foot.offsetHeight;
      if (U.fine && h <= innerHeight) { wrap.style.height = h + "px"; wrap.classList.add("is-curtain"); }
    }
    function onScroll() {
      if (!wrap.classList.contains("is-curtain") || !inner) return;
      var r = wrap.getBoundingClientRect();
      var p = U.clamp((innerHeight - r.top) / r.height, 0, 1); // 0 = footer just entering, 1 = fully revealed
      inner.style.setProperty("--lift", ((1 - p) * -60).toFixed(1) + "px"); // subtle parallax as it is uncovered
    }
    var t; window.addEventListener("resize", function () { clearTimeout(t); t = setTimeout(measure, 200); });
    window.addEventListener("load", measure); window.addEventListener("scroll", onScroll, { passive: true });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    measure(); onScroll();
  }

  /* ---------- Scroll-velocity marquee: speed and direction follow the scroll ---------- */
  function velocityMarquee() {
    var track = $("#marqueeBig"); if (!track || U.reduce) return;
    var x = 0, last = scrollY, lastT = performance.now(), vel = 0, dir = 1, base = 70; // px per second at rest
    function frame(now) {
      var dt = Math.min((now - lastT) / 1000, 0.05); lastT = now;
      var y = scrollY, sv = dt > 0 ? (y - last) / dt : 0; last = y;
      vel = U.lerp(vel, sv, 0.08);
      if (vel < -40) dir = -1; else if (vel > 40) dir = 1;
      x -= dir * base * dt * (1 + Math.min(Math.abs(vel) / 250, 7));
      var half = track.scrollWidth / 2;
      if (half > 0) { if (x <= -half) x += half; if (x > 0) x -= half; }
      track.style.transform = "translate3d(" + x.toFixed(2) + "px,0,0)";
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /* ---------- SVG text hover effect: reveal mask follows the cursor ---------- */
  function textHover() {
    var svg = $("#txtfx"), grad = $("#txtReveal"); if (!svg || !grad || !U.fine) return;
    var a = svg.closest("a");
    a.addEventListener("mousemove", function (e) {
      var r = svg.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width * 1200, y = (e.clientY - r.top) / r.height * 230;
      grad.setAttribute("cx", x.toFixed(1)); grad.setAttribute("cy", y.toFixed(1));
    });
    a.addEventListener("mouseleave", function () { grad.setAttribute("cx", "-1000"); grad.setAttribute("cy", "-1000"); });
  }

  /* ---------- Lens magnifier on the detail card ---------- */
  function lens() {
    var card = $(".spot--img"), lensEl = $("#lens"); if (!card || !lensEl || !U.fine) return;
    card.addEventListener("mousemove", function (e) {
      var r = card.getBoundingClientRect();
      lensEl.style.setProperty("--lx", (e.clientX - r.left) + "px");
      lensEl.style.setProperty("--ly", (e.clientY - r.top) + "px");
    }, { passive: true });
  }

  /* ---------- Misc ---------- */
  function misc() {
    var bi = $("#bentoImg"); if (bi) bi.src = D.img(beach, 1, "md");
    var li = $("#lensImg"); if (li) li.src = D.img(beach, 1, "xl");
  }

  document.addEventListener("DOMContentLoaded", function () {
    heroTitle(); heroTrail(); flipWords(); projectIndex(); hscroll(); revealWords(); stats(); timeline(); testimonials(); dock(); misc();
    curtain(); velocityMarquee(); textHover(); lens();
    // reveal + magnetic for dynamically-inserted content
    D.observeReveal(); if (D.magnetic) D.magnetic();
  });
})();
