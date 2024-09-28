import {
  faFire,
  IconDefinition,
  faArrowPointer,
  faBuilding,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

interface HeroCardProps {
  number: number;
  line: string;
  icon: IconDefinition;
  special?: boolean;
}

export const MySkills = [
  "React",
  "Next.js",
  "Typescript",
  "HTML & CSS",
  "Figma",
  "APIs",
  "Javascript",
  "Accessibility",
  "UX/UI Design",
  "E2E Testing",
  "Tailwind",
  "Svelte",
];

export const TaglineData: HeroCardProps[] = [
  {
    number: MySkills.length,
    line: "Technical Skills",
    icon: faArrowPointer,
  },
  {
    number: 5,
    line: "Years of Experience",
    icon: faFire,
  },
  {
    number: 2,
    line: "Companies\n ",
    icon: faBuilding,
  },
  {
    number: 1,
    line: "Creative Dev to Hire",
    icon: faWandMagicSparkles,
    special: true,
  },
];
