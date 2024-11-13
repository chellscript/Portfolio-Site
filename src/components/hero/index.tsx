"use client";

import Image from "next/image";
import React, { useRef } from "react";
import HeroCards from "./heroCards";
import { HeroSectionProps } from "@/src/typings";
import myself from "/public/images/hero/myself_exnvyb.webp";
import myselfWink from "/public/images/hero/myself-wink_sotgys.webp";
import HeroBullet from "@/src/components/criticalIcons/HeroBullet";
import Arrow from "../criticalIcons/Arrow";

const Hero = ({ data }: { data: HeroSectionProps }) => {
  const { cards } = data;

  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <section className="bg-hero-bg grid min-h-fit w-dvw grid-cols-1 grid-rows-[repeat(2,auto)] items-center justify-items-center gap-y-4 bg-pale bg-cover p-4 pt-12 bg-blend-soft-light md:gap-y-[unset] md:p-10">
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
          <Arrow />
          <div className="text-highlight bg-brand-green/80 text-center text-xl lg:text-xl">
            <span className="md:hidden">Press the cards above...</span>
            <span className="max-md:hidden">Hover over the cards above...</span>
          </div>
        </div>
      </div>{" "}
      <div className="[&_img.hero-image:nth-of-type(1)]:hero-show [&_img.hero-image:nth-of-type(2)]:hero-hidden peer-hover:[&_img.hero-image:nth-of-type(2)]:hero-show peer-hover:[&_img.hero-image:nth-of-type(1)]:hero-hidden row-start-1 grid min-h-128 w-fit max-w-hero overflow-hidden rounded-md border border-not-black bg-brand-blue bg-cover shadow shadow-not-black peer-hover:bg-hero-hidden peer-hover:bg-blend-color-burn md:max-h-144 md:grid-cols-2 md:grid-rows-5 md:justify-items-center">
        <div className="col-span-full col-start-1 row-span-full row-start-1 flex h-full flex-col self-center max-lg:z-1 md:col-span-1 md:row-span-full md:row-start-1 md:justify-center md:self-start md:justify-self-start">
          <h1 className="sr-only">
            Hello, Beautiful World! My name is Michi and I am Front End
            Developer, and User-Empathy Enthusiast, always! This is my portfolio
            site.
          </h1>
          <h1
            aria-hidden
            className="max-md:text-shadow-hero-mobile md:text-shadow m-0 flex flex-col items-center justify-between py-2 text-left text-white max-md:h-full max-md:text-center md:h-fit md:p-0 md:pl-10 md:text-start md:text-not-black lg:gap-y-2"
            id="#"
          >
            <span className="flex flex-col *:block max-md:h-full max-md:items-center max-md:justify-between md:gap-y-8">
              <span className="max-md:px-4">
                Hey,{" "}
                <span className="font-garden_delight text-brand-green md:text-white lg:text-6xl">
                  eautifu
                </span>{" "}
                World!
              </span>
              <span>
                I'm{" "}
                <span className="font-garden_delight text-brand-pink md:text-6xl">
                  Mii!
                </span>
              </span>
            </span>
            <span className="inline-block w-fit text-[1.75rem] text-white md:whitespace-nowrap lg:text-4xl">
              <span className="block gap-x-1 xs:flex xs:items-baseline max-xs:[&_svg]:hidden">
                <HeroBullet /> Front End Developer
              </span>
              <span className="block gap-x-1 xs:flex xs:items-baseline max-xs:[&_svg]:hidden">
                <HeroBullet />
                <span>
                  User-Empathy Enthusiast, <br />
                  <span className="relative font-garden_delight text-amber-300 underline decoration-red-400 decoration-wavy decoration-2 underline-offset-4">
                    alwas
                  </span>
                </span>
              </span>
            </span>
          </h1>
        </div>
        <div className="relative col-span-full row-span-full row-start-1 flex items-end justify-self-center overflow-hidden md:col-start-2 md:row-start-1 md:h-full md:self-end md:justify-self-end lg:col-span-1 lg:row-start-1 lg:justify-end">
          <Image
            src={myself}
            priority
            quality={100}
            width={400}
            height={437}
            sizes="(max-width: 375px) 400px,(max-width: 768px) 400px,(min-width: 1024px) 389px"
            alt="Picture of Michi"
            className="hero-image"
          />{" "}
          <Image
            src={myselfWink}
            quality={100}
            width={400}
            height={437}
            sizes="(max-width: 375px) 400px,(max-width: 768px) 400px,(min-width: 1024px) 389px"
            alt="Picture of Michi Winking!"
            className="hero-image hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
