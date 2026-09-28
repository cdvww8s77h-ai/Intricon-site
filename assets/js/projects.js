/* =====================================================================
   INTRICON — COMPANY + PROJECT DATA
   ---------------------------------------------------------------------
   This is the ONLY file you need to touch to add or edit a job.

   HOW TO ADD A NEW PROJECT
   1. Put optimised photos in  assets/img/<project-id>/xl , /md , /sm
      (xl ≈ 2000px, md ≈ 1200px, sm ≈ 480px on the long edge), named
      <project-id>-01.jpg, <project-id>-02.jpg …  (README.md has the
      one-line command that does this, rotates phone photos correctly
      and strips GPS data.)
   2. Copy any entry below, change the id/title/copy, and list the photo
      numbers under `chapters`. Portrait photos become tall tiles
      automatically (see dims.js); add span:"wide" to make a landscape
      photo two columns wide.
   3. Save. The homepage index, the horizontal strip, the overlay menu,
      the project page and next/previous links all read this file.

   An entry with  status: "coming-soon"  renders as a placeholder with
   generated "photo coming soon" tiles.
   ===================================================================== */

window.INTRICON = window.INTRICON || {};

window.INTRICON.company = {
  name: "Intricon",
  legalName: "Intricon Pty Ltd",
  owner: "Tony Lahoud",
  ownerTitle: "Founder & Director",
  tagline: "Builders of considered homes.",
  location: "Sydney, NSW",
  timezone: "Australia/Sydney",
  email: "tony@intricon.com.au",
  phone: "0414 307 707",
  phoneIntl: "+61414307707",
  address: "Sydney, New South Wales",
  abn: "51 130 957 176",
  licence: "206693C",
  licenceLabel: "NSW Builder's Licence No. 206693C",
  established: 2008,
  establishedLabel: "May 2008",
  instagram: "",   // add a URL to show an Instagram link in the footer
};

window.INTRICON.projects = [
  /* ------------------------------------------------------------------ */
  {
    id: "tennyson-pt",
    status: "complete",
    title: "25 Tennyson Point",
    short: "Tennyson Point",
    subtitle: "Waterfront residence",
    location: "Tennyson Point, NSW",
    type: "New build",
    cover: 12, thumb: 10,
    accent: "#c9a56a",
    tagline: "Stone, oak and brass, opened to the water.",
    summary:
      "A three-level waterfront home built around one idea: every principal room should finish at the water. Full-height sliders, a curved stone island and a sculpted timber stair carry a calm, coastal palette from the street to the jetty.",
    story: [
      "The brief asked for a home that felt effortless — nothing loud, everything resolved. We answered with a restrained palette of honed stone, pale oak and brushed brass, and put our effort into the details that clients touch every day: the curved waterfall ends of the island, the brass handrail that follows the stair in one continuous sweep, the flush thresholds that let the living room run straight onto the terrace.",
      "Structurally the house is anything but simple. The living level cantilevers toward the river behind a full-width opening, so the glazing had to disappear into the ceiling and the walls. The stair is a curved plaster drum with a porthole window and a solid timber tread stack, set out and built on site by our own carpenters.",
      "Bathrooms are wrapped floor to ceiling in large-format stone tile with backlit mirrors and wall-mounted brass tapware, and the main ensuite places a freestanding bath under a picture window over the water. Outside, a stone-stepped terrace, an outdoor kitchen and a frameless glass pool fence complete the connection to the river.",
    ],
    facts: [
      ["Type", "New build, three levels"],
      ["Location", "Tennyson Point, on the Parramatta River"],
      ["Scope", "Full construction, joinery, stone, landscaping"],
      ["Photography", "Professional, at completion"],
    ],
    materials: ["Honed stone island", "Brushed brass tapware", "American oak joinery", "Large-format stone tile", "Curved plaster stair", "Frameless glass balustrade", "Sheer curtains", "Travertine terrace"],
    trail: [12, 5, 17, 10, 0, 24],
    chapters: [
      { title: "Kitchen", blurb: "A curved stone island anchors the plan. Pale oak overheads sit in a white joinery frame, and a continuous LED reveal washes the splashback and floats the island off the floor.",
        images: [
          { n: 5, cap: "The kitchen from the living room — island, oak overheads and skylights.", span: "wide" },
          { n: 8, cap: "Curved waterfall end on the island stone." },
          { n: 3, cap: "White joinery, oak overheads and stone splashback." },
          { n: 9, cap: "Island stone flowing into the oak return." },
          { n: 7, cap: "Looking past the island to the water." },
          { n: 6, cap: "Under-bench lighting floats the island." },
          { n: 4, cap: "Brass mixer against the stone splashback." },
        ] },
      { title: "Living & views", blurb: "The whole living level finishes in glass. Sliding panels park inside the walls, sheer curtains soften the light, and the floor runs flush onto the terrace.",
        images: [
          { n: 12, cap: "Living room opening fully to the river.", span: "wide" },
          { n: 14, cap: "Sheers and blockout curtains on a concealed track." },
          { n: 22, cap: "The brass stair rail meeting the living room." },
          { n: 13, cap: "From the landing, the view runs straight through the house." },
          { n: 10, cap: "Upper landing — pendant, glass balustrade, water." },
        ] },
      { title: "The stair", blurb: "A curved plaster drum with a porthole window, solid timber treads and a single continuous brass handrail — set out and built on site.",
        images: [
          { n: 0, cap: "The stair drum, porthole and brass rail.", span: "wide" },
          { n: 11, cap: "The stair void from above, under the pendant." },
          { n: 25, cap: "The stair seen from the terrace through the sliders." },
        ] },
      { title: "Bathrooms", blurb: "Large-format stone tile floor to ceiling, backlit mirrors, wall-mounted brass tapware and a freestanding bath under a window over the water.",
        images: [
          { n: 17, cap: "Main ensuite — freestanding bath and picture window.", span: "wide" },
          { n: 19, cap: "Twin basins with the river beyond." },
          { n: 18, cap: "Pill-shaped backlit mirrors over the double vanity." },
          { n: 1, cap: "Brass tapware detail." },
          { n: 21, cap: "Round backlit mirror and walk-in shower." },
          { n: 2, cap: "Shower rail, brass flush plate and stone." },
        ] },
      { title: "Bedrooms", blurb: "Quiet rooms with wool carpet, sheer curtains, built-in robes and a study nook, each opening to a balcony over the water.",
        images: [
          { n: 15, cap: "Corner bedroom with balcony and river view.", span: "wide" },
          { n: 16, cap: "Sliders opening to the balcony." },
          { n: 20, cap: "Built-in robe and study nook." },
        ] },
      { title: "Outdoor", blurb: "Stone steps down from the living room, an outdoor kitchen in soft grey joinery and a frameless glass fence to the pool and the water.",
        images: [
          { n: 24, cap: "Terrace, stone steps and outdoor kitchen.", span: "wide" },
          { n: 26, cap: "Outdoor kitchen with stone bench." },
          { n: 23, cap: "Grey joinery, marble bench and cooktop." },
          { n: 27, cap: "Frameless glass fence and the river.", span: "wide" },
        ] },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "cronulla",
    status: "complete",
    title: "Cronulla",
    short: "Cronulla",
    subtitle: "Two waterfront homes",
    location: "Cronulla, NSW",
    type: "New build · two dwellings",
    cover: 64, thumb: 4,
    accent: "#8fb3c4",
    tagline: "A weatherboard beach house and its contemporary neighbour, side by side on the water.",
    summary:
      "Two new homes built on neighbouring lots at the water's edge: a classic weatherboard beach house with a double-height living room and a stacked-stone fireplace, and beside it the crisp contemporary residence at 23A, with its own pool courtyard and a floating oak stair.",
    story: [
      "The beach house is built the way beach houses should be: white weatherboard, deep verandahs on both levels and a lawn that runs straight down to the sand. Inside, the living room rises two storeys under a raked, beamed ceiling, with a full-height stone fireplace and a wall of glass that folds back to the bay.",
      "Skylights follow the upstairs hallway, black-framed steel doors open onto the entry, and the joinery runs from a marble-topped kitchen with a mirrored splashback to a study with arched shelving and a fold-down wall bed in the guest room.",
      "Next door at 23A the language changes: flat roofs, a planted roof over the garage, a curved plaster wall and a floating oak stair behind frameless glass. The kitchen pairs a stone-clad rangehood with oak and pale stone, the upstairs living room looks over the rooftops to the water, and the lower bedrooms open onto a sheltered pool courtyard.",
    ],
    facts: [
      ["Type", "Two new homes on neighbouring lots"],
      ["Location", "Cronulla waterfront"],
      ["Scope", "Construction, joinery, pools, landscaping"],
      ["Photography", "Professional at completion, plus our own site photos"],
    ],
    materials: ["White weatherboard", "Stacked-stone fireplace", "Oak flooring", "Black steel doors", "Honed stone benches", "Frameless glass", "Wool carpet", "Skylights"],
    trail: [64, 4, 66, 9],
    chapters: [
      { title: "The beach house", blurb: "White weatherboard, deep verandahs and a lawn to the sand. Photographed at completion and on site.",
        images: [
          { n: 4, cap: "The beach house from the lawn, verandahs on both levels.", span: "wide" },
          { n: 34, cap: "The waterfront elevation and its planted terrace." },
          { n: 36, cap: "Weatherboard, balustrades and a sandstone-edged garden bed." },
          { n: 37, cap: "Palms frame the house from the beach." },
          { n: 38, cap: "The rear elevation at midday." },
          { n: 35, cap: "Garden beds settling in beside the entry." },
          { n: 39, cap: "Straight off the lawn and onto the sand.", span: "wide" },
          { n: 63, cap: "Black steel entry doors under the verandah.", span: "wide" },
          { n: 62, cap: "Stone-paved side path through new planting." },
          { n: 12, cap: "Caged lanterns on the weatherboard." },
          { n: 13, cap: "Exterior lantern detail." },
        ] },
      { title: "Double-height living", blurb: "A raked, beamed ceiling, a stacked-stone fireplace and glass that folds back to the water.",
        images: [
          { n: 64, cap: "The living room, two storeys high, opening to the bay.", span: "wide" },
          { n: 29, cap: "Pendants hang the full height of the void." },
          { n: 40, cap: "The fireplace and the water, seen from the landing." },
          { n: 5, cap: "The kitchen island with the fireplace beyond.", span: "wide" },
          { n: 1, cap: "Marble island and a mirrored splashback catching the bay.", span: "wide" },
          { n: 2, cap: "The upstairs verandah, looking down the bay.", span: "wide" },
          { n: 66, cap: "Outdoor kitchen on the terrace, straight onto the sand.", span: "wide" },
          { n: 11, cap: "On site: the stone chimney taking shape before the glazing went in." },
        ] },
      { title: "Halls, skylights & study", blurb: "Daylight from above along the upstairs hall, and quiet working rooms tucked into the plan.",
        images: [
          { n: 30, cap: "Skylights step down the hallway to the steel door." },
          { n: 31, cap: "VJ-panelled balustrade under the skylights." },
          { n: 33, cap: "The raked ceiling running toward the verandah." },
          { n: 41, cap: "Skylights seen from the top of the stair." },
          { n: 65, cap: "The study, with a desk that runs wall to wall.", span: "wide" },
          { n: 42, cap: "Arched shelving in the study." },
          { n: 43, cap: "Study desk under a high window." },
          { n: 44, cap: "Oak shelves and built-in robes." },
          { n: 3, cap: "Guest room with a fold-down wall bed and library shelving.", span: "wide" },
          { n: 45, cap: "The rumpus room opening to the alfresco." },
          { n: 46, cap: "VJ-panelled media wall." },
        ] },
      { title: "23A, next door", blurb: "A contemporary companion on the adjoining lot: flat roofs, a planted garage roof, a curved wall and a floating stair.",
        images: [
          { n: 10, cap: "The garage at 23A, planted roof above.", span: "wide" },
          { n: 6, cap: "The pool courtyard from the garden.", span: "wide" },
          { n: 7, cap: "Alfresco with barbecue, looking across the lawn.", span: "wide" },
          { n: 61, cap: "The rumpus room opening onto the courtyard and pool." },
          { n: 8, cap: "Upstairs living with a fireplace and a view over the rooftops to the water.", span: "wide" },
          { n: 51, cap: "Living room and joinery, sliders to the terrace." },
          { n: 55, cap: "Media wall with a floating stone bench." },
          { n: 9, cap: "The floating oak stair behind frameless glass." },
          { n: 49, cap: "Glass balustrade along the hall to the kitchen." },
          { n: 50, cap: "The stair from below." },
          { n: 68, cap: "Kitchen: oak, pale stone and a stone-clad rangehood.", span: "wide" },
          { n: 69, cap: "Island bench with the stone canopy behind.", span: "wide" },
          { n: 47, cap: "The island from the living side." },
          { n: 52, cap: "The kitchen under its skylight, stair beyond." },
          { n: 53, cap: "Curved plaster wall at the foot of the stair." },
          { n: 48, cap: "Full-height window slot beside the pantry door." },
          { n: 15, cap: "Oak treads on the lower stair." },
          { n: 16, cap: "The lower stair, lit from the landing." },
          { n: 26, cap: "Lower-level room with a courtyard window." },
          { n: 27, cap: "Oak floors throughout the lower level." },
          { n: 28, cap: "Bulkhead and window to the courtyard." },
          { n: 54, cap: "Sheer curtains and a window over the pool." },
          { n: 56, cap: "Sheers pulled back to the bay." },
          { n: 57, cap: "Blockout blind over the courtyard window." },
          { n: 58, cap: "Carpeted bedroom with a corner window." },
          { n: 59, cap: "Bedroom with sheer curtains." },
          { n: 60, cap: "Main bedroom opening to the terrace." },
        ] },
      { title: "Bedrooms, bathrooms & laundry", blurb: "Large-format stone, wall-hung vanities and mirrored cabinets; wool carpet in the bedrooms.",
        images: [
          { n: 67, cap: "Freestanding bath under plantation shutters, arched mirrors over the vanity.", span: "wide" },
          { n: 14, cap: "Built-in robes with an open dresser." },
          { n: 17, cap: "Bedroom with a wall of robes.", span: "wide" },
          { n: 18, cap: "Attic-style bedroom with a garden window." },
          { n: 19, cap: "Wall-hung vanity and mirrored cabinet." },
          { n: 20, cap: "Walk-in shower with rain head." },
          { n: 21, cap: "Built-in bath in grey stone." },
          { n: 22, cap: "The bath, wall-mounted spouts." },
          { n: 23, cap: "Vanity with open shelving." },
          { n: 24, cap: "Vanity and bath in the family bathroom." },
          { n: 32, cap: "Shower room off the upstairs hall." },
          { n: 25, cap: "Laundry with overhead cupboards and a drying rail." },
        ] },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "bellevue-hill",
    status: "complete",
    title: "Bellevue Hill",
    short: "Bellevue Hill",
    subtitle: "Period home renovation",
    location: "Bellevue Hill, NSW",
    type: "Renovation & restoration",
    cover: 15, thumb: 14,
    accent: "#b39c86",
    tagline: "A grand old house, rebuilt from the inside out.",
    summary:
      "A whole-of-house renovation of a two-storey period home: a new passenger lift, a sweeping stair with a wrought-iron balustrade, dark-stained timber floors, a navy-and-marble kitchen with a butler's pantry, and a sandstone pool terrace with a view across the harbour.",
    story: [
      "The brief was to keep everything that made the house special — the arched front door, the deep cornices, the panelled doors — and quietly rebuild everything behind it. New services, new floors, new joinery, and a passenger lift threaded through the levels without touching the proportions of the rooms.",
      "The stair is the centrepiece: a curved flight in dark-stained timber with a hand-forged balustrade, lit by a leadlight window on the landing. The kitchen pairs a navy island with white shaker joinery, a marble splashback and a canopy rangehood, with a full butler's pantry and a laundry behind it.",
      "Outside, the pool was cut into the sandstone with a curved coping, a timber privacy screen and a pergola, and a frameless glass fence keeps the view over the roof to the harbour and the city.",
    ],
    facts: [
      ["Type", "Whole-of-house renovation"],
      ["Location", "Bellevue Hill"],
      ["Scope", "Structure, lift, joinery, bathrooms, pool & landscaping"],
      ["Photography", "Our own, during the final fit-off"],
    ],
    materials: ["Dark-stained timber floors", "Wrought-iron balustrade", "Navy shaker joinery", "Marble benchtops", "Patterned floor tile", "Sandstone coping", "Timber privacy screen", "Frameless glass"],
    trail: [14, 20, 16],
    chapters: [
      { title: "Entry & stair", blurb: "Arched doors, deep cornices and a new curved stair with a hand-forged balustrade.",
        images: [
          { n: 12, cap: "The arched entry, looking out to the garden." },
          { n: 13, cap: "The stair from the front room, dark timber on white." },
          { n: 14, cap: "The curved flight and its wrought-iron balustrade, lit from the landing." },
          { n: 3, cap: "Upper landing: balustrade, panelled doors and the new lift." },
          { n: 11, cap: "Panelled doors and stepped cornices in the hall." },
          { n: 2, cap: "A traditional four-panel door with new hardware." },
        ] },
      { title: "Kitchen, pantry & laundry", blurb: "Navy island, white shaker joinery, marble and a canopy rangehood, with the working rooms behind.",
        images: [
          { n: 16, cap: "The kitchen: navy island, marble and a canopy rangehood." },
          { n: 18, cap: "The island bench with an integrated wine fridge." },
          { n: 19, cap: "The butler's pantry, shelved to the ceiling." },
          { n: 8, cap: "Secondary kitchen with a marble benchtop and subway tile." },
          { n: 17, cap: "Laundry with a view to the garden." },
          { n: 9, cap: "French door from the kitchen to the side terrace." },
        ] },
      { title: "Living & bedrooms", blurb: "Fireplace, ceiling fans and a wall of built-in robes; the floors refinished in a dark stain throughout.",
        images: [
          { n: 15, cap: "The living room and its fireplace, through to the kitchen.", span: "wide" },
          { n: 10, cap: "Bedroom with ceiling fan and restored cornices." },
          { n: 7, cap: "A full wall of built-in robes." },
        ] },
      { title: "Bathrooms & lift", blurb: "Patterned floor tiles, textured wall tile and a frosted-glass lift door on a hex-mosaic floor.",
        images: [
          { n: 4, cap: "Family bathroom with patterned floor tile and a wall-hung vanity." },
          { n: 5, cap: "Bathroom with a high window and textured wall tile." },
          { n: 6, cap: "Looking into the bathroom from the hall." },
          { n: 1, cap: "The lift door: frosted glass on a hex-mosaic floor." },
        ] },
      { title: "Pool & garden", blurb: "Cut into the sandstone: a curved pool with a timber screen, a pergola and a harbour view.",
        images: [
          { n: 20, cap: "Pergola, timber screen and glass fence above the pool." },
          { n: 21, cap: "Over the roof to the harbour and the city." },
          { n: 22, cap: "Sandstone steps up to the pergola." },
          { n: 23, cap: "The pool, the pergola and the cut sandstone face." },
          { n: 24, cap: "Pool and sandstone from the deck." },
          { n: 25, cap: "The natural sandstone wall behind the pool." },
          { n: 26, cap: "Frameless glass fence around the pool." },
        ] },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "greenacre",
    status: "complete",
    title: "Greenacre",
    short: "Greenacre",
    subtitle: "Luxury residence",
    location: "Greenacre, NSW",
    type: "New build",
    cover: 1, thumb: 2,
    accent: "#c9b08a",
    tagline: "A stair worth building a house around.",
    summary:
      "A grand two-storey rendered home with wrought-iron balconies and a terracotta roof, built around a sweeping marble stair with a hand-forged balustrade and a crystal chandelier in the void.",
    story: [
      "Some clients want a house that makes an entrance. This one does it with a curved stair in marble, a wrought-iron balustrade that runs unbroken from the ground floor to the gallery, and a chandelier hung in the double-height void above.",
      "The exterior is rendered and detailed in the same spirit: iron balconies, arched openings and a terracotta roof behind a walled, hedged front garden with an iron gate.",
    ],
    facts: [
      ["Type", "New build, two storeys"],
      ["Location", "Greenacre"],
      ["Scope", "Full construction & finish"],
    ],
    materials: ["Marble stair treads", "Hand-forged balustrade", "Wainscot panelling", "Rendered masonry", "Terracotta roof tile", "Crystal chandelier"],
    trail: [2, 1],
    chapters: [
      { title: "Street", blurb: "Render, iron balconies and terracotta behind a hedged front wall.",
        images: [
          { n: 1, cap: "The house behind its hedged front wall and iron gate.", span: "wide" },
        ] },
      { title: "The stair", blurb: "A curved marble flight with a hand-forged balustrade and a chandelier in the void.",
        images: [
          { n: 3, cap: "The sweep of the stair from the entry, dining room beyond." },
          { n: 2, cap: "Looking up through the void to the chandelier." },
          { n: 4, cap: "The gallery landing and its balustrade from above." },
        ] },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "picnic-point",
    status: "complete",
    title: "Picnic Point",
    short: "Picnic Point",
    subtitle: "Duplex pair",
    location: "Picnic Point, NSW",
    type: "Dual occupancy",
    cover: 35, thumb: 38,
    accent: "#9aa4ad",
    tagline: "Monochrome inside, brick and battens out.",
    summary:
      "A mirrored duplex pair in grey brick and white render, with vertical batten screens on the balconies, a glass-balustrade stair behind a black timber screen, and black-and-white kitchens with stone islands and pendant lighting.",
    story: [
      "Two homes, mirrored around a party wall, each with a garage, a sheltered entry and a balcony behind a vertical batten screen. The palette outside is grey brick, white render and black window frames; inside it flips to black joinery, white stone and pale timber.",
      "The stair is the moment: oak treads, frameless glass and a black timber-batten screen that reads from the front door. A geometric pendant hangs in the double-height window beside it, visible from the street at night.",
      "Both homes have a monochrome kitchen with a stone island, black tapware and three glass pendants, an alfresco with steps down to a fenced lawn, and a garage with an epoxy floor.",
    ],
    facts: [
      ["Type", "Duplex, two dwellings"],
      ["Location", "Picnic Point"],
      ["Scope", "Full construction & landscaping"],
      ["Photography", "Professional at completion, plus our own site photos"],
    ],
    materials: ["Grey face brick", "White render", "Vertical batten screens", "Black joinery", "White stone benchtops", "Oak treads", "Frameless glass", "Epoxy garage floor"],
    trail: [35, 33, 37],
    chapters: [
      { title: "Street", blurb: "Grey brick, white render and batten screens on the balconies; the pair reads as one composition.",
        images: [
          { n: 35, cap: "The pair from the street at completion.", span: "wide" },
          { n: 31, cap: "Twin garages under the balconies.", span: "wide" },
          { n: 38, cap: "Looking up at the batten screen and the pendant window." },
          { n: 34, cap: "Brick, render and the entry under cover." },
          { n: 27, cap: "The pair before landscaping.", span: "wide" },
          { n: 28, cap: "One entry: garage, front door and balcony above." },
          { n: 8, cap: "Dusk at the front door." },
          { n: 11, cap: "Both driveways poured, fences up.", span: "wide" },
          { n: 4, cap: "The rear elevation over the new lawn.", span: "wide" },
        ] },
      { title: "Kitchen & living", blurb: "Black joinery, white stone and pale timber; three glass pendants over every island.",
        images: [
          { n: 33, cap: "Open-plan living and kitchen, the batten screen beyond.", span: "wide" },
          { n: 6, cap: "The island and pendants, garden beyond." },
          { n: 5, cap: "Black tapware on the white stone island." },
          { n: 15, cap: "Kitchen from the living room." },
          { n: 17, cap: "Sliding doors and roller blinds to the alfresco.", span: "wide" },
          { n: 18, cap: "The kitchen wall, oven tower and window splashback.", span: "wide" },
          { n: 21, cap: "Pendants lit at dusk." },
          { n: 22, cap: "The kitchen at night." },
          { n: 23, cap: "Under-cabinet lighting on the splashback.", span: "wide" },
          { n: 24, cap: "Island, pendants and the window splashback.", span: "wide" },
          { n: 25, cap: "The mirrored kitchen in the second home.", span: "wide" },
          { n: 10, cap: "Living room from the stair landing." },
          { n: 26, cap: "The stair and batten screen from the living room." },
          { n: 16, cap: "Smoked-glass pendant detail." },
        ] },
      { title: "Stair & void", blurb: "Oak treads, frameless glass and a black batten screen, with a geometric pendant in the double-height window.",
        images: [
          { n: 12, cap: "The stair behind its batten screen." },
          { n: 13, cap: "Battens, glass and oak." },
          { n: 29, cap: "Looking down the stair: black handrail, oak treads." },
          { n: 30, cap: "The handrail wrapping the landing." },
          { n: 9, cap: "Glass balustrade and oak treads." },
          { n: 7, cap: "The pendant in the void, from below." },
          { n: 14, cap: "The pendant window from outside." },
          { n: 20, cap: "The same window at dusk.", span: "wide" },
          { n: 37, cap: "Hall, pendant window and the front door.", span: "wide" },
        ] },
      { title: "Bedrooms, outdoors & garage", blurb: "Bedrooms with balconies, an alfresco with steps to the lawn, and an epoxy-floored garage.",
        images: [
          { n: 32, cap: "Main bedroom with balcony and ensuite.", span: "wide" },
          { n: 36, cap: "Alfresco steps down to the garden." },
          { n: 1, cap: "The rear lawn, fenced and planted." },
          { n: 2, cap: "Both yards from the alfresco.", span: "wide" },
          { n: 3, cap: "Side garden with a stepping path." },
          { n: 19, cap: "Epoxy-floored garage.", span: "wide" },
        ] },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "georges-hall",
    status: "complete",
    title: "Georges Hall",
    short: "Georges Hall",
    subtitle: "Duplex pair",
    location: "Georges Hall, NSW",
    type: "Dual occupancy",
    cover: 1, thumb: 8,
    accent: "#c4a484",
    tagline: "Two family homes on one block, built to a high finish.",
    summary:
      "A pair of two-storey duplex homes in face brick with rendered bands, wrought-iron balconies, a timber-batten feature wall on the stair, marble-look tiles and white kitchens with marble splashbacks.",
    story: [
      "Duplexes are where a builder's discipline shows: two homes, one program, and every trade working twice. At Georges Hall we kept the detailing consistent across both — face brick with rendered bands, powder-coated balustrades, and a paved forecourt to each garage.",
      "Inside, the kitchens run along one wall with a marble splashback and an island, the stairs carry a wrought-iron balustrade against marble-look tile, and a wall of timber battens turns the stair void into a feature.",
    ],
    facts: [
      ["Type", "Duplex, two dwellings"],
      ["Location", "Georges Hall"],
      ["Scope", "Full construction & fit-out"],
    ],
    materials: ["Face brick", "Wrought-iron balustrade", "Marble splashback", "Marble-look porcelain", "Timber battens", "Frameless shower screens"],
    trail: [8, 1],
    chapters: [
      { title: "Street", blurb: "Face brick, rendered bands and wrought-iron balconies over the garages.",
        images: [
          { n: 1, cap: "One of the pair from the street: brick, render and an iron balcony.", span: "wide" },
          { n: 4, cap: "Entry, garage and balcony above." },
          { n: 2, cap: "The pair from the driveway." },
          { n: 3, cap: "Garage forecourt and timber-look front door." },
        ] },
      { title: "Inside", blurb: "White kitchens with marble splashbacks, marble-look tile and a timber-batten wall on the stair.",
        images: [
          { n: 6, cap: "Kitchen with island, marble splashback and a wall of tall cupboards.", span: "wide" },
          { n: 5, cap: "The open-plan living, kitchen and balcony door.", span: "wide" },
          { n: 8, cap: "Wrought-iron stair balustrade beside the timber-batten wall.", span: "wide" },
          { n: 7, cap: "Balustrade detail on the marble-look stair." },
          { n: 9, cap: "Bathroom with a frameless shower screen." },
        ] },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "milperra",
    status: "complete",
    title: "Milperra",
    short: "Milperra",
    subtitle: "Duplex pair",
    location: "Milperra, NSW",
    type: "Dual occupancy",
    cover: 1, thumb: 2,
    accent: "#a8564a",
    tagline: "Dark brick, charcoal render and a red front door.",
    summary:
      "A contemporary duplex pair in dark brick and charcoal render, with timber-look garage doors, red entry doors and a stepping-stone path through white pebble gardens.",
    story: [
      "Where Georges Hall is traditional, Milperra is graphic: two boxes in dark brick and render, each with a timber-look garage door and a single red front door for a hit of colour. Both dwellings share the same proportions, with the entries set back under the upper floor for shelter.",
    ],
    facts: [
      ["Type", "Duplex, two dwellings"],
      ["Location", "Milperra"],
      ["Scope", "Full construction & fit-out"],
    ],
    materials: ["Dark face brick", "Charcoal render", "Timber-look garage doors", "Red entry doors", "White pebble gardens"],
    trail: [1],
    chapters: [
      { title: "Street", blurb: "Dark brick and charcoal render, timber-look garage doors and a red door for each home.",
        images: [
          { n: 1, cap: "The pair at completion, side by side.", span: "wide" },
          { n: 2, cap: "One entry: red door, timber-look garage and a stepping-stone path." },
          { n: 3, cap: "The second dwelling from the street." },
        ] },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "yagoona",
    status: "complete",
    title: "Yagoona",
    short: "Yagoona",
    subtitle: "Townhouses",
    location: "Yagoona, NSW",
    type: "Multi-dwelling",
    cover: 5, thumb: 4,
    accent: "#7f8a94",
    tagline: "Charcoal cladding, dark brick and a row of letterboxes.",
    summary:
      "A row of contemporary two-storey townhouses in dark brick and charcoal cladding, with black-framed windows, rendered letterbox pillars and steel-and-glass entries.",
    story: [
      "The Yagoona townhouses take a developer brief and give it an architectural finish: a dark brick base, charcoal fibre-cement cladding above, black aluminium windows and a rendered front fence with a letterbox pillar for each home. Entries step up through a black-framed glass door to an open-plan living room.",
    ],
    facts: [
      ["Type", "Townhouse development"],
      ["Location", "Yagoona"],
      ["Scope", "Full construction"],
    ],
    materials: ["Dark face brick", "Charcoal cladding", "Black aluminium windows", "Rendered fence", "Glass balustrades"],
    trail: [5, 4],
    chapters: [
      { title: "Street", blurb: "Dark brick, charcoal cladding and black frames; a letterbox pillar for every home.",
        images: [
          { n: 5, cap: "The row from the street, with its rendered fence and pillars.", span: "wide" },
          { n: 4, cap: "Number 9A: brick base, cladding above.", span: "wide" },
          { n: 1, cap: "The townhouses along the street, tree retained.", span: "wide" },
          { n: 6, cap: "A single townhouse from the footpath." },
          { n: 3, cap: "The letterbox pillars down the front fence." },
          { n: 2, cap: "Black-framed glass entry, steps and balustrade." },
        ] },
      { title: "Materials", blurb: "Awning windows in the cladding, black frames set into dark brick.",
        images: [
          { n: 7, cap: "Awning windows in the charcoal cladding." },
          { n: 8, cap: "Cladding meeting the brick base." },
          { n: 9, cap: "The eaves line over the brick." },
        ] },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "st-marys",
    status: "complete",
    title: "St Marys",
    short: "St Marys",
    subtitle: "Townhouse development",
    location: "St Marys, NSW",
    type: "Multi-dwelling",
    cover: 13, thumb: 1,
    accent: "#a67c5b",
    tagline: "A row of townhouses, built as one job.",
    summary:
      "A multi-dwelling development of two-storey townhouses in brown face brick and cream cladding along a shared driveway, each with its own garage, entry porch and private yard.",
    story: [
      "Developments are about repetition done well: the same brick, the same porch, the same window set out on every dwelling, so the row reads as a single piece of streetscape. At St Marys the townhouses step down a shared driveway, garages tucked under the upper floor and entries sheltered by a flat-roofed porch.",
      "Inside, each home has a white kitchen with a stone bench and stainless appliances, tiled living areas opening to a yard, and carpeted bedrooms upstairs.",
    ],
    facts: [
      ["Type", "Townhouse development"],
      ["Location", "St Marys"],
      ["Scope", "Full construction, driveway & services"],
    ],
    materials: ["Brown face brick", "Cream cladding", "Stone benchtops", "Porcelain floor tile", "Exposed-aggregate driveway"],
    trail: [1],
    chapters: [
      { title: "The development", blurb: "Two-storey townhouses along a shared driveway, garages under and porches out front.",
        images: [
          { n: 1, cap: "Down the driveway between the two rows." },
          { n: 9, cap: "The townhouses stepping down the drive." },
          { n: 11, cap: "Porches and garages along the row." },
          { n: 12, cap: "Garage doors and drainage grates on the driveway." },
          { n: 14, cap: "The row from the far end." },
          { n: 16, cap: "Looking back up the driveway." },
          { n: 2, cap: "The street-front townhouses at handover, fencing still up.", span: "wide" },
          { n: 3, cap: "Both blocks from the street.", span: "wide" },
          { n: 4, cap: "Corner dwelling under the street trees.", span: "wide" },
        ] },
      { title: "Inside & details", blurb: "White kitchens, stone benches and tiled living rooms opening to private yards.",
        images: [
          { n: 13, cap: "The entry porch and front door." },
          { n: 10, cap: "Garage under the upper floor." },
          { n: 15, cap: "Driveway drainage and planting beds." },
          { n: 5, cap: "Kitchen: white joinery, stone bench and gas cooktop." },
          { n: 6, cap: "Kitchen sink run with a stone splashback." },
          { n: 7, cap: "Living room with a window to the drive." },
          { n: 8, cap: "Living room opening to the yard." },
        ] },
    ],
  },
];

/* ---------- helpers ---------- */
window.INTRICON.img = function (project, n, size) {
  var num = String(n).padStart(2, "0");
  return (window.INTRICON.base || "") + "assets/img/" + project.id + "/" + (size || "md") + "/" + project.id + "-" + num + ".jpg";
};
/* Cover (hero, landscape) and thumb (index preview / menu) for a project. */
window.INTRICON.cover = function (project, size) {
  if (project.cover === null || project.cover === undefined) return window.INTRICON.placeholder("Photos coming soon", project.accent, 1600, 1000);
  return window.INTRICON.img(project, project.cover, size || "xl");
};
window.INTRICON.thumb = function (project, size) {
  var n = project.thumb !== undefined ? project.thumb : project.cover;
  if (n === null || n === undefined) return window.INTRICON.placeholder(project.title + " — photos coming soon", project.accent, 1200, 900);
  return window.INTRICON.img(project, n, size || "md");
};
/* Is photo n of a project portrait? (uses dims.js when present) */
window.INTRICON.isPortrait = function (project, n) {
  var d = window.INTRICON.dims && window.INTRICON.dims[project.id + "-" + String(n).padStart(2, "0")];
  return !!(d && d[1] > d[0]);
};
window.INTRICON.photoCount = function (project) {
  return project.chapters.reduce(function (t, c) { return t + c.images.filter(function (i) { return i.n !== undefined; }).length; }, 0);
};

/* Generated SVG placeholder tile (data URI) for coming-soon jobs. */
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

/* Find a project by id, with neighbours for next/previous navigation. */
window.INTRICON.find = function (id) {
  var list = window.INTRICON.projects;
  var i = list.findIndex(function (p) { return p.id === id; });
  if (i < 0) i = 0;
  return { project: list[i], index: i, next: list[(i + 1) % list.length], prev: list[(i - 1 + list.length) % list.length] };
};
