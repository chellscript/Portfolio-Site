import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { PreviousWorkSectionProps } from "../../typings";

type ProjectTabsProps = {
  data: PreviousWorkSectionProps["companies"]["list"];
  selectedCompanyIndex: number;
  updateComponentView: (arg: number) => void;
};

const backgroundImage =
  "bg-[url('https://res.cloudinary.com/michasaportfolio/image/upload/v1730911301/pattern_cbhxxo.svg')]";

const ProjectTabs = ({
  data,
  selectedCompanyIndex,
  updateComponentView,
}: ProjectTabsProps) =>
  data.map(({ logo, companyTitle, projects }, index) => {
    const isSelected = selectedCompanyIndex === index;
    return (
      <button
        key={index}
        aria-label={`${companyTitle} Past Work Tab`}
        role="tab"
        aria-selected={isSelected}
        disabled={isSelected}
        className={clsx(
          "relative flex w-auto flex-row items-center gap-x-2 rounded-t-lg border border-b-0 border-not-black p-2 font-blacker text-base",
          isSelected
            ? `border border-b-0 border-not-black bg-pale bg-[length:580px] bg-left bg-repeat text-not-black bg-blend-normal ${backgroundImage}`
            : "bg-brand-purple text-white hover:text-brand-yellow",
        )}
        onClick={() => {
          if (!isSelected) updateComponentView(index);
        }}
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
      </button>
    );
  });
export default ProjectTabs;
