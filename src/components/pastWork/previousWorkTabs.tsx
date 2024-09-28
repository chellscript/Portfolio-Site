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
        className={clsx(
          "relative flex w-auto flex-row items-center gap-x-2 rounded-t-lg border border-b-0 border-not-black p-2 text-base transition-all",
          isSelected
            ? "border border-b-0 border-not-black bg-pale"
            : "isolate bg-brand-purple",
          name === "Personal Projects" && "order-last",
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
          className={clsx("text-sm md:!block", isSelected ? "block" : "hidden")}
        >
          {name}
        </div>
        <div
          className={clsx(
            "absolute -right-2 -top-3 flex aspect-square size-6 place-content-center rounded-full border border-not-black bg-brand-green text-not-black",
            isSelected && "hidden",
          )}
        >
          {work.length}
        </div>
      </button>
    );
  });
export default PreviousWorkTabs;
