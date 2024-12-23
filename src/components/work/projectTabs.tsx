import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { PreviousWorkSectionProps } from "../../typings";
import { Tab } from "@headlessui/react";

type ProjectTabsProps = {
  data: PreviousWorkSectionProps["companies"]["list"];
  selectedCompanyIndex: number;
};

const ProjectTabs = ({ data, selectedCompanyIndex }: ProjectTabsProps) =>
  data.map(({ logo, companyTitle, projects }, index) => {
    const isSelected = selectedCompanyIndex === index;
    return (
      <Tab
        key={index}
        aria-label={`${companyTitle} Past Work Tab`}
        aria-selected={isSelected}
        disabled={isSelected}
        className={clsx(
          "relative flex w-auto flex-row items-center gap-x-2 rounded-t-lg border border-b-0 border-not-black p-2 font-blacker text-base",
          isSelected
            ? "border border-b-0 border-not-black bg-pale bg-work-pattern bg-fixed bg-left text-not-black bg-blend-normal"
            : "bg-brand-purple text-white hover:text-brand-yellow",
        )}
      >
        <Image
          quality={100}
          width={25}
          height={25}
          src={logo}
          alt={`${logo} logo`}
          className={clsx(
            "w-6 rounded-full md:rounded-none",
            isSelected && "border-2 border-brand-purple",
          )}
        />
        <div
          className={clsx(
            "block text-start text-sm md:text-base lg:text-lg",
            isSelected ? "block" : "text-shadow max-md:hidden",
          )}
        >
          {companyTitle}
        </div>

        <div
          className={clsx(
            "absolute -right-2 -top-3 isolate flex aspect-square size-6 flex-col justify-center rounded-full border border-not-black bg-white text-not-black shadow-inner shadow-gray-500/50",
            isSelected && "hidden",
          )}
        >
          {projects.length}
        </div>
      </Tab>
    );
  });
export default ProjectTabs;
