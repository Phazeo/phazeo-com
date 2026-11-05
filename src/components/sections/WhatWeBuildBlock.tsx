"use client";

import { Sparkles, Target, Wrench } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { DotGridBackground } from "@/components/ui/dot-grid-background";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { cn } from "@/lib/utils";

const ICON_MAP = {
  Wrench,
  Sparkles,
  Target,
} as const;

interface WhatWeBuildCard {
  icon: keyof typeof ICON_MAP;
  title: string;
  body: string;
}

interface WhatWeBuildBlockProps {
  cards: readonly WhatWeBuildCard[];
  className?: string;
}

export default function WhatWeBuildBlock({ cards, className }: WhatWeBuildBlockProps) {
  return (
    <section
      className={cn(
        "relative border-t border-[var(--border-subtle)] bg-[var(--surface-1)] py-20 md:py-28",
        className
      )}
    >
      <DotGridBackground dotOpacity={0.08} className="pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] md:text-3xl">
          <HeroHighlight highlight="build">What we build</HeroHighlight>
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = ICON_MAP[card.icon];
            return (
              <CardSpotlight key={card.title} color="rgba(168, 85, 247, 0.12)" className="p-6">
                {Icon && (
                  <span
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-[var(--color-accent)]"
                    aria-hidden
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                )}
                <h3 className="text-lg font-medium text-[var(--text-primary)]">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{card.body}</p>
              </CardSpotlight>
            );
          })}
        </div>
      </div>
    </section>
  );
}
