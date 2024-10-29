"use client";

import React, { useState } from "react";
import { DataProps } from "@/src/typings";
import PreviousWorkTabs from "./previousWorkTabs";
import ProjectList from "./projectList";
import ProjectDisplay from "./projectDisplay";

const Work = ({ data }: { data: DataProps["previousWork"] }) => {
  const {
    title,
    subline,
    companies: { list },
  } = data;

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
        <h2
          className="text-center"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className="mb-5 text-center font-garden_delight text-xl text-not-black md:text-2xl"
          dangerouslySetInnerHTML={{ __html: subline }}
        />
        <div
          className="mt-5 flex flex-row place-items-end gap-x-2 self-start justify-self-start"
          role="tablist"
        >
          <PreviousWorkTabs
            data={list}
            selectedCompanyIndex={selectedCompanyIndex}
            updateComponentView={updateComponentView}
          />
        </div>
        <div className="z-1 mb-5 rounded-md rounded-l-none border border-t-[0.5px] border-not-black border-t-pale bg-pale bg-work-pattern px-4 py-6 bg-blend-normal shadow shadow-not-black md:p-6">
          {selectedProjectIndex === null ? (
            <ProjectList
              data={list[selectedCompanyIndex].projects}
              setSelectedProjectIndex={setSelectedProjectIndex}
            />
          ) : (
            <ProjectDisplay
              setSelectedProjectIndex={setSelectedProjectIndex}
              companyData={list[selectedCompanyIndex]}
              projectData={
                list[selectedCompanyIndex].projects[selectedProjectIndex]
              }
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
