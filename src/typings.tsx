export interface DataProps {
  navigation: NavigationProps;
  hero: HeroSectionProps;
  about: AboutSectionProps;
  contact: ContactSectionProps;
  previousWork: PreviousWorkSectionProps;
  footer: FooterProps;
}

export interface NavigationProps {
  list: {
    key: string;
    url: string;
    label: string;
  }[];
}
export interface FooterProps {
  copyright: string;
  attributions: string;
  links: { list: { key: string; icon: string; url: string }[] };
}

// SECTIONS

export interface HeroSectionProps {
  cards: {
    list: {
      key: string;
      number: number;
      line: string;
      icon: string;
      special: boolean;
    }[];
  };
}

export interface AboutSectionProps {
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
    list: TimelineProps[];
  };
}
export interface TimelineProps {
  title: string;
  date: string;
  role?: string;
  image: string;
  alt: string;
  content: string;
  type: "life" | "work" | "special";
}

export interface PreviousWorkSectionProps {
  title: string;
  subline: string;
  companies: { list: CompaniesDataProps[] };
}

export interface CompaniesDataProps {
  key: string;
  companyTitle: string;
  duration?: string;
  role?: string;
  logo: string;
  projects: ProjectsListProps[];
}

export interface ProjectsListProps {
  name: string;
  description: string | null;
  cover: string;
  media: string;
  mediaDescription?: string;
  mediaType: "image" | "video";
  techUsed: string;
  externalLink?: string;
  githubLink?: string;
}

export interface ContactSectionProps {
  title: string;
  subline: string;
  employMe: string;
  contactMe: string;
  links: {
    list: {
      key: string;
      label: string;
      logo: string;
      url: string;
    }[];
  };
}
