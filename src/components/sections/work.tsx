"use client";

import React, { useState } from "react";
import { PastWorkDataProps } from "@/src/typings";
import PreviousWorkTabs from "../pastWork/previousWorkTabs";
import ProjectList from "../pastWork/projectList";
import ProjectDisplay from "../pastWork/projectDisplay";

const Work = ({
  previousWorkData,
}: {
  previousWorkData: PastWorkDataProps[];
}) => {
  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState<number>(0);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);

  const updateComponentView = (newCompanyIndex: number) => {
    setSelectedCompanyIndex(newCompanyIndex);
    setSelectedProjectIndex(null);
  };

  // TODO change brand blue to something lighter...define tailwind colors
  return (
    <section
      id="work"
      className="flex justify-center bg-brand-purple/50 p-6 md:p-10"
    >
      <div className="max-app-width flex w-full flex-col justify-items-center">
        <h2 className="text-center">My Past Work</h2>
        <p className="mb-5 text-center font-garden_delight text-xl text-not-black md:text-2xl">
          (Sometimes, a screenshot says it all.)
        </p>
        <div
          className="mt-5 flex flex-row place-items-end gap-x-2 self-start justify-self-start"
          role="tablist"
        >
          <PreviousWorkTabs
            data={previousWorkData}
            selectedCompanyIndex={selectedCompanyIndex}
            updateComponentView={updateComponentView}
          />
        </div>
        <div className="z-1 mb-5 rounded-md rounded-l-none border border-t-[0.5px] border-not-black border-t-pale bg-pale bg-work-pattern px-4 py-6 bg-blend-soft-light shadow shadow-not-black md:p-6">
          {selectedProjectIndex === null ? (
            <ProjectList
              data={previousWorkData[selectedCompanyIndex]}
              setSelectedProjectIndex={setSelectedProjectIndex}
            />
          ) : (
            <ProjectDisplay
              setSelectedProjectIndex={setSelectedProjectIndex}
              companyData={previousWorkData[selectedCompanyIndex]}
              projectData={
                previousWorkData[selectedCompanyIndex].work[
                  selectedProjectIndex
                ]
              }
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
