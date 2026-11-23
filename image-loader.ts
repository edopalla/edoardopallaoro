import { projects } from "./app/lib/content";

const variants = [480, 960, 1600];

const sourceWidths = new Map(
  projects.flatMap((project) => [project.cover, ...project.photos].map((photo) => [photo.src, photo.width] as const)),
);

export default function imageLoader({ src, width }: { src: string; width: number }) {
  const sourceWidth = sourceWidths.get(src) ?? 0;
  const variant = variants.find((size) => size >= width && size < sourceWidth);
  return variant ? src.replace(/\.jpg$/, `-${variant}.jpg`) : src;
}
