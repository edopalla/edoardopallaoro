"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Project } from "../lib/projects";
import { padCount } from "../lib/site";

export function StoryList({ projects }: { projects: Project[] }) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  return (
    <main className="relative flex min-h-svh items-center justify-center px-4 py-28">
      <h1 className="sr-only">Stories</h1>
      <div aria-hidden="true" className="fixed inset-0 hidden pointer-fine:block">
        {projects.map((project) => (
          <Image
            key={project.slug}
            src={project.photos[project.cover ?? 0].src}
            alt=""
            fill
            sizes="100vw"
            className={`object-cover transition-opacity duration-700 ease-out ${
              activeSlug === project.slug ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <ol
        onMouseLeave={() => setActiveSlug(null)}
        className="relative z-10 flex w-full max-w-xl flex-col gap-5 text-ink pointer-fine:w-auto pointer-fine:text-white pointer-fine:mix-blend-difference pointer-fine:gap-1.5"
      >
        {projects.map((project) => {
          const cover = project.photos[project.cover ?? 0];
          return (
            <li key={project.slug}>
              <Link
                href={`/${project.slug}`}
                onMouseEnter={() => setActiveSlug(project.slug)}
                onFocus={() => setActiveSlug(project.slug)}
                onBlur={() => setActiveSlug(null)}
                className="flex items-center gap-4 pointer-fine:items-baseline pointer-fine:gap-2"
              >
                <Image
                  src={cover.src}
                  width={cover.width}
                  height={cover.height}
                  alt=""
                  sizes="96px"
                  className="h-20 w-16 shrink-0 object-cover pointer-fine:hidden"
                />
                <span className="flex flex-col gap-1.5 pointer-fine:flex-row pointer-fine:items-baseline pointer-fine:gap-2">
                  <span className="text-[clamp(1.25rem,2.4vw,1.75rem)] leading-tight">{project.title}</span>
                  <span className="label tabular-nums">
                    {project.category}, {padCount(project.photos.length)}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </main>
  );
}
