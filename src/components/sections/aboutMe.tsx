import React from "react";
import SkillBricks from "../aboutMe/skillBricks";
import { copyDataProps } from "@/src/typings";
import StoryCorner from "../aboutMe/storyCorner";

//TODO - create error boundary

const AboutMe = ({ skillsData }: { skillsData: copyDataProps["skills"] }) => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center bg-brand-yellow/80 p-10"
    >
      <div className="grid w-full items-center gap-x-2 gap-y-4 rounded-md md:max-w-screen-md lg:max-w-screen-lg lg:grid-cols-2 lg:grid-rows-[1fr_auto]">
        <div className="lg:col-start-1 lg:row-start-1">
          <StoryCorner />
        </div>
        <div className="lg:col-start-2 lg:row-start-1">
          <SkillBricks data={skillsData} />
        </div>
        <div className="row-start-2 bg-not-black lg:col-span-2 lg:row-start-2">
          TimeLine
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
