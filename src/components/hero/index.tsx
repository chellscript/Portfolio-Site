import Image from "next/image";
import React from "react";
import HeroCards from "./heroCards";
import myself from "/public/images/hero/myself.png";
import scribble from "/public/images/hero/scribble.svg";
import { dataProps } from "@/src/typings";

const Hero = ({ data }: { data: dataProps["hero"] }) => {
  const { cards } = data;
  return (
    <section className="grid min-h-fit w-dvw grid-cols-1 grid-rows-[repeat(2,auto)] items-center justify-items-center gap-y-4 bg-hero bg-cover p-6 pt-8 md:gap-y-[unset] md:p-10">
      {/* In reverse order so peer selectors from hero card work */}
      <div className="peer z-1 w-full self-center overflow-x-hidden p-4 max-md:max-w-md md:-mt-20 md:w-auto md:justify-self-center">
        {/*  */}
        <div className="max-md:hover:animation-paused flex flex-row gap-x-1 max-md:animate-marquee md:flex-col">
          <HeroCards data={cards.list} />
          <span className="md:hidden">
            {" "}
            <HeroCards data={cards.list} />
          </span>
        </div>
      </div>{" "}
      <div className="row-start-1 grid min-h-128 w-fit max-w-hero grid-cols-1 grid-rows-[repeat(3,auto)] overflow-hidden rounded-md border border-not-black bg-brand-blue bg-cover shadow shadow-not-black peer-hover:bg-hero-pattern peer-hover:bg-blend-screen peer-hover:transition-all md:max-h-144 md:grid-cols-2 md:grid-rows-5 md:justify-items-center">
        <div className="col-span-full col-start-1 row-span-full row-start-1 flex h-full flex-col self-center max-lg:z-1 md:col-span-1 md:row-span-full md:row-start-1 md:justify-center md:self-start md:justify-self-start">
          <h1
            className="text-shadow m-0 flex flex-col items-center justify-between py-2 text-left text-white max-md:h-full max-md:text-center md:h-fit md:p-0 md:pl-10 md:text-start md:text-not-black lg:gap-y-2"
            id="#"
          >
            <span className="flex flex-col *:block max-md:h-full max-md:items-center max-md:justify-between md:gap-y-8">
              <span className="">
                Hey,{" "}
                <span className="font-caffie_lofie text-5xl text-not-black md:text-white lg:text-6xl">
                  Beautiful
                </span>{" "}
                World!
              </span>
              <span>
                I'm{" "}
                <span className="font-caffie_lofie text-5xl text-brand-pink md:text-6xl">
                  Michi
                </span>
              </span>
            </span>
            <span className="inline-block w-fit text-3xl text-white md:whitespace-nowrap lg:text-4xl">
              <span className="hero-bullet">Front End Developer</span>
              <span className="hero-bullet">
                User-Empathy Enthusiast, <br />
                <span className="relative font-caffie_lofie text-brand-yellow">
                  always
                  <Image
                    src={scribble}
                    className="absolute left-2 top-9 -z-1 scale-150 object-cover"
                    alt=""
                  />
                </span>
              </span>
            </span>
          </h1>
        </div>
        <div className="relative col-span-full row-span-full row-start-1 flex items-end justify-self-center overflow-hidden md:col-start-2 md:row-start-2 md:h-full md:self-end md:justify-self-end lg:col-span-1 lg:row-start-1 lg:justify-end">
          <Image
            src={myself}
            alt="Picture of Michi"
            className="object-cover object-top max-md:max-w-[400px] max-sm:object-cover max-sm:object-top md:h-full md:object-center lg:h-4/5 lg:w-auto lg:object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
