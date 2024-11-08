import IconMapper from "@/src/utils/iconMapper";
import { HeroSectionProps } from "@/src/typings";
import clsx from "clsx";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const HeroCards = ({
  data,
  className,
}: {
  data: HeroSectionProps["cards"]["list"];
  className?: string;
}) => (
  <div
    className={clsx(
      "col-span-1 row-start-2 grid auto-cols-min grid-flow-col gap-x-1 md:auto-cols-fr md:gap-0 md:gap-x-4",
      className,
    )}
  >
    {data.map(({ number, line, special, icon }, index) => (
      <div
        key={index}
        className={clsx(
          "relative aspect-square w-full min-w-28 auto-cols-fr items-center justify-center justify-items-center overflow-hidden rounded-lg border bg-not-black p-2 text-center font-blacker shadow-orange-950 transition-transform ease-in md:h-36 md:w-auto md:border-2 md:px-4 md:hover:-translate-y-4 lg:w-auto",

          special
            ? "border-yellow-500 text-yellow-500"
            : "border-white text-white",
        )}
      >
        <Icon
          icon={IconMapper[icon]}
          className={clsx(
            "absolute inset-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 text-8xl opacity-20 md:text-9xl",
          )}
        />
        <div className="flex size-full flex-col justify-center">
          {" "}
          <span className="text-3xl leading-none text-inherit shadow-sm md:text-4xl">
            {number}
          </span>
          <span className="text-inherit shadow-sm md:text-lg lg:text-xl">
            {line}
          </span>
        </div>
      </div>
    ))}{" "}
  </div>
);

export default HeroCards;
