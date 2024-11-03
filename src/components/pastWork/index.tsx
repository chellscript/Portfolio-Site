import React, { useState } from "react";
import { PreviousWorkSectionProps } from "@/src/typings";
import PreviousWorkTabs from "./previousWorkTabs";
import ProjectList from "./projectList";
import ProjectDisplay from "./projectDisplay";
import clsx from "clsx";

const Work = ({ data }: { data: PreviousWorkSectionProps }) => {
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
        <p className="subline" dangerouslySetInnerHTML={{ __html: subline }} />
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
        <div className="relative z-1 mb-5 overflow-hidden rounded-md rounded-l-none border-t-[0.5px] bg-pale bg-work-pattern bg-repeat px-4 py-6 bg-blend-normal shadow shadow-not-black md:p-6">
          {selectedProjectIndex === null ? (
            list.map((company, index) => (
              <ProjectList
                className={clsx(
                  "transition-all duration-500 ease-in-out",
                  selectedCompanyIndex === index
                    ? "pointer-events-auto static animate-sideswipe-left opacity-100"
                    : "pointer-events-none absolute inset-0 animate-sideswipe-left-out opacity-0",
                )}
                aria-hidden={selectedCompanyIndex !== index}
                key={index}
                data={company.projects}
                setSelectedProjectIndex={setSelectedProjectIndex}
              />
            ))
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
