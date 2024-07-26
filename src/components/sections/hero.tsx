import Image from "next/image";
import React from "react";
import myself from "../../images/myself.png";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  IconDefinition,
  faArrowPointer,
  faBuilding,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

interface TaglineDataProps {
  number: number;
  line: string;
  icon: IconDefinition;
  special?: boolean;
}

const TaglineData: TaglineDataProps[] = [
  {
    number: 0,
    line: "Technical Skills",
    icon: faArrowPointer,
  },
  {
    number: 5,
    line: "Years of Experience",
    icon: faFire,
  },
  {
    number: 2,
    line: "Companies",
    icon: faBuilding,
  },
  {
    number: 1,
    line: "Versatile Dev to Hire",
    icon: faWandMagicSparkles,
    special: true,
  },
];

const Hero = () => {
  let sharedRow = "";
  return (
    <section className="grid h-[600px] grid-cols-12 grid-rows-12  justify-items-center bg-[url('../images/hero.jpeg')] bg-cover md:min-h-[80vh]">
      <div className="col-start-2 col-end-12 row-start-1 row-end-12 mx-10 mt-10 grid size-full max-h-[600px] max-w-screen-lg grid-cols-12 grid-rows-12 justify-self-center text-clip border border-not-black bg-[url('../images/blobby.svg')] bg-cover bg-right bg-repeat-x text-3xl font-bold md:row-end-10 md:mt-12">
        <div
          className={clsx(
            "z-10 col-start-2 col-end-8 row-start-2 row-end-7 h-fit md:col-start-2 md:col-end-8 md:row-start-3 lg:row-start-3",
            sharedRow,
          )}
        >
          <h3 className="text-2xl md:text-4xl">Hey World, I'm</h3>
          <h1>
            <span className="text-6xl md:text-7xl ">Michi Sam</span>
            <span className="block text-2xl italic underline md:text-3xl">
              Front End Developer,
              <br />
              User-Empathy Enthusiast.
            </span>
          </h1>
        </div>
        <div
          className={clsx(
            "relative col-start-5 col-end-13 row-start-3 row-end-11 text-clip  md:col-start-6 md:row-start-2 md:row-end-13",
          )}
        >
          <Image
            src={myself}
            fill
            alt="Picture of Michi"
            className="object-cover object-left-bottom  md:object-contain  lg:object-right-bottom"
          />
        </div>
      </div>
      <div className="z-10 col-start-1 col-end-13 row-start-11 row-end-12 grid size-full max-w-screen-sm grid-cols-4 gap-x-2 md:col-start-3 md:col-end-11 md:row-start-10 md:row-end-12 md:h-full">
        {TaglineData.map(({ number, line, special, icon }, index) => (
          <div
            key={index}
            className={clsx(
              "relative col-span-1 aspect-square self-center overflow-hidden rounded-lg border-pale bg-not-black p-2 text-center transition-transform ease-in md:h-auto md:border-2 md:px-4 md:hover:-translate-y-4",
              special ? "  text-brand-green" : "text-white",
            )}
          >
            <FontAwesomeIcon
              icon={icon}
              className={clsx(
                "absolute left-14 top-4 aspect-square h-[70%] opacity-10",
              )}
            />{" "}
            <p className="text-4xl text-inherit lg:mb-2 lg:text-5xl">
              {number}
            </p>
            <p className="text-sm text-inherit lg:text-lg">{line}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
