import { HeroCardProps } from "@/src/typings";
import clsx from "clsx";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const HeroCards = ({ data }: { data: HeroCardProps[] }) => (
  <>
    <h3 className="flex items-center bg-pale md:hidden">
      My Stats
      <FontAwesomeIcon icon={faArrowRightLong} fontSize="" />
    </h3>
    {data.map(({ number, line, special, icon }, index) => (
      <div
        key={index}
        className={clsx(
          "relative grid aspect-square w-full min-w-28 auto-cols-fr content-center items-center justify-items-center overflow-hidden rounded-lg border bg-not-black p-2 text-center shadow-orange-950 transition-transform ease-in md:h-36 md:w-auto md:border-2 md:px-4 md:hover:-translate-y-4 lg:h-40 lg:w-auto",
          special
            ? "border-yellow-500 text-yellow-500 hover:border-pink-500 hover:text-pink-500"
            : "border-white text-white",
        )}
      >
        <FontAwesomeIcon
          icon={icon}
          className={clsx(
            "absolute inset-1/2 aspect-square h-[70%] -translate-x-1/2 -translate-y-1/2 opacity-10",
          )}
        />
        <p className="text-2xl text-inherit md:mb-2 md:text-3xl lg:text-5xl">
          {number}
        </p>
        <p className="text-sm text-inherit md:text-base lg:text-lg">{line}</p>
      </div>
    ))}
  </>
);

export default HeroCards;
