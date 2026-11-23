"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { photoCount, projects } from "../lib/projects";
import { site } from "../lib/site";

const corner = "fixed z-40 text-white mix-blend-difference";

export function Frame() {
  const pathname = usePathname();

  return (
    <>
      <div className={`${corner} top-[max(1rem,env(safe-area-inset-top))] left-4 flex flex-col gap-1.5 lg:left-5`}>
        <Link href="/" className="label">
          {site.name}
        </Link>
        <p className="hidden text-[13px] leading-none lg:block">{site.discipline}</p>
      </div>

      <nav
        aria-label="Main"
        className={`${corner} label top-[max(1rem,env(safe-area-inset-top))] right-4 flex gap-1.5 lg:right-5`}
      >
        <NavLink href="/" active={pathname === "/"}>
          Overview
        </NavLink>
        <span aria-hidden="true">/</span>
        <NavLink href="/contents" active={pathname.startsWith("/contents")}>
          Contents
        </NavLink>
      </nav>

      <Link href="/contents" className={`${corner} bottom-4 left-5 hidden items-baseline gap-2 lg:flex`}>
        <span className="label">Archive</span>
        <span className="text-[13px] leading-none">
          {projects.length} stories, {photoCount} images
        </span>
      </Link>

      <div className={`${corner} right-5 bottom-4 hidden items-baseline gap-2 lg:flex`}>
        <span className="label">E.</span>
        <a href={`mailto:${site.email}`} className="text-[13px] leading-none underline-offset-2 hover:underline">
          {site.email}
        </a>
      </div>
    </>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`transition-opacity duration-300 ${active ? "" : "opacity-40 hover:opacity-100"}`}
    >
      {children}
    </Link>
  );
}
