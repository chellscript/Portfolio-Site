import React from "react";
import { PreviousWorkSectionProps, ProjectsListProps } from "../../typings";
import ProjectMedia from "./projectMedia";
import ProjectDescription from "./projectDescription";

type ProjectDisplayProps = {
  companyData: PreviousWorkSectionProps["companies"]["list"][number];
  projectData: ProjectsListProps;
  setSelectedProjectIndex: (arg: null) => void;
};

const ProjectDisplay = ({
  companyData,
  projectData,
  setSelectedProjectIndex,
}: ProjectDisplayProps) => (
  <div className="grid h-full grid-cols-1 grid-rows-3 items-center justify-items-center gap-x-4 gap-y-6 md:grid-rows-4 md:p-4 lg:grid-cols-8 lg:grid-rows-1 lg:justify-start lg:gap-x-2">
    <div className="row-span-1 grid size-full grid-rows-1 items-center justify-center border md:row-span-2 lg:col-span-4 lg:row-span-1 lg:grid-rows-[0.5fr_2fr_1fr] lg:justify-evenly">
      <ProjectMedia screenshotLink={projectData.screenshot} />
    </div>
    <div className="row-span-2 grid size-full grid-cols-1 grid-rows-6 items-center justify-items-center gap-y-6 lg:col-span-4 lg:row-span-1 lg:grid-rows-6">
      <ProjectDescription
        projectData={projectData}
        companyData={companyData}
        setSelectedProjectIndex={setSelectedProjectIndex}
      />
    </div>
  </div>
);

export default ProjectDisplay;
