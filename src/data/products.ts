export const ProductStatus = {
  LIVE: "live",
  COMING_SOON: "coming-soon",
} as const;

export type ProductStatusType = (typeof ProductStatus)[keyof typeof ProductStatus];

export interface Product {
  name: string;
  description: string;
  /** Optional one-liner for featured card */
  tagline?: string;
  href: string | null;
  status: ProductStatusType;
  /** Tailwind gradient classes for card placeholder (e.g. from-amber-500/20 to-orange-600/10) */
  gradient?: string;
}

export const products: Product[] = [
  {
    name: "Portfolio",
    description: "Personal work and projects showcase",
    href: "https://portfolio.phazeo.com",
    status: "live",
  },
  {
    name: "Duefy",
    tagline: "Know what you owe, before it's due.",
    description: "A lightweight companion for tracking subscriptions and recurring expenses.",
    href: null,
    status: "coming-soon",
    gradient: "from-amber-500/20 to-orange-600/10",
  },
  {
    name: "Pixsort",
    tagline: "Your images, intelligently organized.",
    description: "An intelligent way to organize, search, and manage image libraries.",
    href: null,
    status: "coming-soon",
    gradient: "from-blue-500/20 to-cyan-600/10",
  },
];
