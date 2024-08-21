import React from "react";
import { PastWorkDataProps, WorkProps } from "../../typings";
import ProjectMedia from "./projectMedia";
import ProjectDescription from "./projectDescription";

const ProjectDisplay = ({
  companyData,
  projectData,
  setSelectedProjectIndex,
}: {
  companyData: PastWorkDataProps;
  projectData: WorkProps;
  setSelectedProjectIndex: (arg: null) => void;
}) => (
  <div className="grid h-full grid-cols-1 grid-rows-3 items-center justify-items-center gap-y-6 p-4 md:grid-rows-4 lg:grid-cols-8 lg:grid-rows-1 lg:justify-start lg:gap-x-4">
    <div className="debug relative row-span-1 flex size-full flex-col items-center justify-center border md:row-span-2 lg:col-span-4 lg:row-span-1">
      <ProjectMedia mediaSrc={projectData.media} />
    </div>
    <div className="debug row-span-2 grid size-full grid-cols-1 grid-rows-6 items-center justify-items-center lg:col-span-4 lg:row-span-1 lg:grid-rows-6">
      <ProjectDescription projectData={projectData} companyData={companyData} />
      <button
        className="col-span-1 row-span-1 w-1/2 rounded-lg bg-brand-purple p-1 font-bold text-white shadow-thick shadow-not-black hover:shadow-thick-hover hover:shadow-not-black"
        onClick={() => setSelectedProjectIndex(null)}
      >
        {/* TODO - turn border and padding into reusable style */}
        <div className="text-nowrap rounded-lg border-2 border-white p-1">
          Go back
        </div>
      </button>
    </div>
  </div>
);

export default ProjectDisplay;
