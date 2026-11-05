"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { cn } from "@/lib/utils";

interface PhilosophyBlockProps {
  title: string;
  quote: string;
  values: readonly string[];
  className?: string;
}

export default function PhilosophyBlock({ title, quote, values, className }: PhilosophyBlockProps) {
  return (
    <section
      className={cn(
        "relative border-t border-[var(--border-subtle)] bg-[var(--surface-1)] py-20 md:py-28",
        className
      )}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] md:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="mt-8 text-xl font-medium leading-snug text-red-500 md:text-2xl">{quote}</p>
        <div className="mt-12">
          <InfiniteMovingCards
            items={values.map((text) => ({ text }))}
            direction="left"
            speed={18}
            className="py-4"
          />
        </div>
      </div>
    </section>
  );
}
