import React, { useState } from "react";
import { PreviousWorkSectionProps } from "@/src/typings";
import ProjectTabs from "./projectTabs";
import ProjectList from "./projectList";
import ProjectDisplay from "./display";
import clsx from "clsx";
import { marked } from "marked";

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

  const backgroundImage =
    "bg-[url('https://res.cloudinary.com/michasaportfolio/image/upload/v1730911301/pattern_cbhxxo.svg')]";

  return (
    <section
      id="portfolio"
      className="flex justify-center bg-brand-purple/50 p-6 md:p-10"
    >
      <div className="max-app-width flex w-full flex-col justify-items-center">
        <h2 className="text-center">{title}</h2>
        <div
          className="subline"
          dangerouslySetInnerHTML={{
            __html: marked.parse(subline, { async: false }),
          }}
        />
        <div
          className="mt-5 flex flex-row place-items-end gap-x-2 self-start justify-self-start"
          role="tablist"
        >
          <ProjectTabs
            data={list}
            selectedCompanyIndex={selectedCompanyIndex}
            updateComponentView={updateComponentView}
          />
        </div>
        <div
          className={clsx(
            "relative z-1 mb-5 overflow-hidden rounded-md rounded-l-none border-t-[0.5px] bg-pale bg-repeat px-4 py-6 bg-blend-normal shadow shadow-not-black md:p-6",
            backgroundImage,
          )}
        >
          {selectedProjectIndex === null ? (
            list.map((company, index) => (
              <ProjectList
                className={clsx(
                  "transition-all duration-500 ease-in-out",
                  selectedCompanyIndex === index
                    ? "pointer-events-auto static animate-sideswipe-top-in opacity-100"
                    : "pointer-events-none absolute inset-0 opacity-0",
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
