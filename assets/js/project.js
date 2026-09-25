/* =====================================================================
   INTRICON — project page renderer
   Reads ?p=<id> and builds hero, story, chapters (mosaic + lightbox),
   materials marquee and the "next project" card from projects.js.
   ===================================================================== */
(function () {
  "use strict";
  var D = window.INTRICON, U = D.util, $ = U.$, $$ = U.$$;
  var id = new URLSearchParams(location.search).get("p") || D.projects[0].id;
  var f = D.find(id), p = f.project, next = f.next, prev = f.prev;
  var soon = p.status !== "complete";
  var root = $("#projectRoot");

  document.title = p.title + " — " + D.company.name;

  function esc(s) { return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
  function cover(proj, size) {
    return proj.cover === null
      ? D.placeholder("Photos coming soon", proj.accent, 1600, 1000)
      : D.img(proj, proj.cover, size || "xl");
  }
  var photoCount = p.chapters.reduce(function (n, c) { return n + c.images.length; }, 0);

  /* ---------- hero ---------- */
  var titleLetters = p.title.split("").map(function (ch, i) {
    return '<span style="animation-delay:' + (0.1 + i * 0.045) + 's">' + (ch === " " ? "&nbsp;" : esc(ch)) + '</span>';
  }).join("");
  var hero =
    '<section class="phero" id="overview">' +
      '<div class="phero__img" id="pheroImg"><img src="' + cover(p, "xl") + '" alt="' + esc(p.title) + '" /></div>' +
      '<a class="phero__back" href="index.html#work"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M11 19l-7-7 7-7"/></svg>All work</a>' +
      '<div class="phero__content">' +
        '<div class="phero__tag">' + esc(p.tagline) + '</div>' +
        '<h1 class="display phero__title">' + titleLetters + '</h1>' +
        '<div class="phero__meta">' +
          '<div><span>Type</span><b>' + esc(p.type) + '</b></div>' +
          '<div><span>Location</span><b>' + esc(p.location) + '</b></div>' +
          '<div><span>Completed</span><b>' + esc(soon ? "In progress" : p.year) + '</b></div>' +
          '<div><span>Photos</span><b>' + (soon ? "Coming soon" : photoCount + " images · " + p.chapters.length + " rooms") + '</b></div>' +
        '</div>' +
      '</div>' +
    '</section>';

  /* ---------- intro ---------- */
  var intro =
    '<section class="section"><div class="container pintro">' +
      '<div class="pintro__story">' +
        '<span class="eyebrow" data-reveal>The project</span>' +
        '<div style="margin-top:22px">' + [p.summary].concat(p.story).map(function (para, i) { return '<p data-reveal style="--d:' + (i * 80) + 'ms">' + esc(para) + '</p>'; }).join("") + '</div>' +
      '</div>' +
      '<aside><ul class="facts" data-reveal>' + p.facts.map(function (fa) { return '<li><span>' + esc(fa[0]) + '</span><b>' + esc(fa[1]) + '</b></li>'; }).join("") + '</ul></aside>' +
    '</div></section>';

  /* ---------- chapters ---------- */
  var lbItems = [], k = 0;
  var chapters = '<div id="gallery">' + p.chapters.map(function (c, ci) {
    var tiles = c.images.map(function (im, ii) {
      var span = im.span === "wide" ? " tile--wide" : im.span === "tall" ? " tile--tall" : "";
      var delay = (ii % 4) * 70;
      if (soon || im.n === undefined) {
        var ph = D.placeholder("Photo coming soon", p.accent, im.span === "tall" ? 800 : 1200, im.span === "tall" ? 1200 : 800);
        return '<figure class="tile tile--soon' + span + '" data-reveal style="--d:' + delay + 'ms"><img src="' + ph + '" alt="Placeholder" /></figure>';
      }
      var idx = k++;
      lbItems.push({ src: D.img(p, im.n, "xl"), cap: (im.cap || "") });
      return '<figure class="tile' + span + '" data-lb="' + idx + '" data-cursor="view" data-reveal style="--d:' + delay + 'ms">' +
        '<img src="' + D.img(p, im.n, "md") + '" alt="' + esc(im.cap) + '" loading="lazy" />' +
        '<figcaption>' + esc(im.cap) + '</figcaption></figure>';
    }).join("");
    return '<section class="chapter"><div class="container">' +
      '<div class="chapter__head"><h2 class="display" data-cut><small>' + String(ci + 1).padStart(2, "0") + '</small>' + esc(c.title) + '</h2><p data-reveal style="--d:80ms">' + esc(c.blurb) + '</p></div>' +
      '<div class="mosaic">' + tiles + '</div>' +
    '</div></section>';
  }).join("") + '</div>';

  /* ---------- materials ---------- */
  var materials =
    '<section class="materials" id="materials"><div class="container"><span class="eyebrow" data-reveal>Materials &amp; finishes</span></div>' +
      '<div class="marquee" style="margin-top:22px" aria-hidden="true"><div class="marquee__track" style="--marquee-dur:30s">' +
        p.materials.map(function (m) { return '<span>' + esc(m) + '<i></i></span>'; }).join("") +
      '</div></div></section>';

  /* ---------- next / prev ---------- */
  var nextBlock =
    '<a class="pnext" id="next" href="project.html?p=' + next.id + '" data-cursor="view" data-cursor-label="Open">' +
      '<div class="pnext__img"><img src="' + cover(next, "md") + '" alt="" loading="lazy" /></div>' +
      '<div class="pnext__inner container">' +
        '<span class="eyebrow">Next project</span>' +
        '<h2 class="display pnext__title" data-cut>' + esc(next.title) + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg></h2>' +
        '<p class="pnext__sub">' + esc(next.subtitle) + (next.status === "complete" ? " · " + esc(next.year) : " · Coming soon") + '</p>' +
      '</div>' +
    '</a>' +
    '<div class="container" style="display:flex;justify-content:space-between;gap:16px;padding:28px var(--gutter) 120px;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:var(--fg-2)">' +
      '<a href="project.html?p=' + prev.id + '" style="display:inline-flex;gap:10px;align-items:center">← Previous: ' + esc(prev.short) + '</a>' +
      '<a href="index.html#work">All projects</a>' +
    '</div>';

  root.innerHTML = hero + intro + chapters + materials + nextBlock;

  /* ---------- behaviour ---------- */
  // parallax hero
  var pi = $("#pheroImg");
  if (pi && !U.reduce) {
    window.addEventListener("scroll", function () {
      if (scrollY < innerHeight * 1.2) pi.style.transform = "translate3d(0," + (scrollY * 0.32) + "px,0)";
    }, { passive: true });
  }
  // lightbox
  $$("[data-lb]").forEach(function (t) {
    t.addEventListener("click", function () { D.lightbox.open(lbItems, +t.getAttribute("data-lb")); });
  });
  // marquee sizing for injected track + reveal observers + magnetic
  document.addEventListener("DOMContentLoaded", function () { D.observeReveal(); if (D.magnetic) D.magnetic(); if (D.scrambleOnReveal) D.scrambleOnReveal(); });
  // dock active state
  var dock = $("#dock");
  if (dock) {
    var links = $$("a", dock), current = -1;
    function upd() {
      var y = scrollY + innerHeight * 0.4, active = 1;
      links.forEach(function (a, i) {
        var s = a.getAttribute("data-section") && document.getElementById(a.getAttribute("data-section"));
        if (s && s.getBoundingClientRect().top + scrollY <= y) active = i;
      });
      if (active === current) return; current = active;
      links.forEach(function (a, i) { a.classList.toggle("is-active", i === active); });
      if (D.dockUpdate) D.dockUpdate();
    }
    window.addEventListener("scroll", upd, { passive: true }); upd();
  }
})();
