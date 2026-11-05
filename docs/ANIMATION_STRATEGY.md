# Phazeo - animation strategy (V2)

Which elements animate, why, triggers, reduced-motion behavior, and mobile rules.

---

## 1. Which elements animate (and why)

| Element | Animation | Why |
|--------|-----------|-----|
| **Hero** | Spotlight (existing); entrance fade-ins for logo, title, motto, description, CTAs | Single “brand moment”; focus on headline; no continuous motion. |
| **Section headings (Projects, About)** | Scroll reveal (fade + short translate up) when section enters viewport | “Chapter” feel; one reveal per section; clear hierarchy. |
| **Project cards** | Hover only: border glow, soft elevation, optional slight scale | Feedback on interaction; no motion when idle. |
| **Scroll cue** | None (or minimal hover on the link) | Clarity and affordance; not decorative. |
| **Footer** | Hover on links only | Lightweight; no scroll or load animation. |

No animated tabs, no per-card scroll animation, no continuous motion on lists or grids.

---

## 2. Trigger types

| Trigger | Used for | Notes |
|---------|----------|--------|
| **On load** | Hero spotlight + hero copy fade-in | Runs once; then static. |
| **On scroll** | Section heading reveals (Projects, About) | When section enters viewport (e.g. IntersectionObserver); single run. |
| **Hover / focus** | Project cards, footer links, CTAs | CSS transitions; no JS required for most. |
| **None** | body copy blocks | Content first; avoid distraction. |

---

## 3. Reduced-motion behavior

- **Global (already in place):** `@media (prefers-reduced-motion: reduce)` in `global.css` shortens/removes animations and transitions and sets `scroll-behavior: auto`.
- **Scroll-reveal island:** When `prefers-reduced-motion: reduce`, content is shown immediately (no delay, no translate); optional class or inline check so the component does not rely on animation for meaning.
- **Hero:** Existing fade-ins and spotlight are already subject to global reduced-motion rules.
- **Hover effects:** Short-duration transitions are minimized by the global rule when reduced motion is preferred.

No animation is required to understand content or complete tasks.

---

## 4. Mobile rules

- **Less motion:** Prefer fewer or no scroll-triggered animations on small viewports if needed (e.g. reduce or skip reveal for section headings on narrow screens). Current approach: one lightweight reveal; if performance or battery is a concern, can be disabled below a breakpoint.
- **Touch:** No hover-only critical information; the scroll cue is a tappable link. Touch targets adequate (e.g. ≥ 44px where possible).
- **Performance:** No heavy continuous animations; no full-page hydration. Islands load with `client:visible` where possible.

---

## 5. Aceternity UI usage (summary)

- **Spotlight:** Hero only (one treatment).
- **Scroll reveal:** Custom lightweight implementation (or Framer Motion) for section headings; not an Aceternity component.
- **Moving Border / card hover:** Optional, very subtle, CSS-first on project cards only; no continuous animation.

Other Aceternity components (tabs, text reveal cards, tracing beam, etc.) not used in this phase to avoid over-animation and keep the site fast and maintainable.
