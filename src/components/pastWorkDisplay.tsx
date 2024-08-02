import React from "react";
import { WorkProps } from "../typings";

const WorkDisplay = ({
  workDisplayData: { name, description },
}: {
  workDisplayData: WorkProps;
}) => (
  <div className="flex h-full flex-col p-4">
    <div className="flex h-full flex-row gap-6">
      <div className="basis-1/2 border">media</div>
      <div className="basis-1/2 self-center rounded-lg border border-not-black bg-white md:h-[80%]">
        <h3 className="text-center">{name}</h3>
        <p>
          <span>In a few words:</span>
          {description}
        </p>{" "}
        <p>
          <span>Tech Used:</span>
          {description}
        </p>
      </div>
    </div>
  </div>
);

export default WorkDisplay;
