export const site = {
  name: "Phazeo",
  motto: "Forging the next phase.",
  description: "A personal product studio for focused projects, experiments, and ideas.",
  url: "https://phazeo.com",
  /** Transition point logo (single source for Hero, Footer). */
  logo: "/logos/phazeo-transition-point-dark.svg",
  links: {
    portfolio: "https://portfolio.phazeo.com",
    github: "https://github.com/Phazeo",
  },
} as const;

export type Site = typeof site;
