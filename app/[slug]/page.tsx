import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findProject, padCount, projects } from "../lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = findProject(slug);
  if (!project) return {};
  const cover = project.cover;
  return {
    title: project.title,
    description: `${project.title}${project.story ? `, ${project.story}` : ""}. ${project.category} by Edoardo Pallaoro, ${project.photos.length} images.`,
    openGraph: { images: [{ url: cover.src, width: cover.width, height: cover.height }] },
  };
}

export default async function ProjectPage(props: PageProps<"/[slug]">) {
  const { slug } = await props.params;
  const project = findProject(slug);
  if (!project) notFound();

  const position = projects.indexOf(project);
  const next = projects[(position + 1) % projects.length];
  const nextCover = next.cover;
  const total = project.photos.length;

  return (
    <main>
      <header className="flex min-h-[62svh] flex-col items-center justify-center gap-4 px-4 pt-24 pb-12 text-center">
        <h1 className="text-[clamp(1.875rem,4.5vw,3.5rem)] leading-[1.05]">{project.title}</h1>
        <dl className="flex flex-wrap items-baseline justify-center gap-x-5 gap-y-2 text-[13px]">
          {project.story && (
            <div className="flex items-baseline gap-1.5">
              <dt className="label">Story</dt>
              <dd>{project.story}</dd>
            </div>
          )}
          <div className="flex items-baseline gap-1.5">
            <dt className="label">Type</dt>
            <dd>{project.category}</dd>
          </div>
          <div className="flex items-baseline gap-1.5">
            <dt className="label">Images</dt>
            <dd className="tabular-nums">({padCount(total)})</dd>
          </div>
        </dl>
      </header>

      <ol className="flex flex-col items-center gap-[14svh] px-4">
        {project.photos.map((photo, index) => (
          <li key={photo.src} className="flex w-full flex-col items-center gap-3">
            <Image
              src={photo.src}
              width={photo.width}
              height={photo.height}
              alt={`${project.title}, photograph ${index + 1} of ${total}`}
              sizes="(max-width: 768px) 100vw, 75vw"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              className="h-auto max-h-[88svh] w-auto max-w-full"
            />
            <p className="label tabular-nums">
              {padCount(index + 1)}/{padCount(total)}
            </p>
          </li>
        ))}
      </ol>

      <nav aria-label="Next project" className="flex flex-col items-center gap-5 px-4 pt-[18svh] pb-16 text-center lg:pb-24">
        <Link href={`/${next.slug}`} className="group flex flex-col items-center gap-4">
          <span className="label">Next story</span>
          <Image
            src={nextCover.src}
            width={nextCover.width}
            height={nextCover.height}
            alt=""
            sizes="160px"
            className="h-40 w-auto grayscale transition-[filter] duration-500 group-hover:grayscale-0"
          />
          <span className="text-[clamp(1.5rem,3vw,2.25rem)] leading-tight">{next.title}</span>
        </Link>
        <Link href="/stories" className="text-[13px] underline-offset-2 hover:underline">
          All stories
        </Link>
      </nav>
    </main>
  );
}
