"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

interface EncryptedTextProps {
  text: string;
  decryptedText?: string;
  className?: string;
}

/**
 * Text that scrambles on idle and reveals decrypted text on hover (Aceternity-style).
 */
export function EncryptedText({
  text,
  decryptedText = "Coming soon",
  className,
}: EncryptedTextProps) {
  const [display, setDisplay] = useState(text);
  const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval> | null>(null);

  const scramble = () => {
    let count = 0;
    const id = setInterval(() => {
      setDisplay(
        decryptedText
          .split("")
          .map((_, i) => {
            if (i < count) return decryptedText[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      count += 1 / 3;
      if (count >= decryptedText.length) {
        clearInterval(id);
        setDisplay(decryptedText);
      }
    }, 30);
    setIntervalId(id);
  };

  const handleMouseEnter = () => {
    if (intervalId) clearInterval(intervalId);
    scramble();
  };

  const handleMouseLeave = () => {
    if (intervalId) clearInterval(intervalId);
    setIntervalId(null);
    setDisplay(text);
  };

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: decorative hover scramble; the text is readable and unchanged without it
    <span
      className={cn("font-mono", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {display}
    </span>
  );
}
