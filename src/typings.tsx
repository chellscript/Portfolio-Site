import {
  faFire,
  IconDefinition,
  faArrowPointer,
  faBuilding,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

export interface TaglineDataProps {
  number: number;
  line: string;
  icon: IconDefinition;
  special?: boolean;
}

export interface copyDataProps {
  skills: string[];
  previousWork: PastWorkDataProps[];
}
export interface PastWorkDataProps {
  name: string;
  duration: string;
  symbol: string;
  work: WorkProps[];
}
export interface PastWorkListProps {
  data: PastWorkDataProps["work"];
  setSelectedProjectIndex: (arg: number) => void;
  focusedProjectIndex: number;
  setFocusedProjectIndex: (arg: number) => void;
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
  description: string;
  link?: string;
}
