# Intricon — portfolio website

A static, dependency-free website for showing completed jobs to clients.
No build step: open `index.html` in a browser, or drop the whole folder on any
web host (Netlify, Vercel, GitHub Pages, cPanel, S3 — anything that serves files).

```
intricon-site/
├─ index.html                 homepage (non-conventional editorial layout)
├─ project.html               project page — renders any job from ?p=<id>
├─ contact.html               contact page with the enquiry form
├─ publish.sh                 one command to push changes live (GitHub Pages)
├─ README.md                  this file
├─ ATTRIBUTIONS.md            21st.dev components that were ported
└─ assets/
   ├─ css/main.css            all styling
   ├─ js/projects.js          ★ THE DATA FILE — company details + every project
   ├─ js/dims.js              generated: pixel size of every photo (tall/wide tiles)
   ├─ js/shared.js            preloader, cursor, menu, lightbox, marquee, footer…
   ├─ js/home.js              homepage effects
   ├─ js/project.js           project page renderer
   ├─ js/contact.js           enquiry form (FormSubmit) + fallbacks
   └─ img/<project-id>/       photos for each job (xl / md / sm sizes)
```

Projects currently in the site: 25 Tennyson Point, Cronulla (two homes), Bellevue Hill,
Greenacre, Picnic Point, Georges Hall, Milperra, Yagoona, St Marys.

## Previewing locally

Double-clicking `index.html` works in most browsers. For the most faithful
preview (fonts, lazy-loading, navigation between pages) serve the folder:

```bash
cd intricon-site && python3 -m http.server 8765
```

then open <http://localhost:8765>.

## Adding a new job

1. **Add the photos.** Put the originals in a folder, then run the helper
   script (it resizes to three sizes, rotates phone photos the right way up,
   and strips GPS/EXIF data so no client address leaks onto the web):

   ```bash
   cd intricon-site && python3 tools/add-photos.py "/path/to/Photos Hillside House" hillside-house
   ```

   That creates `assets/img/hillside-house/{xl,md,sm}/hillside-house-01.jpg …`
   in filename order, writes `mapping.txt` so you can see which original became
   which number, and refreshes `assets/js/dims.js`.

2. **Open `assets/js/projects.js`**, copy one of the placeholder entries
   (`project-two`, …), and fill it in:
   - `id` must match the image folder name.
   - `status: "complete"` switches the placeholder tiles off.
   - `cover` is the photo number used on cards, the hero and hover previews.
   - `chapters` group photos by room. Each image is `{ n: 7, cap: "…", span: "wide" | "tall" }`
     (`span` is optional and makes a tile 2 columns wide or 2 rows tall).
   - `highlights` and `trail` only matter for the project shown on the homepage
     (the first entry in the list).

3. Save and run `./publish.sh "Added Hillside House"`. The homepage index,
   the horizontal strip, overlay menu, footer, project page and next/previous
   links all update automatically.

To reorder projects, reorder the entries. To keep a job in the navigation
before its photos are ready, leave it as `status: "coming-soon"`.

## Company details, counters, testimonials

- Company details (ABN, licence, phone, email, established date) live at the top
  of `assets/js/projects.js` (`window.INTRICON.company`) and flow into the
  footer, the menu and the contact page. The homepage counters are computed
  from the data (years since 2008, projects, photos).
- Testimonials are the `TESTIMONIALS` array in `assets/js/home.js`.
  The three included are samples and are labelled as such on the page.
- The "Studio", "Services" and "Process" copy is plain HTML in `index.html`.

## The contact form

`contact.html` posts to [FormSubmit](https://formsubmit.co), a free service
that forwards submissions to **tony@intricon.com.au** with no server and no
account. One-time setup: the first time the form is submitted, FormSubmit
emails that address with an *Activate form* link. Click it once and every
later submission arrives as a normal email (subject "New enquiry from the
Intricon website"). If a submission cannot be sent from the visitor's browser,
the page falls back to opening their email app with the message pre-filled.

To change the destination address, edit `email` in `assets/js/projects.js`.

## Notes

- Fonts load from Google Fonts (Bricolage Grotesque, Instrument Serif, Inter).
  Offline, the site falls back to system fonts and still works.
- Everything respects `prefers-reduced-motion`; the custom cursor, image trail
  and pinned horizontal gallery are only enabled for mouse/trackpad devices.
- The stair render (`beach-st-00.jpg`) came from the original folder as a PNG;
  swap it for a photograph of the finished stair when one is available.
