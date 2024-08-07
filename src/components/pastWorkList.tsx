import React, { useEffect, useState } from "react";
import { PastWorkListProps } from "../typings";
import TechTags from "./techTagsDisplay";
import clsx from "clsx";
import Image from "next/image";

const PastWorkList = ({
  workListData,
  setVisibleWorkIndex,
  setviewProjectIndex,
  viewProjectIndex,
}: PastWorkListProps) => {
  let projects = workListData.work.length;

  const next = () => {
    if (viewProjectIndex < projects - 1) {
      setviewProjectIndex(viewProjectIndex + 1);
    } else {
      setviewProjectIndex(0);
    }
  };

  const previous = () => {
    if (viewProjectIndex > 0) {
      setviewProjectIndex(viewProjectIndex + -1);
    } else {
      setviewProjectIndex(projects - 1);
    }
  };

  return (
    <div className="flex size-full flex-col items-center justify-center md:justify-start">
      <ul className="debug flex h-fit w-full snap-x snap-mandatory flex-row content-start items-center gap-4 overflow-hidden overflow-x-auto scroll-smooth rounded-md border p-4 md:grid md:h-full md:w-full md:grid-cols-[repeat(auto-fit,minmax(208px,1fr))] md:justify-start md:overflow-hidden">
        {workListData.work.map(({ name, techUsed }, index) => (
          <li
            className={clsx(
              "group relative h-96 snap-center flex-col items-center opacity-100 transition-all md:flex md:h-80 md:scale-100 md:grayscale-0",
              viewProjectIndex !== index && "scale-90 grayscale",
            )}
            key={index}
            id={`project-${index}`}
          >
            <button
              onClick={() => setVisibleWorkIndex(index)}
              className="relative z-[2] flex h-[90%] w-52 flex-col gap-y-2 rounded-t-lg border border-not-black bg-white p-2"
            >
              <div className="size-48 self-center rounded-md border md:size-40">
                <Image
                  height={192}
                  width={192}
                  src="/images/previousWork/placeholder.svg"
                  className="grayscale hover:grayscale-0"
                  alt={`Cover of ${name} Project`}
                />
              </div>
              <div className="group relative text-left text-xl">{name}</div>
              <div className="flex flex-row flex-wrap gap-2 self-start">
                {<TechTags limit={3} tags={techUsed} />}
              </div>
            </button>{" "}
            <div className="transition-translate static bottom-0 h-fit w-full rounded-b-lg border border-t-0 border-not-black bg-brand-green px-2 text-center md:w-52 lg:absolute lg:-translate-y-8 lg:duration-300 lg:ease-in-out lg:group-hover:-translate-y-2">
              Check It Out
            </div>
          </li>
        ))}
      </ul>
      <div className="flex w-64 flex-row justify-between md:hidden">
        <button className="debug" onClick={() => previous()}>
          Left
        </button>
        <button className="debug" onClick={() => next()}>
          Right
        </button>
      </div>
    </div>
  );
};
export default PastWorkList;
