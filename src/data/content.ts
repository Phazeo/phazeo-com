/**
 * Page content for V2 sections (studio intro, what we build, philosophy).
 */

export const studioIntro = {
  title: "Built to last, not to launch.",
  subline:
    "Phazeo is a focused product studio. Ideas are explored deeply, shaped carefully, and released only when they're meaningful.",
  /** V1: same as subline */
  body: "Phazeo is a focused product studio. Ideas are explored deeply, shaped carefully, and released only when they're meaningful.",
  /** V1: bullet list derived from attributes */
  points: [
    "Not client work. Not outsourced. Ours.",
    "We test before we ship.",
    "Tools that simplify, not complicate.",
  ],
  attributes: [
    {
      icon: "Layers",
      label: "Independent products",
      line: "Not client work. Not outsourced. Ours.",
    },
    {
      icon: "FlaskConical",
      label: "Design-led experiments",
      line: "We test before we ship.",
    },
    {
      icon: "Wind",
      label: "Friction removers",
      line: "Tools that simplify, not complicate.",
    },
  ],
} as const;

export const whatWeBuildCards = [
  {
    icon: "Wrench",
    title: "Thoughtful Tools",
    body: "Software that solves real problems without adding complexity. Every feature earns its place.",
  },
  {
    icon: "Sparkles",
    title: "Experiments",
    body: "Design-led explorations to test ideas before they become products - and kill the ones that don't work.",
  },
  {
    icon: "Target",
    title: "Focused Scope",
    body: "One project gets full attention. We don't spread thin. We go deep.",
  },
] as const;

/** V1 What We Build section (title, description). */
export const whatWeBuild = whatWeBuildCards.map((c) => ({
  title: c.title,
  description: c.body,
}));

export const philosophyValues = [
  "Ship less, ship better.",
  "Limitations are features.",
  "Small team. Full ownership.",
  "Your time isn't ours to waste.",
] as const;

/** V1 Philosophy section (title, quote, beliefs). */
export const philosophy = {
  title: "Why build this way?",
  quote: "Speed without direction is just waste.",
  beliefs: [...philosophyValues],
};

export const finalCta = {
  title: "Interested in the work?",
  body: "Whether you're exploring a collaboration, a domain, or just curious about what's coming next - feel free to reach out.",
  primaryLabel: "View Portfolio",
} as const;

/** Featured projects section copy */
export const featuredProjects = {
  title: "What we're shipping",
  subline: "Products built in-house. No clients. No deadlines. Just craft.",
} as const;

/** Teaser card for "more coming" in featured grid */
export const featuredTeaser = {
  name: "More in the lab",
  tagline: "Shipping when ready.",
  gradient: "from-zinc-500/10 to-zinc-600/5",
} as const;
