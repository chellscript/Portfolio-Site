import React, { useState } from "react";
import SkillBricks from "../aboutMe/skillBricks";
import { copyDataProps } from "@/src/typings";
import StoryCorner from "../aboutMe/storyCorner";
import TimeLine from "../aboutMe/timeline";
import clsx from "clsx";

//TODO - create error boundary

const MobileToggle = [
  { label: "About Me", emoji: "💁🏾‍♀️" },
  { label: "Career Timeline", emoji: "✨" },
];

const AboutMe = ({
  skillsData,
  timelineData,
}: {
  skillsData: copyDataProps["skills"];
  timelineData: copyDataProps["timeline"];
}) => {
  const [activeDate, setActiveDate] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section
      id="skills"
      className="flex flex-col items-center bg-brand-yellow/50 p-6 md:p-10"
    >
      <h2>Who Am I?</h2>
      <div className="max-web-size grid w-full justify-items-center gap-8 overflow-hidden rounded-md md:grid-cols-2 md:grid-rows-[1fr_auto] md:gap-x-4 md:gap-y-8">
        <div className="col-span-full col-start-1 row-start-2 flex w-full flex-wrap gap-2 p-2 md:hidden">
          {MobileToggle.map(({ label, emoji }, index) => (
            <button
              key={index}
              // change to shadow-orange-950
              className={clsx(
                "outer-shadow-button flex grow flex-nowrap items-center justify-center gap-x-2 rounded-2xl border border-not-black bg-brand-yellow p-2 font-semibold text-black transition-colors disabled:border-2 disabled:border-pale disabled:bg-brand-purple disabled:font-bold disabled:text-pale",
              )}
              disabled={activeSlide == index}
              onClick={() => setActiveSlide(index)}
            >
              {label}
              <span className="inner-shadow-button aspect-square rounded-full border border-orange-950 bg-white p-2">
                {emoji}
              </span>
            </button>
          ))}
        </div>
        <div
          className={clsx(
            "col-start-1 row-start-1 w-full md:col-start-1 md:row-start-1 lg:col-start-1 lg:row-start-1",
            activeSlide == 0
              ? "animate-sideswipe-left"
              : "animate-sideswipe-left-out md:animate-[initial]",
          )}
        >
          <StoryCorner />
        </div>
        <div
          className={clsx(
            "col-start-1 row-start-1 flex size-full w-full justify-center justify-self-end md:col-start-2 md:row-start-1 md:justify-end lg:justify-center",
            activeSlide == 1
              ? "animate-sideswipe-right"
              : "animate-sideswipe-right-out md:animate-[initial]",
          )}
        >
          <TimeLine
            data={timelineData}
            activeDate={activeDate}
            setActiveDate={setActiveDate}
          />
        </div>
        <div className="md:col-span-2">
          <SkillBricks data={skillsData} />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
