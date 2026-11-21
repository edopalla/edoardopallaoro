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
    slug: "vanguardmagok",
    story: "So F*cking Bored",
    cover: 2,
    category: "Editorial",
    title: "Vanguard Magazine",
    photos: [
      { src: "/images/vanguardmagok/01.jpg", width: 1856, height: 2400 },
      { src: "/images/vanguardmagok/02.jpg", width: 1856, height: 2400 },
      { src: "/images/vanguardmagok/03.jpg", width: 1856, height: 2400 },
      { src: "/images/vanguardmagok/04.jpg", width: 1856, height: 2400 },
      { src: "/images/vanguardmagok/05.jpg", width: 1856, height: 2400 },
      { src: "/images/vanguardmagok/06.jpg", width: 1856, height: 2400 },
      { src: "/images/vanguardmagok/07.jpg", width: 1856, height: 2400 },
      { src: "/images/vanguardmagok/08.jpg", width: 1856, height: 2400 },
      { src: "/images/vanguardmagok/09.jpg", width: 1856, height: 2400 },
      { src: "/images/vanguardmagok/10.jpg", width: 1856, height: 2400 },
    ],
  },
  {
    slug: "lemanagement",
    category: "Model tests",
    title: "LE Management",
    photos: [
      { src: "/images/lemanagement/01.jpg", width: 1800, height: 2400 },
      { src: "/images/lemanagement/02.jpg", width: 2400, height: 1799 },
      { src: "/images/lemanagement/03.jpg", width: 2400, height: 1799 },
      { src: "/images/lemanagement/04.jpg", width: 2400, height: 1799 },
      { src: "/images/lemanagement/05.jpg", width: 1920, height: 2400 },
      { src: "/images/lemanagement/06.jpg", width: 2400, height: 1800 },
      { src: "/images/lemanagement/07.jpg", width: 2400, height: 1799 },
      { src: "/images/lemanagement/08.jpg", width: 2400, height: 1800 },
      { src: "/images/lemanagement/09.jpg", width: 1920, height: 2400 },
      { src: "/images/lemanagement/10.jpg", width: 2400, height: 1800 },
      { src: "/images/lemanagement/11.jpg", width: 1800, height: 2400 },
      { src: "/images/lemanagement/12.jpg", width: 1920, height: 2400 },
      { src: "/images/lemanagement/13.jpg", width: 1800, height: 2400 },
      { src: "/images/lemanagement/14.jpg", width: 1800, height: 2400 },
      { src: "/images/lemanagement/15.jpg", width: 1800, height: 2400 },
      { src: "/images/lemanagement/16.jpg", width: 1800, height: 2400 },
      { src: "/images/lemanagement/17.jpg", width: 1919, height: 2400 },
      { src: "/images/lemanagement/18.jpg", width: 1800, height: 2400 },
      { src: "/images/lemanagement/19.jpg", width: 2400, height: 1799 },
      { src: "/images/lemanagement/20.jpg", width: 1799, height: 2400 },
    ],
  },
  {
    slug: "veromodelmanagement",
    category: "Model tests",
    title: "Vero Model Management",
    photos: [
      { src: "/images/veromodelmanagement/01.jpg", width: 1919, height: 2400 },
      { src: "/images/veromodelmanagement/02.jpg", width: 1919, height: 2400 },
      { src: "/images/veromodelmanagement/03.jpg", width: 1919, height: 2400 },
      { src: "/images/veromodelmanagement/04.jpg", width: 1919, height: 2400 },
      { src: "/images/veromodelmanagement/05.jpg", width: 1919, height: 2400 },
      { src: "/images/veromodelmanagement/06.jpg", width: 1919, height: 2400 },
      { src: "/images/veromodelmanagement/07.jpg", width: 1919, height: 2400 },
      { src: "/images/veromodelmanagement/08.jpg", width: 2400, height: 1800 },
      { src: "/images/veromodelmanagement/09.jpg", width: 2400, height: 1800 },
      { src: "/images/veromodelmanagement/10.jpg", width: 2400, height: 1800 },
      { src: "/images/veromodelmanagement/11.jpg", width: 2400, height: 1800 },
      { src: "/images/veromodelmanagement/12.jpg", width: 2400, height: 1799 },
      { src: "/images/veromodelmanagement/13.jpg", width: 1798, height: 2400 },
      { src: "/images/veromodelmanagement/14.jpg", width: 2400, height: 1800 },
      { src: "/images/veromodelmanagement/15.jpg", width: 1799, height: 2400 },
      { src: "/images/veromodelmanagement/16.jpg", width: 2400, height: 1800 },
      { src: "/images/veromodelmanagement/17.jpg", width: 2400, height: 1800 },
      { src: "/images/veromodelmanagement/18.jpg", width: 1800, height: 2400 },
      { src: "/images/veromodelmanagement/19.jpg", width: 2400, height: 1800 },
    ],
  },
];
