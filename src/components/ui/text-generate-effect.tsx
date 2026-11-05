"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}

export function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5,
}: TextGenerateEffectProps) {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const h = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  const seen = new Map<string, number>();
  const tokens = words.split(" ").map((word) => {
    const occurrence = seen.get(word) ?? 0;
    seen.set(word, occurrence + 1);
    return { word, key: `${word}-${occurrence}` };
  });

  if (!mounted || reducedMotion) {
    return <span className={cn(className)}>{words}</span>;
  }

  return (
    <span className={cn("inline", className)}>
      {tokens.map(({ word, key }, i) => (
        <motion.span
          key={key}
          initial={{ opacity: 0, filter: filter ? "blur(10px)" : "none" }}
          animate={{ opacity: 1, filter: "none" }}
          transition={{ duration, delay: i * 0.05 }}
          className="inline"
        >
          {word}{" "}
        </motion.span>
      ))}
    </span>
  );
}
