import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "./lib/projects";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-10 px-4 py-24 text-center">
      <div className="flex flex-col items-center gap-4">
        <p className="label">Error 404</p>
        <h1 className="text-[clamp(1.875rem,4.5vw,3.5rem)] leading-[1.05]">This page is out of frame.</h1>
        <p className="max-w-sm text-[15px] leading-snug">
          The address may have changed, or the page never existed. The work is all still here.
        </p>
      </div>

      <ul className="flex flex-col items-center gap-1 text-[15px]">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/${project.slug}`} className="underline-offset-2 hover:underline">
              {project.title}
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/" className="label underline-offset-2 hover:underline">
        Back to overview
      </Link>
    </main>
  );
}
