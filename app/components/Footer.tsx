import { site } from "../lib/content";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 px-4 pt-16 pb-[max(2rem,env(safe-area-inset-bottom))] text-center text-[13px] lg:hidden">
      <a href={`mailto:${site.email}`} className="underline-offset-2 hover:underline">
        {site.email}
      </a>
      <a
        href={`https://www.instagram.com/${site.instagram}/`}
        target="_blank"
        rel="noreferrer"
        className="underline-offset-2 hover:underline"
      >
        @{site.instagram}
      </a>
      <p className="text-muted">© {site.name}</p>
    </footer>
  );
}
