import content from "./content.json";

export type Photo = {
  src: string;
  width: number;
  height: number;
  position?: string;
};

export type Project = {
  slug: string;
  title: string;
  story?: string;
  category: string;
  cover: Photo;
  photos: Photo[];
};

export type Settings = {
  name: string;
  discipline: string;
  email: string;
  instagram: string;
  description: string;
};

export const site: Settings = content.settings;

export const projects: Project[] = content.projects;

export function findProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function padCount(value: number) {
  return String(value).padStart(2, "0");
}
