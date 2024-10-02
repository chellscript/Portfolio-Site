import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { ProjectTabsProps } from "../../typings";

const PreviousWorkTabs = ({
  data,
  selectedCompanyIndex,
  updateComponentView,
}: ProjectTabsProps) =>
  data.map(({ logo, name, work }, index) => {
    const isSelected = selectedCompanyIndex === index;
    return (
      <button
        key={index}
        aria-label={`${name} Past Work Tab`}
        role="tab"
        aria-selected={isSelected}
        disabled={isSelected}
        className={clsx(
          "relative flex w-auto flex-row items-center gap-x-2 rounded-t-lg border border-b-0 border-not-black p-2 font-blacker text-base transition-all duration-75 ease-in",
          isSelected
            ? "order-first border border-b-0 border-not-black bg-pale bg-work-pattern bg-left-top text-not-black bg-blend-soft-light"
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
          alt=""
          className={clsx(
            "w-6 rounded-full bg-purple-200 md:rounded-none",
            isSelected && "border-2 border-brand-purple",
          )}
        />
        <div
          className={clsx(
            "block text-sm md:text-xl",
            isSelected ? "block" : "text-shadow max-md:hidden",
          )}
        >
          {name}
        </div>
        <div
          className={clsx(
            "absolute -right-2 -top-3 isolate flex aspect-square size-6 flex-col justify-center rounded-full border border-not-black bg-white text-not-black shadow-inner shadow-gray-500/50",
            isSelected && "hidden",
          )}
        >
          {work.length}
        </div>
      </button>
    );
  });
export default PreviousWorkTabs;
