"use client";

import { cn } from "@/lib/utils";

interface DotGridBackgroundProps {
  className?: string;
  dotOpacity?: number;
}

export function DotGridBackground({ className, dotOpacity = 0.15 }: DotGridBackgroundProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0", className)}
      aria-hidden="true"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,${dotOpacity}) 1px, transparent 0)`,
        backgroundSize: "24px 24px",
      }}
    />
  );
}
