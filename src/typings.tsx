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

export interface DataProps {
  data: {
    skills: string[];
    pastWork: PastWorkDataProps[];
  };
}

export interface PastWorkDataProps {
  name: string;
  duration: string;
  symbol: string;
  work: ExampleWorkProps[];
}

export interface ExampleWorkProps {
  name: string;
  cover: string;
  media: string;
  description: string;
  link?: string;
}
