import React from "react";
import { PastWorkDataProps, WorkProps } from "../../typings";
import TechTags from "./techTagsDisplay";
import Image from "next/image";
import { Dialog } from "@headlessui/react";

type ProjectDisplayProps = {
  companyData: PastWorkDataProps;
  projectData: WorkProps;
};

const WorkDescription = ({
  companyData: { name: companyName, duration, role },
  projectData: { techUsed, name, description, link },
}: ProjectDisplayProps) => (
  <div className="flex max-h-full min-h-96 w-full flex-col items-start rounded-lg border bg-white p-5 shadow-thick-hover">
    <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-evenly whitespace-break-spaces break-words border-b border-dashed border-black/50 pb-2 text-center text-xs uppercase">
      {[companyName, duration, role].map(
        (data, index) => data && <p key={index}>{data}</p>,
      )}
    </div>
    <div className="flex w-full flex-col self-start">
      <h3 className="text-center">{name}</h3>
      <p> {description} </p>
    </div>
    <div className="mt-auto w-full space-y-2 self-end border-t border-dashed border-black/50 pt-2">
      {link && (
        <div className="flex flex-row">
          <p className="bg-brand-green/50 font-bold"> Visit It:</p>
        </div>
      )}
      <div className="flex flex-row flex-wrap gap-1">
        <p className="font-bold"> Tech Used:</p>
        <TechTags tags={techUsed} />
      </div>{" "}
    </div>
  </div>
);

const ProjectDisplay = ({
  companyData,
  projectData,
  setSelectedProjectIndex,
}: ProjectDisplayProps & {
  setSelectedProjectIndex: (arg: null) => void;
}) => (
  <div className="flex h-full flex-col gap-6 p-4 md:flex-row">
    <div className="relative flex w-full grow flex-col justify-center border">
      <Image
        alt="test"
        src="/images/screely-1722640580828.png"
        height={700}
        width={500}
        className="debug size-full object-contain"
      />
    </div>
    <div className="flex h-full flex-col justify-center gap-y-2 md:w-[824px]">
      <WorkDescription projectData={projectData} companyData={companyData} />
      <button
        className="w-full self-end rounded-lg bg-brand-green/90 p-1 font-bold text-not-black shadow-thick-hover shadow-not-black hover:bg-brand-green"
        onClick={() => setSelectedProjectIndex(null)}
      >
        <div className="size-full text-nowrap rounded-lg border-2 border-white p-1">
          Go back
        </div>
      </button>
    </div>
  </div>
);

export default ProjectDisplay;
