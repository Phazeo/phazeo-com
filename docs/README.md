# Phazeo site - docs

Quick reference. Start with the root [README.md](../README.md) for setup and structure.

| Doc | Purpose |
|-----|--------|
| [UI_UX_PLAN.md](./UI_UX_PLAN.md) | Information architecture, section goals, animation rules, a11y, Aceternity usage. **Primary design reference.** |
| [DESIGN_REDESIGN_PLAN.md](./DESIGN_REDESIGN_PLAN.md) | Section-by-section redesign (Hero, Projects, About, Footer). Astro-first, islands only where needed. |
| [ANIMATION_STRATEGY.md](./ANIMATION_STRATEGY.md) | What animates, triggers, reduced-motion, mobile. No continuous motion on lists/grids. |

Content lives in `src/data/` (site, content, products). Layout composes sections in `src/components/layout/Layout.astro`.
