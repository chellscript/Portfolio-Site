import React, { useState } from "react";
import SkillBricks from "./skillBricks";
import { AboutSectionProps } from "@/src/typings";
import StoryCorner from "./storyCorner";
import TimeLine from "./timeline";
import clsx from "clsx";

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
  } = data;

  const [activeDate, setActiveDate] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section
      id="about-me"
      className="flex flex-col items-center bg-orange-400/50 bg-about-pattern p-4 bg-blend-soft-light md:p-10"
    >
      <h2
        className="font-blacker"
        dangerouslySetInnerHTML={{ __html: aboutTitle }}
      />
      <p
        className="mb-5 text-center font-garden_delight text-xl text-not-black md:text-2xl"
        dangerouslySetInnerHTML={{ __html: aboutSubline }}
      />

      <div className="grid w-full auto-rows-min grid-cols-1 grid-rows-[repeat(2,auto)] gap-y-4 md:gap-y-8 lg:max-w-screen-lg">
        <div className="col-span-full col-start-1 row-start-1 grid w-full gap-y-8 max-md:grid-rows-[repeat(2,auto)] max-md:overflow-hidden md:grid-cols-3">
          <div
            className={clsx(
              "col-start-1 row-start-2 max-md:h-fit md:col-span-2 md:col-start-1 md:row-start-1 lg:col-start-1 lg:row-start-1",
              activeSlide == 0
                ? "max-md:animate-sideswipe-left"
                : "max-md:hidden max-md:animate-sideswipe-left-out md:animate-[initial]",
            )}
          >
            <StoryCorner data={story.list} />
          </div>
          <div
            className={clsx(
              "col-start-1 row-start-2 flex size-full flex-col max-md:h-fit md:col-start-3 md:row-start-1",
              activeSlide == 1
                ? "max-md:animate-sideswipe-right"
                : "max-md:hidden max-md:animate-sideswipe-right-out",
            )}
          >
            <TimeLine
              data={timeline.list}
              activeDate={activeDate}
              setActiveDate={setActiveDate}
            />
          </div>
          <div className="col-span-full col-start-1 row-start-1 flex w-full flex-wrap gap-2 p-2 md:hidden">
            {mobileButtons.list.map(({ label, emoji }, index) => (
              <button
                key={index}
                className="cta-button bg-brand-yellow p-2 text-not-black disabled:border-2 disabled:border-white disabled:bg-brand-purple disabled:text-white"
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
          <SkillBricks
            title={skillsTitle}
            subline={skillsSubline}
            data={skills}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
