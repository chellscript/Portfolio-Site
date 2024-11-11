import React, { Fragment, useState } from "react";
import { PreviousWorkSectionProps, ProjectsListProps } from "@/src/typings";
import ProjectTabs from "./projectTabs";
import ProjectList from "./projectList";
import clsx from "clsx";
import { marked } from "marked";
import dynamic from "next/dynamic";
import { TabGroup, TabList, TabPanels } from "@headlessui/react";

const LazyProjectDisplay = dynamic<{
  companyData: PreviousWorkSectionProps["companies"]["list"][number];
  projectData: ProjectsListProps;
  setSelectedProjectIndex: (arg: null) => void;
}>(() => import("./display"));

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
      id="portfolio"
      className="flex justify-center bg-brand-purple/50 p-6 md:p-10"
    >
      <TabGroup
        manual
        className="max-app-width flex w-full flex-col justify-items-center"
        selectedIndex={selectedCompanyIndex}
        onChange={(index) => {
          updateComponentView(index);
        }}
      >
        <h2 className="text-center">{title}</h2>
        <div
          className="subline"
          dangerouslySetInnerHTML={{
            __html: marked.parse(subline, { async: false }),
          }}
        />
        <TabList className="mt-5 flex flex-row place-items-end gap-x-2 self-start justify-self-start">
          <ProjectTabs
            data={list}
            selectedCompanyIndex={selectedCompanyIndex}
          />
        </TabList>
        <div className="bg-work-pattern relative z-1 mb-5 overflow-hidden rounded-md rounded-l-none border-t-[0.5px] bg-pale bg-repeat px-4 py-6 bg-blend-normal shadow shadow-not-black md:p-6">
          {selectedProjectIndex === null ? (
            <TabPanels as={Fragment}>
              {list.map((company, index) => (
                <ProjectList
                  key={index}
                  className={clsx(
                    "transition-all duration-500 ease-in-out",
                    selectedCompanyIndex === index
                      ? "pointer-events-auto static animate-sideswipe-top-in opacity-100"
                      : "pointer-events-none absolute inset-0 opacity-0",
                  )}
                  isSelected={index === selectedCompanyIndex}
                  data={company.projects}
                  setSelectedProjectIndex={setSelectedProjectIndex}
                />
              ))}
            </TabPanels>
          ) : (
            <LazyProjectDisplay
              setSelectedProjectIndex={setSelectedProjectIndex}
              companyData={list[selectedCompanyIndex]}
              projectData={
                list[selectedCompanyIndex].projects[selectedProjectIndex]
              }
            />
          )}
        </div>
      </TabGroup>
    </section>
  );
};

export default Work;
