import React from "react";
import { WorkProps } from "../typings";
import TechTags from "./techTagsDisplay";
import Image from "next/image";

const WorkDisplay = ({
  workDisplayData: { name, description, techUsed },
}: {
  workDisplayData: WorkProps;
}) => (
  <div className="flex h-full flex-col p-4">
    <div className="flex h-full flex-row gap-6">
      <div className="relative flex w-full flex-grow flex-col justify-center border">
        {/* <div className="absolute  size-[70%] rounded-full bg-brand-yellow"></div> */}
        <Image
          alt="test"
          src="/images/screely-1722640580828.png"
          height={700}
          width={500}
        />
      </div>
      <div className="self-center rounded-lg border border-not-black bg-white p-8 shadow-thick-hover md:h-[80%]">
        <h3 className="text-center">{name}</h3>
        <p>
          <span>In a few words:</span>
          {description}
        </p>{" "}
        <div>
          <p> Tech Used:</p>
          <div className="flex flex-row flex-wrap gap-2">
            <TechTags tags={techUsed} />
          </div>
          {description}
        </div>
      </div>
    </div>
  </div>
);

export default WorkDisplay;
