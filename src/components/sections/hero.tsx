import Image from "next/image";
import React from "react";
import { TaglineData } from "@/src/data";
import HeroCards from "../heroCards";
import myself from "/public/images/hero/myself.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Hero = () => (
  <section className="grid min-h-fit w-dvw grid-cols-1 grid-rows-[repeat(3,auto)] items-center justify-items-center gap-y-4 bg-hero bg-cover p-6 pt-8 md:gap-y-[unset] md:p-10">
    <div className="row-start-1 grid min-h-[32rem] w-fit grid-cols-1 grid-rows-[repeat(3,auto)] overflow-hidden rounded-md border border-not-black bg-brand-blue bg-cover shadow-lg shadow-not-black md:h-[38rem] md:w-11/12 md:grid-cols-[1fr_2fr] md:grid-rows-5 md:justify-items-center md:pl-10 md:pr-0 md:pt-4 lg:max-w-screen-md">
      <h1
        className="z-1 col-span-full col-start-1 row-span-full row-start-1 flex h-5/6 flex-col justify-between self-center py-4 text-center sm:h-full md:row-span-2 md:row-start-2 md:self-start md:justify-self-start md:p-0 md:text-start lg:gap-y-2"
        id="#"
      >
        <span className="*:block">
          <span className="whitespace-nowrap">Hey World, I'm</span>
          <span className="text-5xl md:text-6xl">Michi</span>
        </span>
        <span className="text-xl underline md:text-3xl lg:text-4xl">
          Front End Developer,
          <br />
          <em>User-Empathy Enthusiast.</em>
        </span>
      </h1>
      <div className="relative col-span-full row-span-full row-start-1 flex items-end justify-self-center overflow-hidden md:col-start-2 md:row-start-2 md:self-end md:justify-self-end lg:col-span-1 lg:row-start-1 lg:h-full lg:justify-end">
        <Image
          src={myself}
          alt="Picture of Michi"
          className="object-cover object-top max-md:max-w-[400px] max-sm:object-top sm:object-cover md:h-full md:max-h-[unset] md:object-center lg:h-4/5 lg:w-auto lg:object-contain"
        />
      </div>
    </div>
    <div className="max-web-size z-1 col-span-1 row-start-2 grid w-full auto-cols-min grid-flow-col gap-x-2 self-center overflow-x-auto sm:justify-center md:-mt-20 md:max-w-screen-md md:auto-cols-fr md:gap-0 md:gap-x-4 md:justify-self-center md:overflow-visible">
      <h3 className="flex items-center bg-pale md:hidden">
        My Stats
        <FontAwesomeIcon icon={faArrowRightLong} fontSize="" />
      </h3>
      <HeroCards data={TaglineData} />
    </div>
  </section>
);

export default Hero;
