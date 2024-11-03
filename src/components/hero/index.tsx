import Image from "next/image";
import React, { useRef } from "react";
import HeroCards from "./heroCards";
import myself from "/public/images/hero/myself.png";
import myselfWink from "/public/images/hero/myself-wink.png";
import { HeroSectionProps } from "@/src/typings";
import arrow from "/public/images/hero/arrow.svg";

const Hero = ({ data }: { data: HeroSectionProps }) => {
  const { cards } = data;
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <section className="grid min-h-fit w-dvw grid-cols-1 grid-rows-[repeat(2,auto)] items-center justify-items-center gap-y-4 bg-hero bg-cover p-4 pt-8 md:gap-y-[unset] md:p-10">
      {/* In reverse order so peer selectors from hero card work */}
      <div className="peer z-1 flex w-full flex-col self-center overflow-x-hidden p-4 pb-0 max-md:max-w-md md:-mt-20 md:w-auto md:justify-self-center">
        <div
          className="max-md:hover:animation-paused flex flex-row gap-x-1 max-md:animate-marquee md:flex-col lg:flex-nowrap"
          onMouseEnter={() => {
            const hint = ref.current as unknown as HTMLElement;
            if (hint) {
              hint.classList.add("opacity-0");
            }
          }}
        >
          <HeroCards className="md:hidden" data={cards.list} />
          <HeroCards className="peer" data={cards.list} />
        </div>
        <div
          ref={ref}
          className="mt-6 flex items-end justify-end font-homevideo text-lg peer-hover:hidden"
        >
          <Image
            src={arrow}
            className="relative bottom-5 left-2 -z-1 object-cover"
            alt=""
          />
          <div className="text-highlight bg-brand-green/80 text-center text-xl lg:text-xl">
            <span className="md:hidden">Press the cards above...</span>
            <span className="max-md:hidden">Hover over the cards above...</span>
          </div>
        </div>
      </div>{" "}
      <div className="row-start-1 grid min-h-128 w-fit max-w-hero grid-cols-1 grid-rows-[repeat(3,auto)] overflow-hidden rounded-md border border-not-black bg-brand-blue bg-cover shadow shadow-not-black peer-hover:bg-hero-pattern peer-hover:bg-blend-color-dodge md:max-h-144 md:grid-cols-2 md:grid-rows-5 md:justify-items-center peer-hover:[&_img.hero-image:nth-of-type(1)]:hidden peer-hover:[&_img.hero-image:nth-of-type(2)]:static peer-hover:[&_img.hero-image:nth-of-type(2)]:opacity-100">
        <div className="col-span-full col-start-1 row-span-full row-start-1 flex h-full flex-col self-center max-lg:z-1 md:col-span-1 md:row-span-full md:row-start-1 md:justify-center md:self-start md:justify-self-start">
          <h1
            className="max-md:text-shadow-hero-mobile md:text-shadow m-0 flex flex-col items-center justify-between py-2 text-left text-white max-md:h-full max-md:text-center md:h-fit md:p-0 md:pl-10 md:text-start md:text-not-black lg:gap-y-2"
            id="#"
          >
            <span className="flex flex-col *:block max-md:h-full max-md:items-center max-md:justify-between md:gap-y-8">
              <span className="">
                Hey,{" "}
                <span className="font-garden_delight text-white lg:text-6xl">
                  Beautiful
                </span>{" "}
                World!
              </span>
              <span>
                I'm{" "}
                <span className="font-garden_delight text-brand-pink md:text-6xl">
                  Michi
                </span>
              </span>
            </span>
            <span className="inline-block w-fit text-[1.75rem] text-white md:whitespace-nowrap lg:text-4xl">
              <span className="hero-bullet">Front End Developer</span>
              <span className="hero-bullet">
                User-Empathy Enthusiast, <br />
                <span className="relative font-garden_delight text-brand-yellow underline decoration-orange-400 decoration-wavy underline-offset-4">
                  always
                </span>
              </span>
            </span>
          </h1>
        </div>
        <div className="relative col-span-full row-span-full row-start-1 flex items-end justify-self-center overflow-hidden md:col-start-2 md:row-start-1 md:h-full md:self-end md:justify-self-end lg:col-span-1 lg:row-start-1 lg:justify-end">
          <Image
            src={myself}
            priority
            width={500}
            height={700}
            alt="Picture of Michi"
            className="hero-image block"
          />{" "}
          <Image
            src={myselfWink}
            priority
            width={500}
            height={700}
            alt="Picture of Michi Winking!"
            className="hero-image absolute opacity-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
