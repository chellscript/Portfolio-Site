import React from "react";
import { WorkProps } from "../typings";
import TechTags from "./techTagsDisplay";
import Image from "next/image";

const WorkDisplay = ({
  data: { name, description, techUsed },
}: {
  data: WorkProps;
}) => (
  <div className="flex h-full flex-col gap-6 p-4 md:flex-row">
    <div className="relative flex w-full flex-grow flex-col justify-center border">
      <Image
        alt="test"
        src="/images/screely-1722640580828.png"
        height={700}
        width={500}
      />
    </div>
    <div className="self-center rounded-lg border border-not-black bg-white p-8 shadow-thick-hover md:h-[80%]">
      <h3 className="text-center">{name}</h3>
      <div>
        <p> Tech Used:</p>
        <div className="flex flex-row flex-wrap gap-2">
          <TechTags tags={techUsed} />
        </div>
        {description}
      </div>
    </div>
  </div>
);

export default WorkDisplay;
