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
      id="about-me"
      className="flex flex-col items-center bg-orange-400/50 bg-about-pattern p-6 bg-blend-soft-light md:p-10"
    >
      <h2>Who Am I?</h2>
      <div className="max-app-width grid grid-cols-1 grid-rows-[repeat(2,auto)] gap-y-4 md:gap-y-8">
        <div className="col-span-full col-start-1 row-start-1 grid w-full gap-y-8 max-md:grid-rows-[repeat(2,auto)] max-md:overflow-hidden md:grid-cols-2">
          <div
            className={clsx(
              "col-start-1 row-start-2 md:col-start-1 md:row-start-1 lg:col-start-1 lg:row-start-1",
              activeSlide == 0
                ? "max-md:animate-sideswipe-left"
                : "max-md:animate-sideswipe-left-out md:animate-[initial]",
            )}
          >
            <StoryCorner />
          </div>
          <div
            className={clsx(
              "col-start-1 row-start-2 flex w-full justify-center justify-self-end md:col-start-2 md:row-start-1 md:justify-end lg:justify-center",
              activeSlide == 1
                ? "max-md:animate-sideswipe-right"
                : "max-md:animate-sideswipe-right-out",
            )}
          >
            <TimeLine
              data={timelineData}
              activeDate={activeDate}
              setActiveDate={setActiveDate}
            />
          </div>
          <div className="col-span-full col-start-1 row-start-1 flex w-full flex-wrap gap-2 p-2 md:hidden">
            {MobileToggle.map(({ label, emoji }, index) => (
              <button
                key={index}
                className={clsx(
                  "cta-button bg-brand-yellow p-2 disabled:border-2 disabled:border-pale disabled:bg-brand-purple disabled:font-bold disabled:text-pale",
                )}
                disabled={activeSlide == index}
                onClick={() => setActiveSlide(index)}
              >
                {label}
                <span className="inner-shadow-button aspect-square rounded-full border border-orange-950 bg-white px-2 py-1">
                  {emoji}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="col-span-full col-start-1 row-start-2 md:col-span-2">
          <SkillBricks data={skillsData} />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
