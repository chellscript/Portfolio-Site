import React from "react";
import { PreviousWorkSectionProps, ProjectsListProps } from "../../typings";
import ProjectMedia from "./media";
import ProjectDescription from "./description";
import { Icon } from "@iconify/react/dist/iconify.js";

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
  <div className="grid auto-rows-min grid-cols-1 grid-rows-[repeat(3,auto)] items-start justify-items-center gap-y-4 md:p-4 lg:grid-cols-2 lg:grid-rows-[repeat(2,auto)] lg:gap-x-4">
    <div className="size-full content-start justify-items-center lg:col-span-1 lg:row-span-full lg:pt-16">
      <ProjectMedia
        name={projectData.name}
        media={projectData.media}
        mediaDescription={projectData.mediaDescription}
        mediaType={projectData.mediaType}
      />
    </div>
    <div className="w-full justify-items-center gap-y-2 md:justify-items-start lg:col-span-1 lg:row-span-2 lg:row-start-1 lg:size-full lg:pt-0">
      <ProjectDescription projectData={projectData} companyData={companyData} />
    </div>
    <div className="col-span-full w-full max-lg:row-start-1">
      <button
        className="text-shadow cta-button col-span-1 row-span-1 w-full self-end text-nowrap rounded-lg border bg-brand-purple p-2 text-xl uppercase text-white hover:translate-y-1 max-lg:mx-auto lg:ml-auto lg:w-1/2"
        onClick={() => setSelectedProjectIndex(null)}
      >
        <Icon icon="mingcute:large-arrow-left-fill" className="text-2xl" /> Go
        back
      </button>
    </div>
  </div>
);

export default ProjectDisplay;
