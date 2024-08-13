"use client";

import React, { useEffect, useState } from "react";
import { PastWorkDataProps } from "@/src/typings";
import PreviousProjectTabs from "../previousProjectTabs";
import WorkList from "../pastWorkList";
import WorkDisplay from "../pastWorkDisplay";
import { useMediaQuery } from "react-responsive";

//TODO - create error boundary for lack of data

const Work = ({
  previousWorkData,
}: {
  previousWorkData: PastWorkDataProps[];
}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState<number>(0);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);
  const [focusedProjectIndex, setFocusedProjectIndex] = useState<number>(0); // For mobile only styling

  const updateComponentView = (newCompanyIndex: number) => {
    setSelectedCompanyIndex(newCompanyIndex);
    setSelectedProjectIndex(null);

    isMobile && setFocusedProjectIndex(0);
  };

  return (
    <section
      id="work"
      className="flex snap-y justify-center bg-brand-purple/50 py-10"
    >
      <div className="flex w-[90vw] flex-col content-center lg:max-w-screen-lg">
        <h2 className="mb-8 justify-center">My Past Work</h2>
        <div
          className="flex flex-row place-items-end gap-x-2 self-start justify-self-start"
          role="tablist"
        >
          <PreviousProjectTabs
            data={previousWorkData}
            selectedCompanyIndex={selectedCompanyIndex}
            updateComponentView={updateComponentView}
          />
        </div>
        <div className="min-h-[504px] rounded-md rounded-l-none border border-t-[0.5px] border-not-black border-t-pale bg-pale shadow-thick-hover">
          {selectedProjectIndex == null ? (
            <WorkList
              data={previousWorkData[selectedCompanyIndex].work}
              setSelectedProjectIndex={setSelectedProjectIndex}
              setFocusedProjectIndex={setFocusedProjectIndex}
              focusedProjectIndex={focusedProjectIndex}
            />
          ) : (
            <WorkDisplay
              data={
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
