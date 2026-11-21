"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Project } from "../lib/projects";
import { padCount } from "../lib/site";

type ProjectBlockProps = {
  project: Project;
  initialPhoto: number;
};

export function ProjectBlock({ project, initialPhoto }: ProjectBlockProps) {
  const [current, setCurrent] = useState(initialPhoto);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [side, setSide] = useState<"previous" | "next">("next");
  const cursor = useRef<HTMLSpanElement>(null);
  const photo = project.photos[current];
  const total = project.photos.length;

  const step = (offset: number) => setCurrent((current + offset + total) % total);

  const pick = (index: number) => {
    setCurrent(index);
    setSheetOpen(false);
  };

  const trackPointer = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    setSide(x < bounds.width / 2 ? "previous" : "next");
    if (cursor.current) cursor.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  return (
    <section
      id={project.slug}
      aria-label={project.title}
      className="flex min-h-svh snap-start flex-col items-center justify-center gap-5 px-4 pt-32 pb-12"
    >
      <div
        onPointerMove={trackPointer}
        onClick={() => step(side === "next" ? 1 : -1)}
        className="group relative flex h-[min(64svh,calc((100vw-2rem)*1.25))] w-full cursor-pointer items-center justify-center lg:cursor-none"
      >
        <Image
          key={photo.src}
          src={photo.src}
          width={photo.width}
          height={photo.height}
          alt={`${project.title}, photograph ${current + 1} of ${total}`}
          sizes="(max-width: 768px) 92vw, 50vw"
          className="animate-reveal max-h-full w-auto max-w-full object-contain"
        />
        <span
          ref={cursor}
          aria-hidden="true"
          className="label pointer-events-none absolute top-0 left-0 hidden text-white opacity-0 mix-blend-difference transition-opacity duration-200 group-hover:opacity-100 lg:block"
        >
          <span className="block -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
            {side === "next" ? "Next" : "Previous"} {padCount(current + 1)}/{padCount(total)}
          </span>
        </span>
        <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className="sr-only" />
        <button type="button" onClick={() => step(1)} aria-label="Next photo" className="sr-only" />
      </div>

      <ul className="no-scrollbar flex max-w-full gap-1.5 overflow-x-auto px-1 pt-1 pb-2">
        {project.photos.map((thumb, index) => (
          <li key={thumb.src} className="shrink-0">
            <button
              type="button"
              onClick={() => pick(index)}
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
        <button
          type="button"
          onClick={() => setSheetOpen(!sheetOpen)}
          aria-expanded={sheetOpen}
          className="flex items-baseline gap-1.5 underline-offset-2 hover:underline"
        >
          <span className="label">Images</span>
          <span className="tabular-nums">
            ({padCount(current + 1)}/{padCount(total)}) {sheetOpen ? "(−)" : "(+)"}
          </span>
        </button>
      </div>

      {sheetOpen && (
        <ul className="animate-reveal mt-6 grid w-full max-w-5xl grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-4 lg:grid-cols-6">
          {project.photos.map((item, index) => (
            <li key={item.src}>
              <button
                type="button"
                onClick={() => pick(index)}
                aria-label={`Show photo ${index + 1}`}
                className="flex w-full flex-col items-center gap-2"
              >
                <span className="flex aspect-[4/5] w-full items-center justify-center">
                  <Image
                    src={item.src}
                    width={item.width}
                    height={item.height}
                    alt=""
                    sizes="(max-width: 640px) 30vw, 14vw"
                    className="max-h-full w-auto max-w-full object-contain"
                  />
                </span>
                <span className="label tabular-nums">{padCount(index + 1)}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
