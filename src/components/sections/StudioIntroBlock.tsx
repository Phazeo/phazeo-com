"use client";

import { FlaskConical, Layers, Wind } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { cn } from "@/lib/utils";

const ICON_MAP = {
  Layers,
  FlaskConical,
  Wind,
} as const;

interface StudioIntroAttribute {
  icon: keyof typeof ICON_MAP;
  label: string;
  line: string;
}

interface StudioIntroBlockProps {
  title: string;
  subline: string;
  attributes: readonly StudioIntroAttribute[];
  className?: string;
}

function StudioIntroBlock({ title, subline, attributes, className }: StudioIntroBlockProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const h = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-8 md:py-28 lg:px-12 lg:grid-cols-2 lg:gap-16 lg:items-center",
        className
      )}
    >
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] md:text-3xl">
          <TextGenerateEffect words={title} duration={0.4} />
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{subline}</p>
      </div>
      <ul className="space-y-6">
        {attributes.map((attr, i) => {
          const Icon = ICON_MAP[attr.icon];
          const content = (
            <>
              {Icon && (
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[var(--color-accent)]"
                  aria-hidden
                >
                  <Icon className="h-5 w-5" />
                </span>
              )}
              <div>
                <span className="font-medium text-[var(--text-primary)]">{attr.label}</span>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{attr.line}</p>
              </div>
            </>
          );
          return (
            <li key={attr.label}>
              {reducedMotion ? (
                <div className="flex gap-4">{content}</div>
              ) : (
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: i * 0.1 }}
                >
                  {content}
                </motion.div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default StudioIntroBlock;
export type { StudioIntroAttribute };
