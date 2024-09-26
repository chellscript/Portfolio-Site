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
      className="flex flex-col items-center bg-brand-yellow/50 p-6 md:p-10"
    >
      <div className="grid w-full justify-items-center gap-x-2 gap-y-4 rounded-md md:grid-cols-2 md:grid-rows-[1fr_auto] md:gap-x-4 md:gap-y-8">
        <div className="items-center self-center lg:col-start-1 lg:row-start-1 lg:w-4/5">
          <StoryCorner />
        </div>{" "}
        <div className="col-start-1 flex size-full w-full justify-end justify-self-end md:col-start-2 md:row-start-1 lg:justify-center">
          <TimeLine
            data={timelineData}
            activeDate={activeDate}
            setActiveDate={setActiveDate}
          />
        </div>
        <div className="md:col-span-2">
          <SkillBricks data={skillsData} />
        </div>
        {/* md:auto-cols-fr md:grid-flow-col md:gap-x-2 md:pt-4 lg:col-span-2 lg:row-start-2 lg:h-72 */}
      </div>
    </section>
  );
};

export default AboutMe;
