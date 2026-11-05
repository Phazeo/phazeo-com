"use client";

import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";
import { BackgroundGradient } from "./background-gradient";

interface Domain {
  name: string;
  available: boolean;
  url?: string;
}

interface DomainsBackgroundProps {
  domains: Domain[];
}

export function DomainsBackground({ domains }: DomainsBackgroundProps) {
  return (
    <BackgroundBeamsWithCollision className="min-h-fit py-24 md:py-32 bg-neutral-950">
      <div className="relative z-20 mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Premium Domains
          </h2>
          <p className="mt-4 text-neutral-400">Curated collection of premium domain names</p>
        </div>

        {/* Domains grid with gradient cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {domains.map((domain) => (
            <BackgroundGradient
              key={domain.name}
              className="rounded-[22px] p-4 sm:p-6 bg-neutral-900"
              containerClassName="rounded-[22px]"
              animate={domain.available}
            >
              <div className="flex flex-col gap-2">
                {domain.url ? (
                  <a
                    href={domain.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-mono text-base transition-colors hover:opacity-80 ${domain.available ? "text-white" : "text-neutral-500 line-through"}`}
                  >
                    {domain.name}
                  </a>
                ) : (
                  <span
                    className={`font-mono text-base ${domain.available ? "text-white" : "text-neutral-500 line-through"}`}
                  >
                    {domain.name}
                  </span>
                )}
                {domain.available ? (
                  <span className="inline-flex w-fit items-center rounded-full bg-purple-500/10 px-2.5 py-0.5 text-xs font-medium text-purple-400">
                    Available
                  </span>
                ) : (
                  <span className="inline-flex w-fit items-center rounded-full bg-red-500/10 px-2.5 py-0.5 text-xs font-medium text-red-400">
                    Sold
                  </span>
                )}
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
