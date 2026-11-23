import Link from "next/link";
import { photoCount, projects } from "../lib/projects";
import { site } from "../lib/site";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 px-4 pt-16 pb-[max(2rem,env(safe-area-inset-bottom))] text-center text-[13px] lg:hidden">
      <a href={`mailto:${site.email}`} className="underline-offset-2 hover:underline">
        {site.email}
      </a>
      <Link href="/contents" className="flex items-baseline gap-2">
        <span className="label">Archive</span>
        {projects.length} stories, {photoCount} images
      </Link>
      <p className="text-muted">© {site.name}</p>
    </footer>
  );
}
