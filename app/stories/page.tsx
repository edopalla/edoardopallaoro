import type { Metadata } from "next";
import { StoryList } from "../components/StoryList";
import { projects } from "../lib/projects";

export const metadata: Metadata = {
  title: "Stories",
};

export default function StoriesPage() {
  return <StoryList projects={projects} />;
}
