import { copyDataProps } from "@/src/typings";
import clsx from "clsx";
import React from "react";

interface TimeLineProps {
  activeDate: number;
  setActiveDate: (arg: number) => void;
  data: copyDataProps["timeline"];
}

const TimeLine = ({ activeDate, setActiveDate, data }: TimeLineProps) => {
  return (
    <>
      <div className="relative grid w-4/5 max-w-sm auto-cols-max grid-flow-row grid-cols-1 gap-y-4 md:w-4/5 xl:w-3/5">
        <div className="absolute -left-6 h-full w-1 bg-gradient-to-b from-not-black from-90%" />
        {data.map(({ name, role, date, description }, index) => {
          const isActive = activeDate === index;
          return (
            <button
              onClick={() => setActiveDate(index)}
              className={clsx(
                "timeline-dot group relative",
                isActive
                  ? "after:rounded-none after:bg-brand-green lg:w-full"
                  : "after:bg-brand-blue lg:w-3/4",
              )}
              key={index}
            >
              <p
                className={clsx(
                  "rounded-lg rounded-b-none border border-not-black bg-brand-blue/80 text-center font-caffie_lofie text-not-black",
                  isActive && "bg-brand-green md:text-lg",
                )}
              >
                {date}
              </p>
              <div
                className={clsx(
                  "rounded-none border border-not-black bg-pale md:rounded-lg md:rounded-t-none",
                  isActive
                    ? "mt-1 p-4 shadow-not-black"
                    : "border-t-0 p-2 group-hover:mt-1 group-hover:border-t",
                )}
              >
                <div className="prose">
                  <p
                    className={clsx(
                      "m-0 font-blacker md:text-base lg:text-xl",
                      isActive && "before:absolute md:text-2xl",
                    )}
                  >
                    {name}
                  </p>
                  {role && (
                    <p className="m-0 font-bold md:inline-block md:text-lg">
                      {role}
                    </p>
                  )}
                </div>
                {isActive && (
                  <p className="text-pretty rounded-lg border border-not-black bg-white p-2 text-sm md:text-base">
                    {description}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default TimeLine;
