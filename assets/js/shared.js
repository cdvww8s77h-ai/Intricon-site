/* =====================================================================
   INTRICON — shared behaviour (both pages)
   Preloader · custom cursor · top bar · overlay menu · scroll progress
   reveal-on-scroll · magnetic buttons · marquee · spotlight cards · lightbox
   All effects are hand-ported from 21st.dev components — see ATTRIBUTIONS.md
   ===================================================================== */
(function () {
  "use strict";
  var D = window.INTRICON;
  var co = D.company;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
  var lerp = function (a, b, t) { return a + (b - a) * t; };
  D.util = { $: $, $$: $$, clamp: clamp, lerp: lerp, reduce: reduce, fine: fine };

  /* ---------- session flag: full preloader once per session ---------- */
  var seen = false;
  try { seen = sessionStorage.getItem("intricon-seen") === "1"; } catch (e) {}

  /* ---------- Preloader (count-up + curtain) ---------- */
  function preloader() {
    var el = $("#preloader");
    if (!el) { document.body.classList.add("is-ready"); return; }
    var word = $("#preloaderWord");
    var count = $("#preloaderCount");
    var bar = $("#preloaderBar");
    if (word) {
      var letters = word.textContent.split("");
      word.innerHTML = "";
      letters.forEach(function (ch, i) {
        var s = document.createElement("span");
        s.textContent = ch;
        s.style.animationDelay = (i * 45) + "ms";
        word.appendChild(s);
      });
    }
    document.body.classList.add("is-locked");
    var dur = seen || reduce ? 350 : 1500;
    var start = null;
    function easeOutExpo(t) { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); }
    function frame(ts) {
      if (!start) start = ts;
      var t = clamp((ts - start) / dur, 0, 1);
      var v = Math.round(easeOutExpo(t) * 100);
      if (count) count.textContent = v;
      if (bar) bar.style.width = v + "%";
      if (t < 1) requestAnimationFrame(frame);
      else finish();
    }
    function finish() {
      setTimeout(function () {
        el.classList.add("is-done");
        document.body.classList.remove("is-locked");
        document.body.classList.add("is-ready");
        try { sessionStorage.setItem("intricon-seen", "1"); } catch (e) {}
        setTimeout(function () { el.remove(); }, 1100);
      }, 180);
    }
    requestAnimationFrame(frame);
  }

  /* ---------- Custom cursor: dot + lagging ring + contextual label ---------- */
  function cursor() {
    var el = $("#cursor");
    if (!el || !fine || reduce) { document.body.classList.remove("has-cursor"); return; }
    var label = $("#cursorLabel");
    var dot = $(".cursor__dot", el);
    var ring = $(".cursor__ring", el);
    var mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my, dx = mx, dy = my;
    var visible = false;
    window.addEventListener("mousemove", function (e) {
      mx = e.clientX; my = e.clientY;
      if (!visible) { visible = true; el.classList.remove("is-hidden"); }
    }, { passive: true });
    document.addEventListener("mouseleave", function () { el.classList.add("is-hidden"); visible = false; });
    document.addEventListener("mouseenter", function () { el.classList.remove("is-hidden"); });
    (function loop() {
      dx = lerp(dx, mx, 0.55); dy = lerp(dy, my, 0.55);
      rx = lerp(rx, mx, 0.18); ry = lerp(ry, my, 0.18);
      dot.style.transform = "translate(" + dx + "px," + dy + "px)";
      ring.style.transform = "translate(" + rx + "px," + ry + "px)";
      requestAnimationFrame(loop);
    })();
    // contextual states via delegation
    document.addEventListener("mouseover", function (e) {
      var t = e.target.closest("[data-cursor], a, button, .tile, .index__row");
      el.classList.remove("is-link", "is-view", "is-drag");
      if (!t) return;
      var kind = t.getAttribute("data-cursor");
      if (kind === "view") { label.textContent = t.getAttribute("data-cursor-label") || "View"; el.classList.add("is-view"); }
      else if (kind === "drag") { label.textContent = "Drag"; el.classList.add("is-drag"); }
      else if (kind === "none") { /* plain */ }
      else el.classList.add("is-link");
    });
    document.addEventListener("mouseout", function (e) {
      var t = e.target.closest("[data-cursor], a, button, .tile, .index__row");
      if (t && !t.contains(e.relatedTarget)) el.classList.remove("is-link", "is-view", "is-drag");
    });
  }

  /* ---------- Top bar hide/show on scroll direction ---------- */
  function topbar() {
    var bar = $("#topbar");
    if (!bar) return;
    var last = scrollY, ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return; ticking = true;
      requestAnimationFrame(function () {
        var y = scrollY;
        if (y > 160 && y > last + 4 && !document.body.classList.contains("menu-open")) bar.classList.add("is-hidden");
        else if (y < last - 4 || y < 160) bar.classList.remove("is-hidden");
        last = y; ticking = false;
      });
    }, { passive: true });
  }

  /* ---------- Local time (Sydney) ---------- */
  function clock() {
    var el = $("#localTime");
    if (!el) return;
    var fmt;
    try { fmt = new Intl.DateTimeFormat("en-AU", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: co.timezone }); } catch (e) { fmt = null; }
    function tick() {
      var d = new Date();
      el.textContent = (co.location.split(",")[0] || "Local") + " · " + (fmt ? fmt.format(d) : d.toTimeString().slice(0, 5));
    }
    tick(); setInterval(tick, 15000);
  }

  /* ---------- Overlay menu ---------- */
  function menu() {
    var btn = $("#menuBtn"), nav = $("#menu"), bg = $("#menuBg"), lbl = $("#menuBtnLabel");
    if (!btn || !nav) return;
    var open = false;
    function set(v) {
      open = v;
      document.body.classList.toggle("menu-open", open);
      document.body.classList.toggle("is-locked", open);
      btn.setAttribute("aria-expanded", String(open));
      if (lbl) lbl.textContent = open ? "Close" : "Menu";
      if (!open && bg) bg.classList.remove("is-on");
      $("#topbar") && $("#topbar").classList.remove("is-hidden");
    }
    btn.addEventListener("click", function () { set(!open); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && open) set(false); });
    $$("a", nav).forEach(function (a) {
      a.addEventListener("click", function () { setTimeout(function () { set(false); }, 120); });
      a.addEventListener("mouseenter", function () {
        var n = a.getAttribute("data-bg");
        if (!bg) return;
        if (n === null || n === "") { bg.classList.remove("is-on"); return; }
        var beach = D.projects[0];
        bg.style.backgroundImage = "url('" + D.img(beach, n, "md") + "')";
        bg.classList.add("is-on");
      });
    });
    // side lists
    var mp = $("#menuProjects");
    if (mp) {
      mp.innerHTML = D.projects.map(function (p, i) {
        var right = p.status === "complete" ? p.year : "Coming soon";
        return '<li><a href="project.html?p=' + p.id + '" data-bg="' + (p.cover === null ? "" : p.cover) + '">' + p.title + '</a><span>' + right + '</span></li>';
      }).join("");
      $$("a", mp).forEach(function (a) {
        a.addEventListener("mouseenter", function () {
          var n = a.getAttribute("data-bg");
          if (!bg) return;
          if (!n) { bg.classList.remove("is-on"); return; }
          var p = D.projects.find(function (x) { return a.getAttribute("href").indexOf(x.id) > -1; });
          bg.style.backgroundImage = "url('" + D.img(p, n, "md") + "')";
          bg.classList.add("is-on");
        });
      });
    }
    var mc = $("#menuContact");
    if (mc) mc.innerHTML = '<a href="mailto:' + co.email + '">' + co.email + '</a><br><a href="tel:' + co.phone.replace(/\s+/g, "") + '">' + co.phone + '</a><br>' + co.address;
  }

  /* ---------- Scroll progress bar ---------- */
  function progress() {
    var el = $("#progress");
    if (!el) return;
    function upd() {
      var max = document.documentElement.scrollHeight - innerHeight;
      el.style.transform = "scaleX(" + (max > 0 ? scrollY / max : 0) + ")";
    }
    window.addEventListener("scroll", upd, { passive: true }); window.addEventListener("resize", upd); upd();
  }

  /* ---------- Vertical Cut Reveal: wrap words so they can rise out of clipped boxes ---------- */
  function cutSplit(el) {
    if (el.dataset.cutDone) return; el.dataset.cutDone = "1";
    var i = 0;
    (function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          if (!n.textContent.trim()) return;
          var frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function (w) {
            if (!w) return;
            if (/^\s+$/.test(w)) { frag.appendChild(document.createTextNode(" ")); return; }
            var o = document.createElement("span"); o.className = "cut"; o.style.setProperty("--i", i++);
            var s = document.createElement("span"); s.textContent = w; o.appendChild(s); frag.appendChild(o);
          });
          node.replaceChild(frag, n);
        } else if (n.nodeType === 1 && n.tagName !== "SVG" && n.tagName !== "svg") walk(n);
      });
    })(el);
  }
  D.cutSplit = cutSplit;

  /* ---------- Reveal on scroll (blur-fade + cut reveal) ---------- */
  function reveal() {
    $$("[data-cut]").forEach(cutSplit);
    var els = $$("[data-reveal], [data-cut]");
    if (!els.length) return;
    if (reduce || !("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("is-in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { if (!e.classList.contains("is-in")) io.observe(e); });
  }
  D.observeReveal = reveal;

  /* ---------- Letter Swap: wrap letters so each can slide up and reveal its twin ---------- */
  function letterSwap(el) {
    if (el.dataset.swap || el.children.length) return; el.dataset.swap = "1"; // text-only links
    Array.prototype.slice.call(el.childNodes).forEach(function (n) {
      if (n.nodeType !== 3 || !n.textContent.trim()) return;
      var wrap = document.createElement("span"); wrap.className = "swap";
      n.textContent.split("").forEach(function (ch, i) {
        var s = document.createElement("i"); s.textContent = ch; s.setAttribute("data-ch", ch); s.style.setProperty("--i", i); wrap.appendChild(s);
      });
      el.replaceChild(wrap, n);
    });
  }
  D.letterSwap = letterSwap;

  /* ---------- Tubelight dock: one lamp that slides to the active item ---------- */
  function dockLamp() {
    var dock = $("#dock"); if (!dock) return;
    var lamp = document.createElement("i"); lamp.className = "dock__lamp"; dock.appendChild(lamp);
    function upd() {
      var a = $("a.is-active", dock);
      if (!a || !a.offsetWidth) { lamp.style.opacity = "0"; return; }
      lamp.style.opacity = "1"; lamp.style.left = a.offsetLeft + "px"; lamp.style.width = a.offsetWidth + "px";
      if (dock.scrollWidth > dock.clientWidth) dock.scrollTo({ left: a.offsetLeft - dock.clientWidth / 2 + a.offsetWidth / 2, behavior: "smooth" });
    }
    D.dockUpdate = upd;
    window.addEventListener("resize", upd);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(upd);
    upd();
  }

  /* ---------- Magnetic buttons ---------- */
  function magnetic() {
    if (!fine || reduce) return;
    $$(".magnetic").forEach(function (el) {
      if (el.dataset.magnetic) return; el.dataset.magnetic = "1";
      var r;
      el.addEventListener("mouseenter", function () { r = el.getBoundingClientRect(); el.style.transition = "transform 0.25s cubic-bezier(0.22,1,0.36,1)"; });
      el.addEventListener("mousemove", function (e) {
        if (!r) r = el.getBoundingClientRect();
        var x = e.clientX - (r.left + r.width / 2), y = e.clientY - (r.top + r.height / 2);
        el.style.transform = "translate(" + x * 0.32 + "px," + y * 0.32 + "px)";
      });
      el.addEventListener("mouseleave", function () { el.style.transition = "transform 0.6s cubic-bezier(0.16,1,0.3,1)"; el.style.transform = ""; });
    });
  }
  D.magnetic = magnetic;

  /* ---------- Marquee: repeat content so the -50% loop is seamless ---------- */
  function marquee() {
    $$(".marquee__track").forEach(function (track) {
      if (!track.dataset.orig) track.dataset.orig = track.innerHTML; // keep the original set
      var html = track.dataset.orig;
      track.innerHTML = html;
      var w = track.scrollWidth;
      if (!w) return;
      var need = Math.max(1, Math.ceil((innerWidth * 1.2) / w));
      var half = "";
      for (var i = 0; i < need; i++) half += html;
      track.innerHTML = half + half; // two identical halves → the -50% keyframe loops seamlessly
    });
  }
  D.marquee = marquee;

  /* ---------- Spotlight: pointer-following radial gradient ---------- */
  function spotlight() {
    if (!fine) return;
    document.addEventListener("mousemove", function (e) {
      var t = e.target.closest(".spot, .cta__title a");
      if (!t) return;
      var r = t.getBoundingClientRect();
      t.style.setProperty("--mx", (e.clientX - r.left) + "px");
      t.style.setProperty("--my", (e.clientY - r.top) + "px");
    }, { passive: true });
  }

  /* ---------- 3D tilt cards ---------- */
  function tilt() {
    if (!fine || reduce) return;
    $$(".spot").forEach(function (el) {
      if (el.dataset.tilt) return; el.dataset.tilt = "1";
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transition = "transform 0.15s ease-out";
        el.style.transform = "perspective(1200px) rotateX(" + (-y * 5).toFixed(2) + "deg) rotateY(" + (x * 5).toFixed(2) + "deg) translateZ(4px)";
      });
      el.addEventListener("mouseleave", function () { el.style.transition = "transform 0.7s cubic-bezier(0.16,1,0.3,1)"; el.style.transform = ""; });
    });
  }
  D.tilt = tilt;

  /* ---------- Scramble / decode text ---------- */
  var GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&";
  function scramble(el, dur) {
    if (reduce || el.dataset.scrambled) return; el.dataset.scrambled = "1";
    var text = el.textContent, len = text.length, start = null; dur = dur || 800;
    el.classList.add("is-scrambling");
    function frame(ts) {
      if (!start) start = ts;
      var p = clamp((ts - start) / dur, 0, 1), fixed = Math.floor(p * len), out = "";
      for (var i = 0; i < len; i++) {
        var ch = text[i];
        out += (i < fixed || ch === " " || ch === "·") ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      el.textContent = out;
      if (p < 1) requestAnimationFrame(frame); else { el.textContent = text; el.classList.remove("is-scrambling"); }
    }
    requestAnimationFrame(frame);
  }
  D.scramble = scramble;
  function scrambleOnReveal() {
    var els = $$(".eyebrow");
    if (!els.length || reduce || !("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { scramble(en.target, 700); io.unobserve(en.target); } });
    }, { threshold: 0.5 });
    els.forEach(function (e) { io.observe(e); });
  }
  D.scrambleOnReveal = scrambleOnReveal;

  /* ---------- Lightbox (keyboard + swipe) ---------- */
  var LB = { items: [], i: 0, el: null };
  function buildLightbox() {
    var el = document.createElement("div");
    el.className = "lightbox"; el.setAttribute("role", "dialog"); el.setAttribute("aria-modal", "true"); el.setAttribute("aria-label", "Photo viewer");
    el.innerHTML =
      '<div class="lightbox__top"><span id="lbCounter">01 / 01</span><button class="lightbox__close" id="lbClose" aria-label="Close" data-cursor="none"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div>' +
      '<div class="lightbox__stage" id="lbStage"><button class="lightbox__btn lightbox__btn--prev" id="lbPrev" aria-label="Previous" data-cursor="none"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M11 19l-7-7 7-7"/></svg></button><img id="lbImg" alt="" /><button class="lightbox__btn lightbox__btn--next" id="lbNext" aria-label="Next" data-cursor="none"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></button></div>' +
      '<div class="lightbox__cap" id="lbCap"></div>';
    document.body.appendChild(el);
    LB.el = el;
    $("#lbClose").addEventListener("click", close);
    $("#lbPrev").addEventListener("click", function () { go(-1); });
    $("#lbNext").addEventListener("click", function () { go(1); });
    el.addEventListener("click", function (e) { if (e.target === el || e.target.id === "lbStage") close(); });
    document.addEventListener("keydown", function (e) {
      if (!el.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    });
    var sx = 0, sy = 0;
    el.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
    el.addEventListener("touchend", function (e) {
      var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
      else if (dy > 90 && Math.abs(dy) > Math.abs(dx)) close();
    }, { passive: true });
  }
  function show() {
    var it = LB.items[LB.i];
    var img = $("#lbImg");
    img.classList.remove("is-in");
    var pre = new Image();
    pre.onload = function () { img.src = it.src; img.alt = it.cap || ""; requestAnimationFrame(function () { img.classList.add("is-in"); }); };
    pre.src = it.src;
    $("#lbCap").textContent = it.cap || "";
    $("#lbCounter").textContent = String(LB.i + 1).padStart(2, "0") + " / " + String(LB.items.length).padStart(2, "0");
    // preload neighbours
    [1, -1].forEach(function (d) { var n = LB.items[(LB.i + d + LB.items.length) % LB.items.length]; if (n) { var p = new Image(); p.src = n.src; } });
  }
  function go(d) { if (!LB.items.length) return; LB.i = (LB.i + d + LB.items.length) % LB.items.length; show(); }
  function open(items, i) {
    if (!LB.el) buildLightbox();
    LB.items = items; LB.i = i || 0;
    LB.el.classList.add("is-open");
    document.body.classList.add("is-locked");
    $("#dock") && $("#dock").classList.add("is-hidden");
    show();
  }
  function close() {
    if (!LB.el) return;
    LB.el.classList.remove("is-open");
    document.body.classList.remove("is-locked");
    $("#dock") && $("#dock").classList.remove("is-hidden");
  }
  D.lightbox = { open: open, close: close, go: go };

  /* ---------- Footer/common text ---------- */
  function common() {
    var y = $("#year"); if (y) y.textContent = new Date().getFullYear();
    var lic = $("#footerLicence"); if (lic) lic.textContent = co.licence;
    var fc = $("#footerContact");
    if (fc) fc.innerHTML = '<a href="mailto:' + co.email + '">' + co.email + '</a><a href="tel:' + co.phone.replace(/\s+/g, "") + '">' + co.phone + '</a><a href="' + co.instagram + '" target="_blank" rel="noopener">Instagram</a><span class="muted" style="font-size:14px">' + co.address + '</span>';
    var fp = $("#footerProjects");
    if (fp) fp.innerHTML = D.projects.map(function (p) { return '<a href="project.html?p=' + p.id + '">' + p.title + (p.status !== "complete" ? ' <span class="muted">(soon)</span>' : "") + '</a>'; }).join("");
    var mail = $("#ctaMail"); if (mail) mail.href = "mailto:" + co.email + "?subject=New%20build%20enquiry";
  }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    common(); preloader(); cursor(); topbar(); clock(); menu(); progress(); marquee(); reveal(); magnetic(); spotlight(); tilt(); scrambleOnReveal(); dockLamp();
    $$(".menu__links a, .cta__row a, .phero__back").forEach(letterSwap);
    window.addEventListener("resize", (function () { var t; return function () { clearTimeout(t); t = setTimeout(marquee, 250); }; })());
  });
})();
