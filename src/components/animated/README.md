# Animated components (React islands)

**Isolate animation here.** Use only where interaction or scroll-based motion is required.

## Principles

- **Progressive enhancement:** Parent section renders static content first; wrap with an animated overlay or wrapper that enhances (e.g. `client:visible`).
- **One job per component:** e.g. `ScrollRevealHeader` only does scroll-in reveal; no mixed responsibilities.
- **Respect `prefers-reduced-motion`:** Use CSS `@media (prefers-reduced-motion: reduce)` and, in React, avoid starting non-essential animations when the user prefers reduced motion (handled globally in `global.css`; JS-driven motion should skip or shorten).

## Intended components (to add when building V2 experience)

- **ScrollRevealHeader** - section title/subtitle reveal on scroll (IntersectionObserver or Framer Motion).
- **SpotlightHero** - Hero-specific spotlight/glow (can wrap or duplicate Aceternity Spotlight with Hero-specific props).
- **AnimatedSectionChrome** - optional wrapper for section “chapter” styling (e.g. sticky label, divider) without animating list items.

Keep Aceternity UI as an **accent layer** (backgrounds, spotlights); do not make it the foundation of every section.
