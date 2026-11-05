"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import type { Product, ProductStatusType } from "@/data/products";
import { cn } from "@/lib/utils";

interface FeaturedProjectsBlockProps {
  title: string;
  subline: string;
  projects: readonly Product[];
  className?: string;
}

function StatusBadge({ status }: { status: ProductStatusType }) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
        Live
      </span>
    );
  }
  if (status === "released") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 px-2.5 py-0.5 text-xs font-medium text-sky-400">
        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" aria-hidden />
        Released
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-400">
      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden />
      In development
    </span>
  );
}

export default function FeaturedProjectsBlock({
  title,
  subline,
  projects,
  className,
}: FeaturedProjectsBlockProps) {
  return (
    <section
      id="projects"
      className={cn(
        "relative border-t border-[var(--border-subtle)] bg-[var(--surface-1)] py-20 md:py-28",
        className
      )}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] md:text-3xl">
          {title}
        </h2>
        <p className="mt-2 text-[var(--text-muted)]">{subline}</p>
        <div className="mt-12 grid gap-8 md:gap-10 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <HoverBorderGradient
              key={project.name}
              className="flex min-h-[280px] flex-col overflow-hidden p-0"
            >
              <div className={cn("h-28 shrink-0 bg-gradient-to-br", project.gradient)} />
              <div className="flex min-h-[200px] flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    {project.name}
                  </h3>
                  <StatusBadge status={project.status} />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  {project.description}
                </p>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-[var(--color-accent)] transition-colors hover:underline"
                  >
                    {project.linkLabel ?? "Learn more"}
                    <span className="sr-only"> about {project.name}</span>
                    <span aria-hidden>→</span>
                  </a>
                )}
              </div>
            </HoverBorderGradient>
          ))}
        </div>
      </div>
    </section>
  );
}
