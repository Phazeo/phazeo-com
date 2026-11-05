"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HoverBorderGradientProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function HoverBorderGradient({
  children,
  className,
  containerClassName,
}: HoverBorderGradientProps) {
  return (
    <div
      className={cn(
        "group relative rounded-xl p-[1px] transition-all duration-300",
        "bg-zinc-800 hover:bg-gradient-to-br hover:from-violet-500/50 hover:via-transparent hover:to-blue-500/50",
        containerClassName
      )}
    >
      <div className={cn("relative rounded-[11px] bg-zinc-900/90 p-6", className)}>{children}</div>
    </div>
  );
}
