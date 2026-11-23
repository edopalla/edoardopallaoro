import { access, mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const projectId = "gvymk7te";
const dataset = "production";
const apiVersion = "2025-02-19";
const largestWidth = 2400;
const variantWidths = [480, 960, 1600];
const parallelDownloads = 6;

const root = process.cwd();
const mediaFolder = join(root, "public", "cms");
const contentFile = join(root, "app", "lib", "content.json");

const imageFields = `{
  hotspot,
  "asset": asset->{ _id, url, "width": metadata.dimensions.width, "height": metadata.dimensions.height }
}`;

const query = `{
  "settings": *[_id == "siteSettings"][0]{ name, discipline, email, instagram, description },
  "projects": *[_type == "project" && defined(slug.current) && count(photos) > 0] | order(orderRank) {
    title,
    "slug": slug.current,
    story,
    category,
    "photos": photos[defined(asset)]${imageFields},
    "cover": select(defined(cover.asset) => cover${imageFields})
  }
}`;

async function fetchContent() {
  const url = new URL(`https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`);
  url.searchParams.set("query", query);
  url.searchParams.set("perspective", "published");
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Sanity query failed with ${response.status}: ${await response.text()}`);
  const { result } = await response.json();
  if (!result.settings) throw new Error("Site settings are missing in Sanity.");
  return result;
}

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function download(source, target) {
  if (await exists(target)) return;
  const response = await fetch(source);
  if (!response.ok) throw new Error(`Image download failed with ${response.status}: ${source}`);
  await writeFile(target, Buffer.from(await response.arrayBuffer()));
}

function planImage(image) {
  const { asset, hotspot } = image;
  const name = asset._id.replace(/^image-/, "").replace(/-[a-z0-9]+$/, "");
  const width = Math.min(asset.width, largestWidth);
  const height = Math.round((asset.height * width) / asset.width);
  const files = [{ width, target: `${name}.jpg` }].concat(
    variantWidths.filter((size) => size < width).map((size) => ({ width: size, target: `${name}-${size}.jpg` })),
  );
  return {
    photo: {
      src: `/cms/${name}.jpg`,
      width,
      height,
      ...(hotspot ? { position: `${Math.round(hotspot.x * 100)}% ${Math.round(hotspot.y * 100)}%` } : {}),
    },
    downloads: files.map((file) => ({
      source: `${asset.url}?w=${file.width}&fm=jpg&q=${file.width === width ? 88 : 80}`,
      target: join(mediaFolder, file.target),
    })),
  };
}

async function runInParallel(tasks) {
  const queue = [...tasks];
  const workers = Array.from({ length: parallelDownloads }, async () => {
    while (queue.length > 0) await queue.shift()();
  });
  await Promise.all(workers);
}

const content = await fetchContent();
const downloads = new Map();

const projects = content.projects.map((project) => {
  const photos = project.photos.map((image) => {
    const plan = planImage(image);
    plan.downloads.forEach((file) => downloads.set(file.target, file.source));
    return plan.photo;
  });
  const coverPlan = project.cover ? planImage(project.cover) : null;
  coverPlan?.downloads.forEach((file) => downloads.set(file.target, file.source));
  return {
    slug: project.slug,
    title: project.title,
    ...(project.story ? { story: project.story } : {}),
    category: project.category,
    cover: coverPlan ? coverPlan.photo : photos[0],
    photos,
  };
});

await mkdir(mediaFolder, { recursive: true });
await runInParallel([...downloads].map(([target, source]) => () => download(source, target)));
await writeFile(contentFile, `${JSON.stringify({ settings: content.settings, projects }, null, 2)}\n`);

console.log(`Fetched ${projects.length} stories and ${downloads.size} image files from Sanity.`);
