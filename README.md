# Intricon — portfolio website

A static, dependency-free website for showing completed jobs to clients.
No build step: open `index.html` in a browser, or drop the whole folder on any
web host (Netlify, Vercel, GitHub Pages, cPanel, S3 — anything that serves files).

```
intricon-site/
├─ index.html                 homepage (non-conventional editorial layout)
├─ project.html               project page — renders any job from ?p=<id>
├─ README.md                  this file
├─ ATTRIBUTIONS.md            21st.dev components that were ported
└─ assets/
   ├─ css/main.css            all styling
   ├─ js/projects.js          ★ THE DATA FILE — company details + every project
   ├─ js/shared.js            preloader, cursor, menu, lightbox, marquee…
   ├─ js/home.js              homepage effects
   ├─ js/project.js           project page renderer
   └─ img/
      └─ beach-st/            25 Beach Street photos (xl / md / sm sizes)
```

## Previewing locally

Double-clicking `index.html` works in most browsers. For the most faithful
preview (fonts, lazy-loading, navigation between pages) serve the folder:

```bash
cd intricon-site && python3 -m http.server 8765
```

then open <http://localhost:8765>.

## Adding a new job

1. **Export photos** from your camera/photographer at three sizes and put them in
   `assets/img/<project-id>/xl`, `/md` and `/sm`
   (roughly 2000 px, 1200 px and 480 px on the long edge). Name them
   `<project-id>-01.jpg`, `<project-id>-02.jpg`, … in whatever order you like.

   On a Mac, `sips` does this without any extra software:

   ```bash
   cd "folder-with-originals"
   D=../intricon-site/assets/img/hillside-house; mkdir -p $D/xl $D/md $D/sm; i=0
   for f in *.jpg; do i=$((i+1)); n=$(printf "%02d" $i)
     sips -Z 2000 -s format jpeg -s formatOptions 80 "$f" --out "$D/xl/hillside-house-$n.jpg"
     sips -Z 1200 -s format jpeg -s formatOptions 78 "$f" --out "$D/md/hillside-house-$n.jpg"
     sips -Z 480  -s format jpeg -s formatOptions 72 "$f" --out "$D/sm/hillside-house-$n.jpg"
   done
   ```

2. **Open `assets/js/projects.js`**, copy one of the placeholder entries
   (`project-two`, …), and fill it in:
   - `id` must match the image folder name.
   - `status: "complete"` switches the placeholder tiles off.
   - `cover` is the photo number used on cards, the hero and hover previews.
   - `chapters` group photos by room. Each image is `{ n: 7, cap: "…", span: "wide" | "tall" }`
     (`span` is optional and makes a tile 2 columns wide or 2 rows tall).
   - `highlights` and `trail` only matter for the project shown on the homepage
     (the first entry in the list).

3. Save. The homepage index, overlay menu, footer, project page and
   next/previous links all update automatically.

To reorder projects, reorder the entries. To keep a job in the navigation
before its photos are ready, leave it as `status: "coming-soon"`.

## Company details, counters, testimonials

- Contact details, licence number and the homepage counters live at the top of
  `assets/js/projects.js` (`window.INTRICON.company`).
- Testimonials are the `TESTIMONIALS` array near the bottom of `assets/js/home.js`.
  The three included are samples and are labelled as such on the page.
- The "Studio", "Services" and "Process" copy is plain HTML in `index.html`.

## Notes

- Fonts load from Google Fonts (Bricolage Grotesque, Instrument Serif, Inter).
  Offline, the site falls back to system fonts and still works.
- Everything respects `prefers-reduced-motion`; the custom cursor, image trail
  and pinned horizontal gallery are only enabled for mouse/trackpad devices.
- The stair render (`beach-st-00.jpg`) came from the original folder as a PNG;
  swap it for a photograph of the finished stair when one is available.
