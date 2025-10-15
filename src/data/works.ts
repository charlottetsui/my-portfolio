export type Work = {
  id: number;
  slug: string;
  image: string;
  title: string;
  description?: string;
  href?: string;
};

export const works: Work[] = [
  {
    id: 1,
    slug: "sas-filament-ui-system",
    image: "/images/SAS_BANNER.png",
    title: "SAS Filament UI System",
    description:
      "Led the end-to-end development of S.C.O.U.T., a static code analysis tool, and developed ZeroState, a new Filament UI component adopted across SAS internal applications.",
    href: "/work/sas",
  },
  {
    id: 2,
    slug: "centible",
    image: "/images/CENTIBLE_BANNER.png",
    title: "Centible",
    description:
      "Developing new iOS features for Centible, a personal finance app focused on helping college students manage their finances.",
    href: "/work/centible",
  },
  {
    id: 3,
    slug: "campusnav",
    image: "/images/campusnav_banner.png",
    title: "CampusNav",
    description:
      "Designed and built a campus navigation app that visualizes course schedules through interactive maps, enhancing the student experience with intuitive route planning.",
    href: "/work/campusnav",
  },
  // {
  //   id: 4,
  //   slug: "bytenotes",
  //   image: "/images/BYTENOTES_BANNER.png",
  //   title: "ByteNotes",
  //   description:
  //     "Developed an interactive, real-time code editing platform that blends markdown authoring and live execution, delivering a collaborative student user experience.",
  //   href: "/work/bytenotes",
  // },
];

export default works;
