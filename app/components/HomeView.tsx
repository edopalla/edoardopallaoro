"use client";

import { useState } from "react";
import { flushSync } from "react-dom";
import type { Project } from "../lib/projects";
import { Frame, type View } from "./Frame";
import { Overview, type Focus } from "./Overview";
import { ProjectIndex } from "./ProjectIndex";

export function HomeView({ projects }: { projects: Project[] }) {
  const [view, setView] = useState<View>("overview");
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [focus, setFocus] = useState<Focus>(null);

  const changeView = (next: View) => {
    flushSync(() => {
      setView(next);
      setHoveredSlug(null);
      setFocus(null);
    });
    window.scrollTo({ top: 0 });
  };

  const openProject = (slug: string) => {
    flushSync(() => {
      setView("overview");
      setHoveredSlug(null);
      setFocus({ slug, photo: 0 });
    });
    document.getElementById(slug)?.scrollIntoView({ behavior: "instant" });
  };

  return (
    <>
      <Frame view={view} projects={projects} onViewChange={changeView} />
      {view === "overview" ? (
        <Overview key={focus ? focus.slug : "start"} projects={projects} focus={focus} />
      ) : (
        <ProjectIndex projects={projects} activeSlug={hoveredSlug} onHover={setHoveredSlug} onOpen={openProject} />
      )}
    </>
  );
}
