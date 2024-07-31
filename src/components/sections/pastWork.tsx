import React, { useState } from "react";
import { PastWorkDataProps } from "@/src/typings";
import PreviousProjectTabs from "../previousProjectTabs";
import WorkList from "../pastWorkList";
import WorkDisplay from "../pastWorkDisplay";

const Work = ({ pastWork }: { pastWork: PastWorkDataProps[] }) => {
  const [visibleCompanyIndex, setVisibleCompanyIndex] = useState<number>(0);
  const [visibleWorkIndex, setVisibleWorkIndex] = useState<number | null>(null);

  const resetComponentView = (newCompanyIndex: number) => {
    setVisibleCompanyIndex(newCompanyIndex);
    setVisibleWorkIndex(null);
  };
  return (
    <section id="work" className="flex justify-center bg-brand-purple/50 py-10">
      <div className="flex w-[90vw] flex-col content-center lg:max-w-screen-lg">
        <h2 className="mb-8 justify-center">My Past Work</h2>
        <div className="flex flex-row place-items-end gap-x-2 self-start justify-self-start">
          <PreviousProjectTabs
            pastWorkData={pastWork}
            visibleCompanyIndex={visibleCompanyIndex}
            resetComponentView={resetComponentView}
          />
        </div>
        <div className="min-h-[504px] rounded-md border border-black bg-pale shadow-thick-hover">
          {visibleWorkIndex == null ? (
            <WorkList
              data={pastWork[visibleCompanyIndex]}
              setVisibleWorkIndex={setVisibleWorkIndex}
            />
          ) : (
            <WorkDisplay
              data={pastWork[visibleCompanyIndex].work[visibleWorkIndex]}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
