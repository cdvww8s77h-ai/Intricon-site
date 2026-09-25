/* =====================================================================
   INTRICON — PROJECT DATA
   ---------------------------------------------------------------------
   This is the ONLY file you need to touch to add or edit a job.

   HOW TO ADD A NEW PROJECT
   1. Put optimised photos in  assets/img/<project-id>/xl , /md , /sm
      (xl ≈ 2000px, md ≈ 1200px, sm ≈ 480px on the long edge). Name them
      <project-id>-01.jpg, <project-id>-02.jpg … in the order you like.
   2. Copy one of the PLACEHOLDER entries below, change `status` to
      "complete", fill in the copy, list the photo numbers in `chapters`.
   3. That's it — the homepage index, the horizontal highlights, the
      project page and the next/previous navigation all read this file.

   Any entry with  status: "coming-soon"  renders as a placeholder card
   with generated "photo coming soon" tiles, so the navigation always
   looks complete while you collect photos.
   ===================================================================== */

window.INTRICON = window.INTRICON || {};

window.INTRICON.company = {
  name: "Intricon",
  tagline: "Builders of considered homes.",
  location: "Sydney, NSW",
  timezone: "Australia/Sydney",
  // ↓ Replace with the real details before sharing with clients.
  email: "hello@intricon.com.au",
  phone: "+61 400 000 000",
  address: "Sydney, New South Wales",
  instagram: "https://instagram.com/",
  licence: "Builder's licence No. 000000C",
  // Homepage counters — edit to your real figures.
  stats: [
    { value: 15, suffix: "+", label: "Years building" },
    { value: 60, suffix: "+", label: "Homes delivered" },
    { value: 100, suffix: "%", label: "Owner-supervised" },
    { value: 1, suffix: "", label: "Dedicated site team per job" },
  ],
};

window.INTRICON.projects = [
  /* ------------------------------------------------------------------ */
  {
    id: "beach-st",
    status: "complete",
    title: "25 Beach Street",
    short: "Beach St",
    subtitle: "Waterfront residence",
    location: "Sydney, NSW",
    year: "2025",
    type: "New build",
    cover: 12,            // photo number used for cards, hero and previews
    accent: "#c9a56a",    // brass — pulled from the tapware
    tagline: "Stone, oak and brass, opened to the water.",
    summary:
      "A three-level waterfront home built around one idea: every principal room should finish at the water. Full-height sliders, a curved stone island and a sculpted timber stair carry a calm, coastal palette from the street to the jetty.",
    story: [
      "The brief asked for a home that felt effortless — nothing loud, everything resolved. We answered with a restrained palette of honed stone, pale oak and brushed brass, and put our effort into the details that clients touch every day: the curved waterfall ends of the island, the brass handrail that follows the stair in one continuous sweep, the flush thresholds that let the living room run straight onto the terrace.",
      "Structurally the house is anything but simple. The living level cantilevers toward the water behind a full-width opening, so the glazing had to disappear into the ceiling and the walls. The stair is a curved plaster drum with a porthole window and a solid timber tread stack, set out and built on site by our own carpenters.",
      "Bathrooms are wrapped floor to ceiling in large-format stone tile with backlit mirrors and wall-mounted brass tapware, and the main ensuite places a freestanding bath under a picture window over the bay. Outside, a stone-stepped terrace, an outdoor kitchen and a frameless glass pool fence complete the connection to the water.",
    ],
    facts: [
      ["Type", "New build, three levels"],
      ["Location", "Sydney waterfront"],
      ["Completed", "2025"],
      ["Scope", "Full construction, joinery, stone, landscaping"],
      ["Duration", "18 months"],
      ["Architect", "To be credited"],
    ],
    materials: [
      "Honed stone island",
      "Brushed brass tapware",
      "American oak joinery",
      "Large-format stone tile",
      "Curved plaster stair",
      "Frameless glass balustrade",
      "Sheer curtains",
      "Travertine terrace",
    ],
    highlights: [12, 5, 17, 0, 24, 10, 8, 19],  // home page horizontal strip
    trail: [12, 5, 17, 10, 0, 24, 1, 15, 27, 8, 18, 22, 21, 26],  // hero cursor trail
    chapters: [
      {
        title: "Kitchen",
        blurb:
          "A curved stone island anchors the plan. Pale oak overheads sit in a white joinery frame, and a continuous LED reveal washes the splashback and floats the island off the floor.",
        images: [
          { n: 5, cap: "The kitchen from the living room — island, oak overheads and skylights.", span: "wide" },
          { n: 8, cap: "Curved waterfall end on the island stone." },
          { n: 3, cap: "White joinery, oak overheads and stone splashback." },
          { n: 9, cap: "Island stone flowing into the oak return." },
          { n: 7, cap: "Looking past the island to the water.", span: "tall" },
          { n: 6, cap: "Under-bench lighting floats the island." },
          { n: 4, cap: "Brass mixer against the stone splashback." },
        ],
      },
      {
        title: "Living & views",
        blurb:
          "The whole living level finishes in glass. Sliding panels park inside the walls, sheer curtains soften the light, and the floor runs flush onto the terrace.",
        images: [
          { n: 12, cap: "Living room opening fully to the bay.", span: "wide" },
          { n: 14, cap: "Sheers and blockout curtains on a concealed track." },
          { n: 22, cap: "The brass stair rail meeting the living room." },
          { n: 13, cap: "From the landing, the view runs straight through the house." },
          { n: 10, cap: "Upper landing — pendant, glass balustrade, water.", span: "tall" },
        ],
      },
      {
        title: "The stair",
        blurb:
          "A curved plaster drum with a porthole window, solid timber treads and a single continuous brass handrail — set out and built on site.",
        images: [
          { n: 0, cap: "The stair drum, porthole and brass rail.", span: "tall" },
          { n: 11, cap: "The stair void from above, under the pendant." },
          { n: 25, cap: "The stair seen from the terrace through the sliders." },
        ],
      },
      {
        title: "Bathrooms",
        blurb:
          "Large-format stone tile floor to ceiling, backlit mirrors, wall-mounted brass tapware and a freestanding bath under a window over the water.",
        images: [
          { n: 17, cap: "Main ensuite — freestanding bath and picture window.", span: "wide" },
          { n: 19, cap: "Twin basins with the bay beyond." },
          { n: 18, cap: "Pill-shaped backlit mirrors over the double vanity." },
          { n: 1, cap: "Brass tapware detail." },
          { n: 21, cap: "Round backlit mirror and walk-in shower.", span: "tall" },
          { n: 2, cap: "Shower rail, brass flush plate and stone." },
        ],
      },
      {
        title: "Bedrooms",
        blurb:
          "Quiet rooms with wool carpet, sheer curtains, built-in robes and a study nook, each opening to a balcony over the water.",
        images: [
          { n: 15, cap: "Corner bedroom with balcony and bay view.", span: "wide" },
          { n: 16, cap: "Sliders opening to the balcony." },
          { n: 20, cap: "Built-in robe and study nook." },
        ],
      },
      {
        title: "Outdoor",
        blurb:
          "Stone steps down from the living room, an outdoor kitchen in soft grey joinery and a frameless glass fence to the pool and the water.",
        images: [
          { n: 24, cap: "Terrace, stone steps and outdoor kitchen.", span: "wide" },
          { n: 26, cap: "Outdoor kitchen with stone bench." },
          { n: 23, cap: "Grey joinery, marble bench and cooktop." },
          { n: 27, cap: "Frameless glass fence and the bay.", span: "wide" },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------
     PLACEHOLDERS — duplicate, rename and fill these in as jobs complete.
     ------------------------------------------------------------------ */
  {
    id: "project-two",
    status: "coming-soon",
    title: "Project Two",
    short: "Project Two",
    subtitle: "Knockdown rebuild",
    location: "Location TBC",
    year: "2026",
    type: "New build",
    cover: null,
    accent: "#9fb3a8",
    tagline: "Photos coming soon.",
    summary:
      "Placeholder for the next completed job. Swap this entry for the real project details and drop the photos into assets/img/project-two.",
    story: [
      "This page is a template. Everything you see here — hero, story, facts, materials and gallery chapters — is driven by a single entry in assets/js/projects.js.",
      "Replace the text, list your photo numbers under each chapter, change status to \"complete\", and the placeholder tiles are replaced by your photography automatically.",
    ],
    facts: [
      ["Type", "TBC"],
      ["Location", "TBC"],
      ["Completed", "TBC"],
      ["Scope", "TBC"],
    ],
    materials: ["Material one", "Material two", "Material three", "Material four"],
    highlights: [],
    trail: [],
    chapters: [
      { title: "Exterior", blurb: "Placeholder chapter.", images: [{ span: "wide" }, {}, {}] },
      { title: "Interior", blurb: "Placeholder chapter.", images: [{}, { span: "tall" }, {}, {}] },
    ],
  },
  {
    id: "project-three",
    status: "coming-soon",
    title: "Project Three",
    short: "Project Three",
    subtitle: "Luxury renovation",
    location: "Location TBC",
    year: "2026",
    type: "Renovation",
    cover: null,
    accent: "#b39c86",
    tagline: "Photos coming soon.",
    summary:
      "Placeholder for a renovation or extension. Swap this entry for the real project details and drop the photos into assets/img/project-three.",
    story: [
      "This page is a template. Replace the text, list your photo numbers under each chapter and change status to \"complete\".",
    ],
    facts: [
      ["Type", "TBC"],
      ["Location", "TBC"],
      ["Completed", "TBC"],
      ["Scope", "TBC"],
    ],
    materials: ["Material one", "Material two", "Material three"],
    highlights: [],
    trail: [],
    chapters: [
      { title: "Before & after", blurb: "Placeholder chapter.", images: [{ span: "wide" }, {}, {}] },
      { title: "Details", blurb: "Placeholder chapter.", images: [{}, {}, { span: "tall" }] },
    ],
  },
  {
    id: "project-four",
    status: "coming-soon",
    title: "Project Four",
    short: "Project Four",
    subtitle: "Duplex development",
    location: "Location TBC",
    year: "2027",
    type: "Development",
    cover: null,
    accent: "#8fa0b8",
    tagline: "Photos coming soon.",
    summary:
      "Placeholder for a development or multi-dwelling project. Swap this entry for the real project details and drop the photos into assets/img/project-four.",
    story: [
      "This page is a template. Replace the text, list your photo numbers under each chapter and change status to \"complete\".",
    ],
    facts: [
      ["Type", "TBC"],
      ["Location", "TBC"],
      ["Completed", "TBC"],
      ["Scope", "TBC"],
    ],
    materials: ["Material one", "Material two", "Material three"],
    highlights: [],
    trail: [],
    chapters: [
      { title: "Street", blurb: "Placeholder chapter.", images: [{ span: "wide" }, {}] },
      { title: "Living", blurb: "Placeholder chapter.", images: [{}, {}, {}] },
    ],
  },
];

/* Helper: absolute-ish path to an image. `size` is "xl" | "md" | "sm". */
window.INTRICON.img = function (project, n, size) {
  var num = String(n).padStart(2, "0");
  var base = (window.INTRICON.base || "") + "assets/img/" + project.id + "/" + (size || "md") + "/";
  return base + project.id + "-" + num + ".jpg";
};

/* Helper: generated SVG placeholder tile (data URI) for coming-soon jobs. */
window.INTRICON.placeholder = function (label, accent, w, h) {
  w = w || 1200; h = h || 800;
  var c = accent || "#9fb3a8";
  var svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '">' +
    '<defs><pattern id="g" width="48" height="48" patternUnits="userSpaceOnUse">' +
    '<path d="M48 0H0V48" fill="none" stroke="' + c + '" stroke-opacity="0.18" stroke-width="1"/></pattern>' +
    '<radialGradient id="r" cx="50%" cy="50%" r="70%"><stop offset="0" stop-color="' + c + '" stop-opacity="0.22"/><stop offset="1" stop-color="' + c + '" stop-opacity="0"/></radialGradient></defs>' +
    '<rect width="100%" height="100%" fill="#141416"/>' +
    '<rect width="100%" height="100%" fill="url(#r)"/>' +
    '<rect width="100%" height="100%" fill="url(#g)"/>' +
    '<rect x="24" y="24" width="' + (w - 48) + '" height="' + (h - 48) + '" fill="none" stroke="' + c + '" stroke-opacity="0.45" stroke-width="2" stroke-dasharray="10 10" rx="8"/>' +
    '<text x="50%" y="50%" font-family="Inter, Helvetica, Arial, sans-serif" font-size="' + Math.round(w / 52) + '" fill="#f4f1ec" fill-opacity="0.8" text-anchor="middle" dominant-baseline="middle" letter-spacing="4">' + (label || "PHOTO COMING SOON").toUpperCase() + '</text>' +
    '</svg>';
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
};

/* Helper: find a project by id and neighbours for next/prev navigation. */
window.INTRICON.find = function (id) {
  var list = window.INTRICON.projects;
  var i = list.findIndex(function (p) { return p.id === id; });
  if (i < 0) i = 0;
  return {
    project: list[i],
    index: i,
    next: list[(i + 1) % list.length],
    prev: list[(i - 1 + list.length) % list.length],
  };
};
