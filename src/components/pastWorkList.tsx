import React from "react";
import { PastWorkListProps } from "../typings";

const PastWorkList = ({
  workListData,
  setVisibleWorkIndex,
}: PastWorkListProps) => (
  <ul className="flex size-full flex-row flex-wrap content-start justify-center gap-4 rounded-md border p-4 md:h-full md:justify-start">
    {workListData.work.map(({ name, techUsed }, index) => (
      <li key={index}>
        <div className="flex- flex w-44 flex-col gap-y-2 rounded-lg border border-not-black bg-white p-2">
          <div className="size-40 rounded-md border">image here</div>
          <p className="text-xl">{name}</p>
          <p>
            I Used:
            {}
          </p>
          {/* <button
            className="w-[90%] rounded-lg border border-not-black bg-brand-pink px-2 py-1"
            onClick={() => setVisibleWorkIndex(index)}
          >
            See More
          </button> */}
        </div>
      </li>
    ))}
  </ul>
);
export default PastWorkList;
