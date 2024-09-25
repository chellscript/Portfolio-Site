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
      <div className="absolute h-full w-1 bg-gradient-to-b from-not-black from-90% md:h-1 md:w-full md:bg-gradient-to-r" />
      {data.map(({ name, role, date, description }, index) => {
        const isActive = activeDate === index;

        return (
          <button
            onClick={() => setActiveDate(index)}
            className={clsx(
              "timeline-dot group relative col-span-full ml-6 h-fit self-baseline ease-in-out *:transition-all *:duration-150 md:col-span-1 md:ml-0",
              isActive
                ? "col-span-3 after:rounded-none after:bg-brand-green md:col-span-2"
                : "after:bg-brand-blue",
            )}
            key={index}
          >
            <p
              className={clsx(
                "rounded-lg rounded-b-none border border-not-black bg-brand-blue/80 text-center text-not-black group-hover:font-bold",
                isActive && "bg-brand-green font-bold md:text-lg",
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
                    "m-0 md:text-base lg:text-xl",
                    isActive
                      ? "font-bold before:absolute md:text-2xl"
                      : "font-semibold",
                  )}
                >
                  {name}
                </p>
                {role && (
                  <p className="m-0 hidden italic md:inline-block md:text-lg">
                    {" "}
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
    </>
  );
};

export default TimeLine;
