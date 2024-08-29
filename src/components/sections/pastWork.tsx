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

  return (
    <section
      id="work"
      className="flex snap-y justify-center bg-brand-purple/50 p-10"
    >
      <div className="flex w-[90vw] flex-col content-center lg:max-w-screen-lg">
        <h2 className="mb-4 text-center">My Past Work</h2>
        <div
          className="flex flex-row place-items-end gap-x-2 self-start justify-self-start"
          role="tablist"
        >
          <PreviousWorkTabs
            data={previousWorkData}
            selectedCompanyIndex={selectedCompanyIndex}
            updateComponentView={updateComponentView}
          />
        </div>
        <div className="min-h-[504px] rounded-md rounded-l-none border border-t-[0.5px] border-not-black border-t-pale bg-pale shadow-thick-hover">
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
