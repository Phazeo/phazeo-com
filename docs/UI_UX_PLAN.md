# Phazeo homepage - UI/UX plan & animation strategy

Production-oriented plan for turning the site into a modern, premium animated organization hub without over-animating or breaking performance.

**Related docs:** [DESIGN_REDESIGN_PLAN.md](./DESIGN_REDESIGN_PLAN.md) (section-by-section V2 redesign, implementation approach, rollout). [ANIMATION_STRATEGY.md](./ANIMATION_STRATEGY.md) (what animates, triggers, reduced-motion, mobile).

---

## 1. Information architecture

**Phazeo = hub for:** (1) Apps/Products, (2) Portfolios.

| Content type   | Current section | Visual semantics (recommended) |
|----------------|-----------------|---------------------------------|
| **Apps / Products** | Projects (Products) | Cards with status (Live / Coming soon), clear CTA. Optional “Apps” or “What we build” label. |
| **Portfolios** | Currently under Products (e.g. “Portfolio” as first product) | Can stay as first featured product, or later: separate “People” / “Portfolios” block with avatars/links. |

**Clear separation:** Use section headers and optional subtle visual cues (icon, small label, or divider) so users immediately understand “this is apps,” “this is about.”

---

## 2. Section-by-section UI/UX plan

### Hero
- **Goal:** High-impact, atmospheric; set “premium hub” tone.
- **Current:** Spotlight (Aceternity), fade-in copy, CTAs. Good base.
- **V2 enhancements (optional):**
  - Keep Spotlight as accent; ensure it doesn’t overpower.
  - One strong headline animation (e.g. gradient or clip-path reveal), then static. No continuous motion.
  - Optional subtle grid or grain in CSS for depth; keep background performant (no heavy canvas unless needed).
- **Static first:** Logo, title, motto, description, and CTAs must be in the initial HTML. Animation is overlay/enhancement only.

### Projects (Products)
- **Goal:** Clear “chapter” - these are apps/products; scroll feels progressive.
- **Current:** Centered header, grid of cards, hover states.
- **V2 enhancements:**
  - **Section header:** Scroll-based reveal (e.g. fade + short translate) when section enters viewport. One animation per header; no per-card scroll animation.
  - **Cards:** Hover-only (border/background/scale). No continuous motion. Optional: first card “featured” with a very subtle glow (CSS) to draw eye.
  - **Lists:** Regular lists stay minimal - hover only.
- **Semantics:** Consider renaming to “Apps” or “What we build” if that fits the hub narrative; keep “Projects” if you prefer.

### About
- **Goal:** Calm “chapter”; trust and philosophy.
- **Current:** Centered block, title + text.
- **V2 enhancements:**
  - Optional scroll reveal for the section title (same pattern as Products header).
  - No card animation; text stays static or with minimal hover on any link.

### Footer
- **Static.** Links and copyright only. No animation beyond hover states.

---

## 3. Animation strategy (rules)

- **Hero:** High-impact but short-lived (entrance only). Background/spotlight as accent.
- **Section headers:** Scroll reveal only (when section enters viewport). One reveal per header; no stagger of every card.
- **Featured items:** At most one “spotlight” or glow per section (e.g. first product card). CSS-only preferred.
- **Regular lists/grids:** Hover-only (and optional focus-visible). No continuous motion.
- **Respect `prefers-reduced-motion`:** Already applied globally in `global.css`; any new JS-driven motion should skip or reduce when that media query matches.
- **React islands only where needed:** Scroll reveal, spotlight, or interactive components. Rest stays Astro/HTML/CSS.

---

## 4. Aceternity UI - where and why

Use as **accent layer**, not foundation.

| Component / pattern      | Where to use                    | Why |
|--------------------------|----------------------------------|-----|
| **Spotlight**            | Hero (already used)             | Focus attention on headline; premium feel. |
| **Background Gradient**  | Optional on 1-2 cards (e.g. featured product) | Subtle gradient border; use sparingly, no continuous animation. |
| **Scroll-driven reveal** | Section headers (V2)           | Not an Aceternity component; use Framer Motion or IntersectionObserver. |
| **Avoid**                | Bento grids, animated cards everywhere, multiple spotlights | Prevents clutter and performance issues. |

Do **not** add Aceternity to every section. Hero keeps the single Spotlight.

---

## 5. Accessibility, keyboard, mobile, layout

- **Accessibility:** Section landmarks and headings already in place. Keep one `<h1>` on the page (Hero). Use `aria-label` on icon-only links (e.g. GitHub in footer).
- **Keyboard:** All interactive elements (links, buttons) focusable; visible focus ring (e.g. `focus-visible:outline`). No focus traps.
- **Mobile-first:** Touch targets ≥ 44px where possible. No hover-only critical info. Scroll reveal should be subtle and not block content.
- **No layout shift:** Reserve space for images (width/height). Animated elements should not change document flow when they appear; use opacity/transform only where possible.

---

## 6. Versioning and deployment

- **Single layout:** One layout composes all sections. No env-based version switching.
- **Progressive enhancement:** Static content first; animated wrappers (e.g. in `components/animated/`) added as islands with `client:visible`. If animation fails, content still works.
- **Isolation:** Animated components live under `components/animated/` to avoid animation bleed and keep regressions local.
- **Releases:** Semantic versioning and Git tags; see CHANGELOG.md and README Versioning section.

---

## 7. Maintainability

- **One source of content:** Data in `src/data/` (site, products). Layouts only compose sections; they don’t own copy.
- **New sections:** Add to the single layout. Prefer shared section component with optional “animated” wrapper where needed.
- **New Aceternity usage:** Add only when it serves a clear section goal; document in this file and in `components/animated/README.md`.
