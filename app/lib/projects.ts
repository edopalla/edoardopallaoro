export type Photo = { src: string; width: number; height: number };
export type Project = {
  slug: string;
  title: string;
  story?: string;
  category: string;
  cover?: number;
  photos: Photo[];
};

export const projects: Project[] = [
  {
    slug: "kaltblut-magazine",
    category: "Editorial",
    title: "Kaltblut Magazine",
    photos: [
      { src: "/images/kaltblut-magazine/01.jpg", width: 1440, height: 1800 },
      { src: "/images/kaltblut-magazine/02.jpg", width: 1440, height: 1800 },
      { src: "/images/kaltblut-magazine/03.jpg", width: 1440, height: 1800 },
      { src: "/images/kaltblut-magazine/04.jpg", width: 1440, height: 1800 },
      { src: "/images/kaltblut-magazine/05.jpg", width: 1440, height: 1800 },
    ],
  },
  {
    slug: "tinted-issue",
    category: "Editorial",
    title: "Tinted Issue",
    photos: [
      { src: "/images/tinted-issue/01.jpg", width: 1440, height: 1800 },
      { src: "/images/tinted-issue/02.jpg", width: 1440, height: 1800 },
      { src: "/images/tinted-issue/03.jpg", width: 1440, height: 1800 },
      { src: "/images/tinted-issue/04.jpg", width: 1440, height: 1800 },
      { src: "/images/tinted-issue/05.jpg", width: 1440, height: 1800 },
      { src: "/images/tinted-issue/06.jpg", width: 1440, height: 1800 },
      { src: "/images/tinted-issue/07.jpg", width: 1440, height: 1800 },
      { src: "/images/tinted-issue/08.jpg", width: 1440, height: 1800 },
    ],
  },
  {
    slug: "vanguard-magazine",
    story: "So F*cking Bored",
    cover: 2,
    category: "Editorial",
    title: "Vanguard Magazine",
    photos: [
      { src: "/images/vanguard-magazine/01.jpg", width: 1856, height: 2400 },
      { src: "/images/vanguard-magazine/02.jpg", width: 1856, height: 2400 },
      { src: "/images/vanguard-magazine/03.jpg", width: 1856, height: 2400 },
      { src: "/images/vanguard-magazine/04.jpg", width: 1856, height: 2400 },
      { src: "/images/vanguard-magazine/05.jpg", width: 1856, height: 2400 },
      { src: "/images/vanguard-magazine/06.jpg", width: 1856, height: 2400 },
      { src: "/images/vanguard-magazine/07.jpg", width: 1856, height: 2400 },
      { src: "/images/vanguard-magazine/08.jpg", width: 1856, height: 2400 },
      { src: "/images/vanguard-magazine/09.jpg", width: 1856, height: 2400 },
      { src: "/images/vanguard-magazine/10.jpg", width: 1856, height: 2400 },
    ],
  },
  {
    slug: "le-management",
    category: "Model tests",
    title: "LE Management",
    photos: [
      { src: "/images/le-management/01.jpg", width: 1800, height: 2400 },
      { src: "/images/le-management/02.jpg", width: 2400, height: 1799 },
      { src: "/images/le-management/03.jpg", width: 2400, height: 1799 },
      { src: "/images/le-management/04.jpg", width: 2400, height: 1799 },
      { src: "/images/le-management/05.jpg", width: 1920, height: 2400 },
      { src: "/images/le-management/06.jpg", width: 2400, height: 1800 },
      { src: "/images/le-management/07.jpg", width: 2400, height: 1799 },
      { src: "/images/le-management/08.jpg", width: 2400, height: 1800 },
      { src: "/images/le-management/09.jpg", width: 1920, height: 2400 },
      { src: "/images/le-management/10.jpg", width: 2400, height: 1800 },
      { src: "/images/le-management/11.jpg", width: 1800, height: 2400 },
      { src: "/images/le-management/12.jpg", width: 1920, height: 2400 },
      { src: "/images/le-management/13.jpg", width: 1800, height: 2400 },
      { src: "/images/le-management/14.jpg", width: 1800, height: 2400 },
      { src: "/images/le-management/15.jpg", width: 1800, height: 2400 },
      { src: "/images/le-management/16.jpg", width: 1800, height: 2400 },
      { src: "/images/le-management/17.jpg", width: 1919, height: 2400 },
      { src: "/images/le-management/18.jpg", width: 1800, height: 2400 },
      { src: "/images/le-management/19.jpg", width: 2400, height: 1799 },
      { src: "/images/le-management/20.jpg", width: 1799, height: 2400 },
    ],
  },
  {
    slug: "vero-model-management",
    category: "Model tests",
    title: "Vero Model Management",
    photos: [
      { src: "/images/vero-model-management/01.jpg", width: 1919, height: 2400 },
      { src: "/images/vero-model-management/02.jpg", width: 1919, height: 2400 },
      { src: "/images/vero-model-management/03.jpg", width: 1919, height: 2400 },
      { src: "/images/vero-model-management/04.jpg", width: 1919, height: 2400 },
      { src: "/images/vero-model-management/05.jpg", width: 1919, height: 2400 },
      { src: "/images/vero-model-management/06.jpg", width: 1919, height: 2400 },
      { src: "/images/vero-model-management/07.jpg", width: 1919, height: 2400 },
      { src: "/images/vero-model-management/08.jpg", width: 2400, height: 1800 },
      { src: "/images/vero-model-management/09.jpg", width: 2400, height: 1800 },
      { src: "/images/vero-model-management/10.jpg", width: 2400, height: 1800 },
      { src: "/images/vero-model-management/11.jpg", width: 2400, height: 1800 },
      { src: "/images/vero-model-management/12.jpg", width: 2400, height: 1799 },
      { src: "/images/vero-model-management/13.jpg", width: 1798, height: 2400 },
      { src: "/images/vero-model-management/14.jpg", width: 2400, height: 1800 },
      { src: "/images/vero-model-management/15.jpg", width: 1799, height: 2400 },
      { src: "/images/vero-model-management/16.jpg", width: 2400, height: 1800 },
      { src: "/images/vero-model-management/17.jpg", width: 2400, height: 1800 },
      { src: "/images/vero-model-management/18.jpg", width: 1800, height: 2400 },
      { src: "/images/vero-model-management/19.jpg", width: 2400, height: 1800 },
    ],
  },
];

export const photoCount = projects.reduce((total, project) => total + project.photos.length, 0);

export function findProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
