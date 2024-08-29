import Image from "next/image";
import React from "react";
import { TaglineData } from "@/src/data";
import HeroCards from "../heroCards";
import myself from "/public/images/hero/myself.png";

const Hero = () => (
  <section className="grid min-h-fit w-dvw grid-cols-1 grid-rows-[repeat(3,auto)] items-center justify-items-center gap-y-4 bg-[url('/images/hero/background.jpeg')] bg-cover p-2 pt-8 md:gap-y-[unset] md:p-10 *:md:max-w-screen-md *:lg:max-w-screen-lg">
    <div className="row-start-1 grid min-h-[32rem] w-[90%] grid-cols-1 grid-rows-[minmax(auto,35%)_auto] overflow-hidden rounded-md border border-not-black bg-brand-blue bg-cover p-4 pb-0 shadow-thick-hover md:h-[38rem] md:w-full md:grid-cols-[1fr_2fr] md:grid-rows-[repeat(5,auto)] md:justify-items-center md:pl-10 md:pr-0">
      <h1
        className="col-span-full col-start-1 row-start-1 flex flex-row items-center gap-y-2 self-center md:col-span-1 md:row-span-2 md:row-start-2 md:flex-col md:items-start"
        id="#"
      >
        <span className="block flex-1">
          <div className="text-2xl md:text-4xl">Hey World, I'm</div>
          <span className="text-6xl md:text-7xl">Michi</span>
        </span>
        <span className="block flex-1 text-2xl underline md:text-3xl lg:text-4xl">
          Front End Developer,
          <br />
          <em>User-Empathy Enthusiast.</em>
        </span>
      </h1>
      <div className="relative col-span-full row-span-full row-start-2 md:col-span-full md:col-start-2 md:row-start-1 md:self-end md:justify-self-end">
        <Image
          src={myself}
          alt="Picture of Michi"
          className="object-contain object-bottom md:object-center lg:object-left-bottom"
        />
      </div>
    </div>
    <div className="z-[2] row-start-2 -mt-28 grid grid-cols-[repeat(4,minmax(auto,1fr))] gap-x-2 md:-mt-20 md:gap-x-4">
      <HeroCards data={TaglineData} />
    </div>
  </section>
);

export default Hero;
