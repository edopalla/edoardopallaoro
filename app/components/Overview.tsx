"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import type { Project } from "../lib/content";
import { ProjectBlock } from "./ProjectBlock";

const stackStep = 19;

export function Overview({ projects }: { projects: Project[] }) {
  const jumpTo = (slug: string) => document.getElementById(slug)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="relative flex flex-col [--stack-top:3rem] lg:[--stack-top:1rem]">
      <h1 className="sr-only">Edoardo Pallaoro, fashion and portrait photographer</h1>
      {projects.map((project, index) => {
        const cover = project.cover;
        return (
          <Fragment key={project.slug}>
            <figure className="shrink-0 snap-start">
              <Link href={`/${project.slug}`} aria-label={`Open ${project.title}`} className="block w-full">
                <Image
                  src={cover.src}
                  width={cover.width}
                  height={cover.height}
                  alt={`${project.title}, cover`}
                  sizes="100vw"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  className="h-auto w-full"
                />
              </Link>
            </figure>

            <h2
              style={{ top: `calc(var(--stack-top) + ${index * stackStep}px)` }}
              className="pointer-events-none sticky z-30 mt-12 flex h-0 items-start justify-center px-4 text-white mix-blend-difference"
            >
              <button
                type="button"
                onClick={() => jumpTo(project.slug)}
                className="pointer-events-auto max-w-full truncate text-[15px] leading-tight"
              >
                {project.title}
              </button>
            </h2>

            <div className="-mt-12">
              <ProjectBlock project={project} />
            </div>
          </Fragment>
        );
      })}
      <span
        aria-hidden="true"
        className="scroll-progress fixed top-1/2 right-2.5 z-40 h-28 w-px origin-top -translate-y-1/2 bg-white mix-blend-difference"
      />
    </main>
  );
}
