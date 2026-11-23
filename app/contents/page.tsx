import type { Metadata } from "next";
import { ProjectIndex } from "../components/ProjectIndex";
import { projects } from "../lib/projects";

export const metadata: Metadata = {
  title: "Contents",
};

export default function ContentsPage() {
  return <ProjectIndex projects={projects} />;
}
