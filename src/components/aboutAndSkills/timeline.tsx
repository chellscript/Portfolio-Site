import { AboutSectionProps } from "@/src/typings";
import clsx from "clsx";
import React from "react";

type TimeLineProps = {
  data: AboutSectionProps["timeline"]["list"];
  activeDate: number;
  setActiveDate: (index: number) => void;
};

type TimelineItem = AboutSectionProps["timeline"]["list"][number];

const TimeLine = ({ data, activeDate, setActiveDate }: TimeLineProps) => {
  const buttonColors: {
    [key in TimelineItem["type"]]: string;
  } = {
    life: "bg-brand-pink/80",
    work: "bg-brand-blue/80",
    special: "bg-brand-yellow",
  };
  return (
    <>
      <div className="relative grid size-full w-full max-w-sm auto-cols-max grid-flow-row grid-cols-1 justify-end gap-y-4 self-center">
        <div className="absolute left-2 h-full w-1 bg-gradient-to-b from-not-black from-90% md:-left-6" />
        {data.map(({ title, role, date, content, type }, index) => {
          const isActive = activeDate === index;
          return (
            <button
              onClick={() => setActiveDate(index)}
              className={clsx(
                "timeline-dot group relative w-5/6 justify-self-center md:w-full",
                isActive
                  ? "after:rounded-none after:bg-not-black"
                  : `after:bg-stone-500`,
              )}
              key={index}
            >
              <p
                className={clsx(
                  isActive && "md:text-lg",
                  `rounded-lg rounded-b-none border border-not-black text-center font-caffie_lofie text-not-black ${buttonColors[type]}`,
                )}
              >
                {date}
              </p>
              <div
                className={clsx(
                  "rounded-none border border-not-black bg-pale p-2 md:rounded-lg md:rounded-t-none",
                  isActive
                    ? "mt-1 shadow-not-black"
                    : "border-t-0 group-hover:mt-1 group-hover:border-t",
                )}
              >
                <div className="prose">
                  <p
                    className={clsx(
                      "m-0 font-blacker md:text-base lg:text-xl",
                      isActive && "before:absolute md:text-2xl",
                    )}
                  >
                    {title}
                  </p>
                  {role && (
                    <p className="m-0 font-bold italic md:inline-block md:text-lg">
                      {role}
                    </p>
                  )}
                </div>
                {isActive && (
                  <p
                    className="text-pretty rounded-lg border border-not-black bg-white p-1 text-sm md:text-base"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
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
