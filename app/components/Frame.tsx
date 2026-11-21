import type { Project } from "../lib/projects";
import { site } from "../lib/site";

export type View = "overview" | "index";

type FrameProps = {
  view: View;
  projects: Project[];
  onViewChange: (view: View) => void;
};

const corner = "fixed z-40 text-white mix-blend-difference";

export function Frame({ view, projects, onViewChange }: FrameProps) {
  const photoCount = projects.reduce((total, project) => total + project.photos.length, 0);

  return (
    <>
      <div className={`${corner} top-4 left-4 flex flex-col gap-1.5 lg:left-5`}>
        <button type="button" onClick={() => onViewChange("overview")} className="label text-left">
          {site.name}
        </button>
        <p className="hidden text-[13px] leading-none lg:block">{site.discipline}</p>
      </div>

      <nav aria-label="View" className={`${corner} label top-4 right-4 flex gap-1.5 lg:right-5`}>
        <ViewButton active={view === "overview"} onClick={() => onViewChange("overview")}>
          Overview
        </ViewButton>
        <span aria-hidden="true">/</span>
        <ViewButton active={view === "index"} onClick={() => onViewChange("index")}>
          Index
        </ViewButton>
      </nav>

      <div className={`${corner} bottom-4 left-5 hidden items-baseline gap-2 lg:flex`}>
        <span className="label">Archive</span>
        <span className="text-[13px] leading-none">
          {projects.length} stories, {photoCount} images
        </span>
      </div>

      <div className={`${corner} right-5 bottom-4 hidden items-baseline gap-2 lg:flex`}>
        <span className="label">E.</span>
        <a href={`mailto:${site.email}`} className="text-[13px] leading-none underline-offset-2 hover:underline">
          {site.email}
        </a>
      </div>
    </>
  );
}

function ViewButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`transition-opacity duration-300 ${active ? "" : "opacity-40 hover:opacity-100"}`}
    >
      {children}
    </button>
  );
}
