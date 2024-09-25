import { HeroCardProps } from "@/src/typings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React from "react";

const HeroCards = ({ data }: { data: HeroCardProps[] }) =>
  data.map(({ number, line, special, icon }, index) => (
    <div
      key={index}
      className={clsx(
        "relative col-span-1 grid h-36 content-center self-center overflow-hidden rounded-lg border bg-not-black p-2 text-center transition-transform ease-in md:aspect-square md:h-40 md:justify-self-center md:border-2 md:px-4 md:hover:-translate-y-4",
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
      <p className="text-3xl text-inherit md:mb-2 md:text-5xl">{number}</p>
      <p className="text-sm text-inherit lg:text-lg">{line}</p>
    </div>
  ));

export default HeroCards;
