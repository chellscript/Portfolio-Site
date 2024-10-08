import { HeroCardProps } from "@/src/typings";
import clsx from "clsx";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeroCards = ({ data }: { data: HeroCardProps[] }) => (
  <div className="col-span-1 row-start-2 grid auto-cols-min grid-flow-col gap-x-1 md:auto-cols-fr md:gap-0 md:gap-x-4">
    {data.map(({ number, line, special, icon }, index) => (
      <div
        key={index}
        className={clsx(
          "relative flex aspect-square w-full min-w-28 auto-cols-fr flex-col content-center items-center justify-center justify-items-center overflow-hidden rounded-lg border bg-not-black p-2 text-center font-blacker shadow-orange-950 transition-transform ease-in md:h-36 md:w-auto md:border-2 md:px-4 md:hover:-translate-y-4 lg:w-auto",
          special
            ? "border-yellow-500 text-yellow-500"
            : "border-white text-white",
        )}
      >
        <FontAwesomeIcon
          icon={icon}
          className={clsx(
            "absolute inset-1/2 aspect-square h-[70%] -translate-x-1/2 -translate-y-1/2 opacity-10",
          )}
        />
        <p className="text-3xl text-inherit md:mb-2 md:text-4xl lg:text-4xl">
          {number}
        </p>
        <p className="text-inherit md:text-lg lg:text-xl">{line}</p>
      </div>
    ))}{" "}
  </div>
);

export default HeroCards;
