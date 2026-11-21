"use client";

import Image from "next/image";
import type { Project } from "../lib/projects";
import { padCount } from "../lib/site";

type ProjectIndexProps = {
  projects: Project[];
  activeSlug: string | null;
  onHover: (slug: string | null) => void;
  onOpen: (slug: string) => void;
};

export function ProjectIndex({ projects, activeSlug, onHover, onOpen }: ProjectIndexProps) {
  return (
    <main className="relative flex h-svh items-center justify-center overflow-hidden px-4">
      <h1 className="sr-only">Index of work by Edoardo Pallaoro</h1>
      <div aria-hidden="true" className="fixed inset-0">
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
        onMouseLeave={() => onHover(null)}
        className="relative z-10 flex flex-col gap-1.5 text-white mix-blend-difference"
      >
        {projects.map((project) => {
          return (
            <li key={project.slug}>
              <button
                type="button"
                onMouseEnter={() => onHover(project.slug)}
                onFocus={() => onHover(project.slug)}
                onClick={() => onOpen(project.slug)}
                className="flex items-baseline gap-x-2 text-left outline-none"
              >
                <span className="text-[clamp(1.25rem,2.4vw,1.75rem)] leading-tight">{project.title}</span>
                <span className="label tabular-nums">
                  {project.category}, {padCount(project.photos.length)}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </main>
  );
}
