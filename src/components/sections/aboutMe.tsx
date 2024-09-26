import React, { useState } from "react";
import SkillBricks from "../aboutMe/skillBricks";
import { copyDataProps } from "@/src/typings";
import StoryCorner from "../aboutMe/storyCorner";
import TimeLine from "../aboutMe/timeline";

//TODO - create error boundary

const AboutMe = ({
  skillsData,
  timelineData,
}: {
  skillsData: copyDataProps["skills"];
  timelineData: copyDataProps["timeline"];
}) => {
  const [activeDate, setActiveDate] = useState(0);

  return (
    <section
      id="skills"
      className="flex flex-col items-center bg-brand-yellow/50 p-4 md:p-10"
    >
      <div className="grid w-full items-center gap-x-2 gap-y-4 rounded-md lg:grid-cols-2 lg:grid-rows-[1fr_auto]">
        <div className="lg:col-start-1 lg:row-start-1">
          <StoryCorner />
        </div>
        <div className="lg:col-start-2 lg:row-start-1">
          <SkillBricks data={skillsData} />
        </div>
        <div className="relative row-start-2 my-8 grid grid-flow-row grid-cols-1 grid-rows-1 gap-y-2 md:auto-cols-fr md:grid-flow-col md:gap-x-2 md:pt-4 lg:col-span-2 lg:row-start-2 lg:h-72">
          <TimeLine
            data={timelineData}
            activeDate={activeDate}
            setActiveDate={setActiveDate}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
