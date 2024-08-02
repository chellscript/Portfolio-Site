import Image from "next/image";
import React from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TaglineData } from "@/src/data";
import myself from "/public/images/hero/myself.png";
import divider from "/public/images/hero/waveDivider.svg";

const Hero = () => (
  <section className="relative grid h-[600px] grid-cols-12 grid-rows-12 justify-items-center bg-[url('/images/hero/background.jpeg')] bg-cover md:min-h-dvh">
    <div className="col-start-2 col-end-12 row-start-1 row-end-12 mx-10 mt-10 grid size-full max-h-[600px] max-w-screen-lg grid-cols-12 grid-rows-12 justify-self-center rounded-md border border-not-black bg-brand-blue bg-cover bg-right bg-repeat-x text-3xl font-bold shadow-thick-hover md:row-end-10 md:mt-12">
      <div className="z-[2] col-start-2 col-end-8 row-start-2 row-end-7 h-fit md:col-start-2 md:col-end-8 md:row-start-3 lg:row-start-5">
        <div className="text-2xl md:text-4xl">Hey World, I'm</div>
        <h1 className="">
          <span className="text-6xl md:text-7xl">Michi</span>
          <div className="text-2xl underline lg:text-4xl">
            Front End Developer,
            <br />
            <em>User-Empathy Enthusiast.</em>
          </div>
        </h1>
      </div>
      <div className="relative col-start-5 col-end-13 row-start-3 row-end-11 bg-cover bg-no-repeat md:col-start-6 md:row-start-2 md:row-end-13">
        <Image
          src={myself}
          fill
          alt="Picture of Michi"
          className="object-contain object-left-bottom drop-shadow-lg md:object-contain lg:object-right-bottom"
        />
      </div>
    </div>
    <div className="z-[2] col-start-1 col-end-13 row-start-11 row-end-12 grid size-full max-w-screen-sm grid-cols-4 gap-x-2 md:col-start-3 md:col-end-11 md:row-start-10 md:row-end-12 md:h-full">
      {TaglineData.map(({ number, line, special, icon }, index) => (
        <div
          key={index}
          className={clsx(
            "relative col-span-1 aspect-square content-baseline self-center overflow-hidden rounded-lg bg-not-black p-2 text-center transition-transform ease-in md:h-auto md:border-2 md:px-4 md:hover:-translate-y-4",
            special
              ? "border-brand-yellow text-brand-yellow"
              : "border-white text-white",
          )}
        >
          <FontAwesomeIcon
            icon={icon}
            className={clsx(
              "absolute left-14 top-4 aspect-square h-[70%] opacity-10",
            )}
          />
          <p className="text-4xl text-inherit md:mb-2 md:text-5xl">{number}</p>
          <p className="text-sm text-inherit lg:text-lg">{line}</p>
        </div>
      ))}
    </div>
    <Image
      src={divider}
      fill
      alt=""
      className="row-start-11 row-end-13 size-full object-cover"
    />
  </section>
);

export default Hero;
