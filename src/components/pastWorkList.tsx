import React from "react";
import { PastWorkListProps } from "../typings";
import TechTags from "./techTagsDisplay";

// "flex size-full flex-row flex-wrap content-start justify-center gap-4 rounded-md border p-4 md:h-full md:justify-start"

const PastWorkList = ({
  workListData,
  setVisibleWorkIndex,
}: PastWorkListProps) => (
  <ul className="grid w-full grid-cols-[repeat(auto-fit,minmax(208px,1fr))] content-start gap-4 rounded-md border p-4 md:h-full md:justify-start">
    {workListData.work.map(({ name, techUsed }, index) => (
      <li
        className="group relative flex min-h-80 flex-col items-center"
        key={index}
      >
        <button
          onClick={() => setVisibleWorkIndex(index)}
          className="relative z-[2] flex h-[90%] w-52 flex-col gap-y-2 rounded-t-lg border border-not-black bg-white p-2"
        >
          <div className="size-40 self-center rounded-md border">
            image here
          </div>
          <div className="group relative text-left text-xl">{name}</div>
          <div className="flex flex-row flex-wrap gap-2 self-end">
            {<TechTags limit={3} tags={techUsed} />}
          </div>
        </button>{" "}
        <div className="transition-translate static bottom-0 w-52 rounded-b-lg border border-t-0 border-not-black bg-brand-green px-2 text-center duration-300 ease-in-out lg:absolute lg:-translate-y-8 lg:group-hover:-translate-y-2">
          Check It Out
        </div>
      </li>
    ))}
  </ul>
);
export default PastWorkList;
