"use client";

import React, { useState } from "react";
import SkillBricks from "./skillBricks";
import { AboutSectionProps } from "@/src/typings";
import StoryCorner from "./storyCorner";
import TimeLine from "./timeline";
import clsx from "clsx";

const MobileButtons = ({
  mobileButtons,
  activeSlide,
  setActiveSlide,
}: {
  mobileButtons: AboutSectionProps["mobileButtons"];
  activeSlide: number;
  setActiveSlide: (arg: number) => void;
}) => {
  return mobileButtons.list.map(({ label, emoji }, index) => (
    <button
      key={index}
      className="cta-button bg-brand-yellow p-2 font-blacker text-not-black disabled:border-2 disabled:border-white disabled:bg-brand-purple disabled:text-white"
      disabled={activeSlide == index}
      onClick={() => setActiveSlide(index)}
    >
      {label}
      <span className="inner-shadow-button aspect-square rounded-full border border-orange-950 bg-white px-2 py-1">
        {emoji}
      </span>
    </button>
  ));
};
const AboutMe = ({ data }: { data: AboutSectionProps }) => {
  const {
    skills,
    story,
    timeline,
    aboutTitle,
    aboutSubline,
    skillsTitle,
    skillsSubline,
    mobileButtons,
    timelineTitle,
  } = data;

  const [activeDate, setActiveDate] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="grid w-full auto-rows-min grid-cols-1 grid-rows-[repeat(2,auto)] flex-col items-center *:p-4 md:*:p-10">
      <section
        id="about"
        className="flex w-full justify-center bg-orange-400/50 bg-about-pattern bg-repeat bg-blend-soft-light max-md:overflow-hidden *:lg:max-w-screen-lg"
      >
        <div className="col-span-full col-start-1 row-start-1 grid gap-y-8 max-md:grid-rows-[repeat(3,auto)] md:grid-cols-2">
          <div className="col-span-full col-start-1 row-start-2 flex w-full flex-wrap gap-2 p-2 md:hidden">
            <MobileButtons
              mobileButtons={mobileButtons}
              activeSlide={activeSlide}
              setActiveSlide={setActiveSlide}
            />
          </div>
          <div className="col-span-full row-start-1 text-center">
            <h2 className="font-blacker">{aboutTitle}</h2>
            <p className="subline">{aboutSubline}</p>
          </div>
          <div
            className={clsx(
              "col-start-1 row-start-3 max-md:h-fit md:col-span-full md:col-start-1 md:row-start-2",
              activeSlide == 0
                ? "max-md:animate-sideswipe-left"
                : "max-md:hidden max-md:animate-sideswipe-left-out md:animate-[initial]",
            )}
          >
            <StoryCorner data={story.list} />
          </div>
          <div
            className={clsx(
              "col-start-1 row-start-3 max-md:h-fit md:col-span-full md:row-start-3",
              activeSlide == 1
                ? "max-md:animate-sideswipe-right"
                : "max-md:hidden max-md:animate-sideswipe-right-out",
            )}
          >
            <h2 className="mb-8 text-center max-md:hidden">{timelineTitle}</h2>
            <TimeLine
              data={timeline.list}
              activeDate={activeDate}
              setActiveDate={setActiveDate}
            />
          </div>
        </div>
      </section>
      <section
        id="skills"
        className="col-span-full col-start-1 row-start-2 flex flex-col items-center bg-red-400/50 bg-skills-pattern bg-blend-color md:col-span-2 *:lg:max-w-screen-lg"
      >
        <span className="mb-4 text-center">
          <h2 className="mb-0 text-center">{skillsTitle}</h2>
          <p className="subline">{skillsSubline}</p>
        </span>
        <SkillBricks data={skills} />
      </section>
    </div>
  );
};

export default AboutMe;
