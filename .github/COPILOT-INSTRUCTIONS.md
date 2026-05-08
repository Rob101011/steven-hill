# Mechanic Portfolio Website — Copilot Instructions

## Project Overview

This is a **mobile-first professional portfolio website** for **Steven Hill**, an independent mechanic based in **Gomersal, Cleckheaton, West Yorkshire, England**. Steven Hill _is_ the business — this is a sole trader portfolio site. The goal is to build trust with potential clients through a clean, polished, and professional **dark-themed** design. The site will showcase Steven's skills, past work, and make it easy for clients to get in touch.

---

## Business Details

| Field | Value |
|---|---|
| Business / Owner Name | Steven Hill |
| Trading Name | Steven Hill Motor Services *(use as placeholder)* |
| Tagline | "Honest Work. Expert Results." |
| Location | Gomersal, Cleckheaton, West Yorkshire, England |
| Service Area | West Yorkshire and surrounding areas |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| UI Library | Material UI (MUI) v6+ |
| Hosting | AWS S3 (static site) + CloudFront (CDN) |
| Styling | MUI `sx` prop + theme customization |

---

## Design Principles

- **Mobile-first**: All layouts designed for small screens first, then scaled up.
- **Dark professional theme**: The entire site uses a dark color scheme. No light mode. This conveys professionalism and authority.
- **Performance**: Lazy-loaded images, optimized assets, fast load times on CloudFront CDN.
- **Accessibility**: Semantic HTML, proper contrast ratios (WCAG AA minimum), keyboard navigable.
- **Smooth scrolling**: Implemented via CSS `scroll-behavior: smooth` on the `html` element — no additional library needed.

---

## Color Palette

| Role | Name | Hex |
|---|---|---|
| Background (default) | Near Black | `#0d0d0d` |
| Background (paper / cards) | Dark Charcoal | `#1a1a1a` |
| Background (elevated sections) | Charcoal | `#222222` |
| Primary Accent | Steel Blue | `#4a90a4` |
| Secondary Accent | Warm Silver | `#b0b8c1` |
| Text Primary | Off White | `#f0f0f0` |
| Text Secondary | Light Grey | `#9e9e9e` |
| Divider / Border | Dark Grey | `#333333` |
| CTA Button | Steel Blue | `#4a90a4` |
| CTA Button Hover | Lighter Blue | `#5ba3b8` |

> All color usage must maintain a minimum **4.5:1 contrast ratio** against their background (WCAG AA).

---

## Typography

| Role | Font | Weight |
|---|---|---|
| Headings (h1–h4) | `Roboto Slab` | 700 (Bold) |
| Sub-headings (h5–h6) | `Roboto Slab` | 500 (Medium) |
| Body text | `Roboto` | 400 (Regular) |
| Button / Labels | `Roboto` | 500 (Medium) |

- Both fonts loaded from **Google Fonts** via `index.html` `<link>` tags.
- `Roboto Slab` gives headings a strong, dependable, mechanical character without being decorative.
- `Roboto` (already bundled with MUI) is used for all body copy and UI text.
- Base font size: `16px`. Line height: `1.6` for body text.

---

## Site Structure & Pages

The site will be a **single-page application (SPA)** with smooth scroll navigation (CSS `scroll-behavior: smooth`).

### Sections (in order)

1. **NavBar**
   - Sticky/fixed at top
   - Dark background (`#0d0d0d`) with subtle bottom border (`#333333`)
   - Business name / logo text on the left
   - Nav links on the right (desktop)
   - **Hamburger menu (MUI `Drawer`)** on mobile — required
   - Links: About, Services, Gallery, Contact

2. **Hero**
   - Full-width, min-height `100vh`
   - Dark gradient background for first draft (no image dependency)
   - Displays: "Steven Hill Motor Services"
   - Tagline: "Honest Work. Expert Results."
   - Location tag: "Gomersal, Cleckheaton, West Yorkshire"
   - CTA button → scrolls to Contact section

3. **About**
   - Brief bio / background for Steven Hill
   - Years of experience, certifications, specialties
   - Profile photo placeholder (grey MUI `Avatar` or `Box`)

4. **Services**
   - Responsive grid of MUI `Card` components
   - Services: Engine Repair, Oil & Filter Change, Diagnostics, Brakes, Tyres, MOT Preparation, Exhaust, Air Conditioning
   - MUI Icons for each service
   - Cards use `#1a1a1a` background with `#4a90a4` icon accent

5. **Gallery**
   - Responsive photo grid (MUI `ImageList`)
   - Lightbox on click to view full-size (MUI `Dialog`)
   - Mobile: 1–2 columns; tablet: 3 columns; desktop: 4 columns
   - Images use `loading="lazy"`
   - Placeholder images (solid colour boxes with labels) for first draft

6. **Testimonials** *(Phase 2 or later)*
   - Static grid of MUI Cards with client quotes

7. **Contact**
   - Phone number, email, Gomersal / Cleckheaton location and service area
   - Business hours
   - Simple contact form using `mailto:` for v1
   - Social media links (placeholder hrefs for now)

8. **Footer**
   - "Steven Hill Motor Services", quick nav links, copyright `© 2026 Steven Hill Motor Services`, location

---

## Component Plan

```
src/
  components/
    NavBar/
      NavBar.tsx
    Hero/
      Hero.tsx
    About/
      About.tsx
    Services/
      Services.tsx
    Gallery/
      GalleryGrid.tsx
      LightboxModal.tsx
    Testimonials/
      Testimonials.tsx
    Contact/
      Contact.tsx
    Footer/
      Footer.tsx
  theme/
    theme.ts          ← MUI dark theme (colors, fonts, breakpoints)
  assets/
    images/           ← Local placeholder images
  App.tsx             ← Assembles all sections in order
  main.tsx
```

- Use **PascalCase** for all component files and folders.
- Each component folder contains a single `.tsx` file — no barrel `index.tsx` files.
- Path aliases configured in `vite.config.ts`: `@components/` → `src/components/`, `@theme/` → `src/theme/`.

---

## MUI Setup

- Install `@mui/material`, `@emotion/react`, `@emotion/styled`
- Install `@mui/icons-material` for service icons
- Create a **dark** custom MUI theme in `src/theme/theme.ts`:
  - `mode: 'dark'`
  - `palette.background.default`: `#0d0d0d`
  - `palette.background.paper`: `#1a1a1a`
  - `palette.primary.main`: `#4a90a4`
  - `palette.secondary.main`: `#b0b8c1`
  - `typography.fontFamily`: `'Roboto Slab', 'Roboto', sans-serif`
  - Override `h1`–`h6` variants to use `Roboto Slab`
  - `typography.body1.lineHeight`: `1.6`
- Wrap `<App />` in `<ThemeProvider>` and `<CssBaseline />` in `main.tsx`

---

## Gallery Implementation Notes

- Use MUI `ImageList` with `ImageListItem` for the responsive grid
- Clicking an image opens a **Lightbox modal** using MUI `Dialog`
- Images use `loading="lazy"` for performance
- In production, images are stored in S3 and served via CloudFront URLs

---

## AWS Hosting Plan

1. **S3 Bucket**: Static website hosting enabled, bucket policy allows public read
2. **CloudFront Distribution**: Points to S3 bucket, HTTPS enforced, caching optimized for static assets
3. **Build & Deploy**:
   - `npm run build` → produces `/dist`
   - `aws s3 sync dist/ s3://<bucket-name> --delete`
   - `aws cloudfront create-invalidation --distribution-id <id> --paths "/*"`
4. **Custom Domain** *(optional)*: Route 53 or external DNS → CloudFront

---

## Development Phases

### Phase 1 — Foundation
- [ ] Install MUI and dependencies (`@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled`)
- [ ] Add Google Fonts (`Roboto Slab`, `Roboto`) to `index.html`
- [ ] Set up custom dark MUI theme in `src/theme/theme.ts`
- [ ] Configure path aliases in `vite.config.ts`
- [ ] Create `NavBar` component (sticky, hamburger drawer on mobile)
- [ ] Create `Hero` section

### Phase 2 — Core Content
- [ ] `About` section
- [ ] `Services` section with MUI Cards + icons

### Phase 3 — Gallery
- [ ] `GalleryGrid` with responsive `ImageList`
- [ ] `LightboxModal` using MUI `Dialog`
- [ ] Placeholder images wired up

### Phase 4 — Contact & Footer
- [ ] `Contact` section with contact details and `mailto:` form
- [ ] `Footer` component

### Phase 5 — Polish & Deploy
- [ ] Responsive QA across breakpoints (375px, 768px, 1280px)
- [ ] Performance optimizations (lazy loading, image compression)
- [ ] Build and deploy to S3 + CloudFront
- [ ] Configure CloudFront HTTPS and caching headers

---

## Out of Scope for v1

- Backend form handling (no server, no Lambda) — contact form uses `mailto:`
- CMS or admin panel
- Authentication
- Blog or news section
- Booking / scheduling system
- Light mode / theme toggle

---

## Notes for Copilot

- Always write **TypeScript** with proper types — no `any`.
- Use **MUI `sx` prop** for all styling — no plain CSS files or CSS modules (except `index.css` for `scroll-behavior: smooth` on `html`).
- The theme is **dark only** — never use `palette.mode: 'light'` or hardcode light colors.
- Keep components small and focused — one responsibility per component.
- Use **React functional components** with hooks only.
- Images in the gallery must use `loading="lazy"`.
- The site must look great on a **375px wide mobile screen** first.
- Prefer **named exports** for components.
- `App.tsx` should only compose section components in order — no logic.
- All section components must accept an optional `id` prop for scroll targeting.
- Smooth scroll is handled by CSS (`scroll-behavior: smooth` on `html`) — do not install `react-scroll`.
- Use `Roboto Slab` for all heading elements via the MUI theme — do not override per component.
- Section backgrounds should alternate between `#0d0d0d` and `#1a1a1a` to create visual separation without borders.
