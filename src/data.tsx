import {
  faFire,
  IconDefinition,
  faArrowPointer,
  faBuilding,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

interface TaglineDataProps {
  number: number;
  line: string;
  icon: IconDefinition;
  special?: boolean;
}

export const MySkills = [
  "React",
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

export const TaglineData: TaglineDataProps[] = [
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
    line: "Companies",
    icon: faBuilding,
  },
  {
    number: 1,
    line: "Versatile Dev to Hire",
    icon: faWandMagicSparkles,
    special: true,
  },
];
