"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { Project } from "../lib/projects";
import { padCount } from "../lib/site";

type Side = "previous" | "next";

function sideOf(event: React.MouseEvent<HTMLElement>): Side {
  const bounds = event.currentTarget.getBoundingClientRect();
  return event.clientX - bounds.left < bounds.width / 2 ? "previous" : "next";
}

export function ProjectBlock({ project }: { project: Project }) {
  const [current, setCurrent] = useState(0);
  const [side, setSide] = useState<Side>("next");
  const cursor = useRef<HTMLSpanElement>(null);
  const photo = project.photos[current];
  const total = project.photos.length;

  const step = (offset: number) => setCurrent((current + offset + total) % total);

  const trackPointer = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    setSide(sideOf(event));
    if (cursor.current) {
      cursor.current.style.transform = `translate(${event.clientX - bounds.left}px, ${event.clientY - bounds.top}px)`;
    }
  };

  return (
    <section
      id={project.slug}
      aria-label={project.title}
      className="flex min-h-svh snap-start flex-col items-center justify-center gap-5 px-4 pt-32 pb-12 [@media(max-height:500px)]:pt-24"
    >
      <div
        onPointerMove={trackPointer}
        onClick={(event) => step(sideOf(event) === "next" ? 1 : -1)}
        className="group relative flex h-[min(64svh,calc((100vw-2rem)*1.25))] w-full cursor-pointer touch-manipulation items-center justify-center select-none pointer-fine:cursor-none"
      >
        <Image
          key={photo.src}
          src={photo.src}
          width={photo.width}
          height={photo.height}
          alt={`${project.title}, photograph ${current + 1} of ${total}`}
          sizes="(max-width: 768px) 92vw, 50vw"
          draggable={false}
          className="animate-reveal max-h-full w-auto max-w-full object-contain"
        />
        <span
          ref={cursor}
          aria-hidden="true"
          className="label pointer-events-none absolute top-0 left-0 hidden text-white opacity-0 mix-blend-difference transition-opacity duration-200 group-hover:opacity-100 pointer-fine:block"
        >
          <span className="block -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
            {side === "next" ? "Next" : "Previous"} {padCount(current + 1)}/{padCount(total)}
          </span>
        </span>
        <button type="button" onClick={() => step(-1)} className="sr-only">
          Previous photo
        </button>
        <button type="button" onClick={() => step(1)} className="sr-only">
          Next photo
        </button>
      </div>

      <ul className="no-scrollbar flex max-w-full gap-1.5 overflow-x-auto overscroll-x-contain px-1 pt-1 pb-2">
        {project.photos.map((thumb, index) => (
          <li key={thumb.src} className="shrink-0">
            <button
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Show photo ${index + 1}`}
              aria-current={index === current}
              className={`block border-b pb-1 transition-colors duration-300 ${
                index === current ? "border-ink" : "border-transparent"
              }`}
            >
              <Image
                src={thumb.src}
                width={thumb.width}
                height={thumb.height}
                alt=""
                sizes="64px"
                draggable={false}
                className={`h-9 w-auto transition-[filter] duration-300 ${
                  index === current ? "" : "grayscale hover:grayscale-0"
                }`}
              />
            </button>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-baseline justify-center gap-x-4 gap-y-2 text-center text-[13px]">
        <p className="text-[15px]">{project.title}</p>
        {project.story && <p>{project.story}</p>}
        <p className="flex items-baseline gap-1.5">
          <span className="label">Type</span>
          {project.category}
        </p>
        <p className="flex items-baseline gap-1.5 tabular-nums">
          <span className="label">Images</span>({padCount(current + 1)}/{padCount(total)})
        </p>
        <Link href={`/${project.slug}`} className="flex items-baseline gap-1.5 underline-offset-2 hover:underline">
          <span className="label">View story</span>(+)
        </Link>
      </div>
    </section>
  );
}
