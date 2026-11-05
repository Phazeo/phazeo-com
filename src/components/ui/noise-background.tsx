"use client";

import { motion } from "motion/react";
import { type ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/** SVG-based noise texture (light grain). */
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export interface NoiseBackgroundProps {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  /** Gradient colors for the animated layers (e.g. ["rgb(255,100,150)", "rgb(100,150,255)"]). */
  gradientColors?: string[];
  /** Noise overlay opacity 0-1. */
  noiseIntensity?: number;
  /** Speed of gradient animation. */
  speed?: number;
  /** Apply backdrop blur to the container. */
  backdropBlur?: boolean;
  /** Whether gradients are animating. */
  animating?: boolean;
}

const DEFAULT_COLORS = ["rgb(255, 100, 150)", "rgb(100, 150, 255)", "rgb(255, 200, 100)"];

/**
 * Dynamic background with animated gradients and noise texture.
 * Use behind Hero CTAs or sections for a premium, subtle effect.
 */
export function NoiseBackground({
  children,
  className,
  containerClassName,
  gradientColors = DEFAULT_COLORS,
  noiseIntensity = 0.2,
  speed = 0.1,
  backdropBlur = false,
  animating = true,
}: NoiseBackgroundProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const h = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  const shouldAnimate = animating && !reducedMotion;
  const [c1, c2, c3] = gradientColors;

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        backdropBlur && "backdrop-blur-sm",
        containerClassName
      )}
    >
      {/* Animated gradient layers */}
      <motion.div
        className="absolute inset-0"
        initial={shouldAnimate ? { backgroundPosition: "0% 50%" } : undefined}
        animate={
          shouldAnimate
            ? {
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }
            : undefined
        }
        transition={
          shouldAnimate
            ? {
                duration: 20 / speed,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }
            : undefined
        }
        style={{
          background:
            c1 && c2 && c3
              ? `radial-gradient(at 40% 20%, ${c1}, transparent 50%), radial-gradient(at 80% 0%, ${c2}, transparent 50%), radial-gradient(at 0% 50%, ${c3}, transparent 50%)`
              : undefined,
          backgroundSize: shouldAnimate ? "200% 200%" : undefined,
        }}
        aria-hidden
      />
      {/* Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: NOISE_SVG,
          opacity: noiseIntensity,
        }}
        aria-hidden
      />
      {children != null ? <div className={cn("relative z-10", className)}>{children}</div> : null}
    </div>
  );
}
