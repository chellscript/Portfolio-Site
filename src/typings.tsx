import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface HeroCardProps {
  number: number;
  line: string;
  icon: IconDefinition;
  special?: boolean;
}

export interface dataProps {
  hero: {
    cards: {
      list: {
        key: string;
        number: number;
        line: string;
        icon: string;
        special: boolean;
      }[];
    };
  };
  about: {
    aboutTitle: string;
    aboutSubline: string;
    skillsTitle: string;
    skillsSubline: string;
    skills: string;
    timelineTitle: string;
    mobileButtons: { list: { label: string; emoji: string }[] };
    story: {
      list: { title: string; content: string }[];
    };
    timeline: {
      list: {
        title: string;
        date: string;
        role?: string;
        content: string;
        type: "life" | "work" | "special";
      }[];
    };
  };
  contact: { list: { key: string; label: string; url: string }[] };
  previousWork: { list: PastWorkDataProps[] };
}

export interface PastWorkDataProps {
  key: string;
  title: string;
  duration?: string;
  role?: string;
  logo: string;
  projects: ProjectsProps[];
}

export interface ProjectsProps {
  name: string;
  description: string;
  cover: string;
  screenshot: string;
  techUsed: string;
  externalLink?: string;
  githubLink?: string;
}

export interface ProjectListProps {
  data: PastWorkDataProps;
  setSelectedProjectIndex: (arg: number) => void;
}

export interface ProjectTabsProps {
  data: PastWorkDataProps[];
  selectedCompanyIndex: number;
  updateComponentView: (arg: number) => void;
}
