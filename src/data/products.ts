export const ProductStatus = {
  LIVE: "live",
  RELEASED: "released",
  IN_DEVELOPMENT: "in-development",
} as const;

export type ProductStatusType = (typeof ProductStatus)[keyof typeof ProductStatus];

export interface Product {
  name: string;
  description: string;
  /** The product's own site or its public repository; null when there is nothing to link to. */
  href: string | null;
  /** Link text for `href`. */
  linkLabel?: string;
  status: ProductStatusType;
  /** Tailwind gradient classes for the card header (e.g. from-amber-500/20 to-orange-600/10) */
  gradient: string;
}

export const products: Product[] = [
  {
    name: "Scrift",
    description: "Brand logos and verified colors for thousands of services, through one API.",
    href: "https://scrift.app",
    linkLabel: "Visit site",
    status: "live",
    gradient: "from-blue-500/20 to-cyan-600/10",
  },
  {
    name: "Truestill",
    description: "A local-first photo and video organizer and backup tool. Your files stay yours.",
    href: "https://github.com/Phazeo/truestill",
    linkLabel: "View on GitHub",
    status: "released",
    gradient: "from-emerald-500/20 to-teal-600/10",
  },
  {
    name: "Nexdue",
    description: "Track subscriptions, warranties and recurring payments, with email reminders.",
    href: null,
    status: "in-development",
    gradient: "from-amber-500/20 to-orange-600/10",
  },
];
