# Phazeo homepage - section-by-section redesign plan (V2)

2026-grade organization hub: cinematic, minimal, premium. Content preserved; presentation elevated. **Premium Domains section is not redesigned** - only clarity additions allowed.

---

## A) Section-by-section redesign

### Hero - stronger brand moment + clear CTAs + scroll hint

- **Keep:** Spotlight (one hero-level treatment), logo, title, motto, description, primary CTAs (View Portfolio, GitHub).
- **Add:**
  - **Scroll cue:** "Scroll to explore" with down arrow below CTAs; smooth scroll to `#projects`. Single line, low visual weight (e.g. text-neutral-500), clear affordance.
  - **Jump to Domains CTA:** Secondary link: "Jump to Domains" to `#domains` (smooth scroll). Visible anchor state when hash is `#domains` or when Domains section is in view (via small script).
- **Hierarchy:** Logo, Title, Motto, Description, Primary CTAs, then Scroll cue + Jump to Domains. No extra motion beyond existing fade-ins; entrance only.

### Projects - curated studio catalog + progressive reveal

- **Keep:** Same grid, same product cards, same data. No change to card content or structure.
- **Add:**
  - **Section heading:** Scroll-based reveal (fade + short translate) when section enters viewport. One reveal per heading; no per-card scroll animation.
  - **Cards:** Hover-only micro-interaction (subtle border glow / soft elevation). No continuous motion. Optional: first card has a very subtle "featured" glow (CSS).
- **Copy:** Optional subheading tweak for clarity. No layout or card redesign.

### Premium Domains - no redesign

- **Do not change:** Card design language, glow style, spacing, grid structure, or DomainsBackground.
- **Allowed only:**
  - **Preface above section:** Small scroll cue / anchor line above the Domains block (e.g. "Premium Domains" label + one line: "Curated names for your next project."). Purely additive.
  - **Clarity copy:** Minor wording tweaks only. No visual or structural changes to the domain cards or grid.

### About - modern manifesto block

- **Keep:** Same message (studio, quality, philosophy). Same section id and landmark.
- **Change:** Clear heading, short tagline, 2-3 short manifesto-style lines. Better typography scale. Section heading uses same scroll reveal pattern as Projects. Body static or one subtle fade on reveal; no continuous animation. Tone: trust and philosophy; calm "chapter."

### Footer - more useful, no heavy animation

- **Add:** Quick links row: Projects | About | Domains (anchor links, smooth scroll).
- **Keep:** Logo, Portfolio / GitHub, copyright, trademark.
- **Optional:** Lightweight CTA line. Hover states only.

---

## C) Implementation approach (Astro-first)

- **Static by default:** Most sections remain `.astro`. Content and structure server-rendered; no full-page hydration.
- **React islands only where needed:** Hero Spotlight (existing). Section headings (Projects, About): one shared `ScrollRevealSection` island. Project cards: CSS hover only. Anchor state for "Jump to Domains": minimal script or tiny island.
- **Motion rules:** Prefer interaction-based (hover, focus) and scroll-triggered (once per section). No continuous motion on lists/grids. All animation respects `prefers-reduced-motion`.

---

## E) Rollout and validation

- **Single layout:** One production layout; redesigns are delivered via feature branches and merged to main when ready.
- **Validation:** Run locally; check Lighthouse, scroll, mobile, accessibility before merging.
- **Releases:** Tag releases (e.g. v2.0.0) after major redesigns; see README Versioning and CHANGELOG.md.
