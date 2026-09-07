# SMM Panel — Landing Page

A pixel-close React recreation of the provided Figma design for a Bangladesh-focused SMM (Social Media Marketing) panel landing page. Built with **React 19 + Vite**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack

- **React** (Vite) — component structure
- **Tailwind CSS** — utility-first styling, custom theme tokens matched to the design (orange palette, ink/text colors, gradients)
- **Framer Motion** — scroll-in reveal animations, hover/tap micro-interactions, animated FAQ accordion, mobile menu transitions
- **react-icons** — brand/platform icons (Facebook, Instagram, TikTok, payment providers, etc.)
- **@fontsource/poppins** — Poppins font bundled locally (no external Google Fonts request, so it always loads instantly and offline)

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build locally
```

## Project Structure

```
src/
  assets/            # optimized WebP images extracted/cropped from the design
  components/
    Navbar.jsx        # sticky header, mobile hamburger menu
    Hero.jsx           # hero headline, CTA buttons, floating illustration
    StatsBar.jsx        # 4-stat highlight strip
    Services.jsx         # platform selector + Facebook services detail card
    WorkingProcess.jsx    # 4-step "how it works" grid
    PaymentMethods.jsx     # payment provider arc + world-map backdrop
    GrowthTimeline.jsx      # 4-phase growth timeline cards
    Advantages.jsx           # 4 trust/advantage cards
    FAQ.jsx                   # animated two-column accordion
    CTA.jsx                    # bottom call-to-action banner
    Footer.jsx                  # footer with link columns + contact info
  App.jsx              # composes all sections
  index.css            # Tailwind directives + global base styles
tailwind.config.js    # theme tokens (colors, gradients, shadows) matched to the design
```

## Responsive Breakpoints

Built mobile-first with Tailwind breakpoints and verified at:
- **Mobile** (~390px) — single column, hamburger nav, stacked stats/cards
- **Tablet** (~768px) — 2-column grids, hamburger nav
- **Laptop/Desktop** (1024px–1440px+) — full multi-column layout, inline nav

## Animations & Micro-interactions

- Scroll-triggered fade/slide-in on every section (`whileInView`, once-only so it doesn't re-fire on scroll-back, keeping performance smooth)
- Hover/tap scale feedback on all buttons and cards
- Floating idle animation on the hero illustration
- Animated platform switcher in the Services section (cross-fades the detail card)
- Animated accordion in FAQ (height/opacity transition, rotating chevron)
- Animated mobile nav drawer

All animations use GPU-friendly properties (`transform`, `opacity`) to keep scrolling smooth.

## Assets

Images (hero illustration, stat icons, advantage icons, Facebook marketing graphic, CTA portrait) were extracted directly from the provided design and compressed to WebP for fast loading. Platform/payment icons use crisp vector icons from `react-icons` instead of raster images for sharper rendering at any size.

## Pixel-Accuracy Fixes (this pass)

Corrections made against the original design screenshot:

1. **Section eyebrows** (`index.css` → `.section-eyebrow`) — was text + line side-by-side; now stacked text-over-line with a dot centered on the line, matching every section (Services, Working Process, Payment Methods, Growth, Advantages, FAQ).
2. **Facebook service bullets** (`Services.jsx`) — numbered markers changed from circles to flat-top hexagons via `clip-path`.
3. **Working Process cards** (`WorkingProcess.jsx`) — removed the vertical card offset (was a staggered layout, reference is a plain 2×2 grid); only cards 01 and 04 now get a card background + corner dot-pattern decoration, 02/03 are bare text; center hub redone as an orbit ring with end-dots plus a smaller gradient "H" badge.
4. **Payment Methods background** (`PaymentMethods.jsx`, new `WorldMap.jsx`) — replaced the dotted-mask placeholder with an actual world map silhouette component, reused behind the arcs.
5. **CTA section** (`CTA.jsx`) — the container's `overflow-hidden` was clipping the portrait to the box. Split into a clipped background layer (world map) and an unclipped image layer so the woman overflows the top edge as in the design; desktop uses an oversized absolutely-positioned image, mobile falls back to a normal contained image.

Caveat: the `WorldMap.jsx` silhouette is a hand-approximated continent shape for visual match, not a geographically accurate/traced copy of the original map asset — swap in the real map path/SVG if exact geographic accuracy matters.

## Notes / Next Steps

- Swap the placeholder `#` links (Sign In/Sign Up, footer links) for real routes once pages exist.
- Wire the "View Services" / platform buttons to real service data once the backend/API is available.
- Replace the LOGO placeholder box with the actual logo file when available.
