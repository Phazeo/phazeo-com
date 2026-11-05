"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroHighlightProps {
  children: ReactNode;
  className?: string;
  highlight?: string;
}

export function HeroHighlight({ children, className, highlight }: HeroHighlightProps) {
  if (!highlight || typeof children !== "string") {
    return <span className={cn(className)}>{children}</span>;
  }
  const escaped = highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = (children as string).split(new RegExp(`(${escaped})`, "i"));
  return (
    <span className={cn(className)}>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span
            key={i}
            className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent"
          >
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}
