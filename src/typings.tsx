import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface HeroCardProps {
  number: number;
  line: string;
  icon: IconDefinition;
  special?: boolean;
}

export interface copyDataProps {
  skills: string[];
  previousWork: PastWorkDataProps[];
  timeline: {
    name: string;
    date: string;
    role?: string;
    description: string;
  }[];
}
export interface PastWorkDataProps {
  name: string;
  duration: string;
  role?: string;
  logo: string;
  work: WorkProps[];
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

export interface WorkProps {
  name: string;
  techUsed: string[];
  cover: string;
  media: string;
  mediaKey: string;
  description: string;
  link?: string;
}
