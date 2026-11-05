"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface InfiniteMovingCardsProps {
  items: { text: string }[];
  className?: string;
  direction?: "left" | "right";
  speed?: number;
}

/**
 * Horizontal marquee of cards (Aceternity-style).
 * Respects prefers-reduced-motion: no animation, static list.
 */
export function InfiniteMovingCards({
  items,
  className,
  direction = "left",
  speed = 30,
}: InfiniteMovingCardsProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const h = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  const duplicated = ["a", "b"].flatMap((copy) => items.map((item) => ({ copy, text: item.text })));

  if (reducedMotion) {
    return (
      <div className={cn("flex flex-wrap justify-center gap-4 py-6", className)}>
        {items.map((item) => (
          <div
            key={item.text}
            className="rounded-lg border border-zinc-800 bg-zinc-900/80 px-6 py-4 text-zinc-300"
          >
            {item.text}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="flex gap-4"
        animate={{
          x: direction === "left" ? [0, -0.5 * 100 * items.length] : [-0.5 * 100 * items.length, 0],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: speed,
          },
        }}
      >
        {duplicated.map((item) => (
          <div
            key={`${item.copy}-${item.text}`}
            className="shrink-0 rounded-lg border border-zinc-800 bg-zinc-900/80 px-6 py-4 text-zinc-300"
          >
            {item.text}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
