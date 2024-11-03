import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {
  faFire,
  faArrowPointer,
  faBuilding,
  faWandMagicSparkles,
  IconDefinition,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentProps } from "react";

type IconMapper = {
  [key: string]: IconDefinition;
};

const IconMapper: IconMapper = {
  faArrowPointer: faArrowPointer,
  faFire: faFire,
  faBuilding: faBuilding,
  faWandMagicSparkles: faWandMagicSparkles,
  github: faGithub,
  "linkedin-in": faLinkedin,
  "file-arrow-down": faFileArrowDown,
};

export const FontAwesomeIconMapper = ({
  icon,
  className = "",
  ...props
}: {
  icon: keyof IconMapper;
  className?: string;
} & Omit<ComponentProps<typeof FontAwesomeIcon>, "icon" | "className">) => {
  return (
    <FontAwesomeIcon icon={IconMapper[icon]} className={className} {...props} />
  );
};
