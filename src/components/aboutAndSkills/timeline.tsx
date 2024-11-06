import { AboutSectionProps } from "@/src/typings";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { loadingBlur } from "../work/placeholder";
import { marked } from "marked";

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
    life: "bg-brand-pink",
    work: "bg-brand-blue",
    special: "bg-brand-yellow",
  };
  return (
    <>
      <div className="relative grid size-full w-full auto-cols-max grid-flow-row grid-cols-1 justify-end gap-y-4 self-center max-md:max-w-sm md:auto-cols-fr md:grid-flow-col md:gap-x-4">
        <div className="absolute left-2 h-full w-1 bg-gradient-to-b from-not-black from-90% md:left-0 md:h-1 md:w-full md:bg-gradient-to-r" />
        {data.map(({ title, role, date, content, type, image, alt }, index) => {
          const isActive = activeDate === index;
          return (
            <button
              onClick={() => setActiveDate(index)}
              className={clsx(
                "timeline-dot group relative max-md:w-5/6 max-md:justify-self-center md:mt-6 md:w-full md:self-start",
                isActive
                  ? "after:rounded-none after:bg-not-black md:col-span-2"
                  : `after:bg-stone-500`,
              )}
              key={index}
            >
              <p
                className={clsx(
                  isActive && "md:text-lg",
                  buttonColors[type],
                  "rounded-lg rounded-b-none border border-not-black bg-opacity-80 text-center font-blacker text-not-black",
                )}
              >
                {date}
              </p>
              <div
                className={clsx(
                  "relative flex flex-col gap-y-2 rounded-none border border-not-black bg-pale p-2 md:rounded-lg md:rounded-t-none",
                  isActive
                    ? "mt-1 shadow-not-black"
                    : "border-t-0 group-hover:mt-1 group-hover:border-t",
                )}
              >
                <>
                  <p
                    className={clsx(
                      "m-0 font-blacker md:text-base lg:text-xl",
                      isActive && "before:absolute md:text-2xl",
                    )}
                  >
                    {title}
                  </p>
                  {role && (
                    <p className="m-0 font-alondra_drawn font-bold md:inline-block md:text-lg">
                      {role}
                    </p>
                  )}
                </>
                <div
                  aria-hidden={!isActive}
                  className={clsx(
                    "flex flex-col items-center gap-y-2",
                    isActive
                      ? "pointer-events-auto static h-auto *:opacity-100"
                      : "pointer-events-none absolute inset-0 h-0 *:opacity-0",
                  )}
                >
                  {image && (
                    <Image
                      width="150"
                      height="150"
                      src={image}
                      alt={alt}
                      sizes="150px"
                      className={clsx(
                        "self-center rounded-lg border-not-black bg-opacity-30 object-contain max-md:size-1/4",
                        buttonColors[type],
                      )}
                      placeholder="blur"
                      blurDataURL={loadingBlur}
                    />
                  )}
                  <div
                    className="prose max-w-none text-pretty rounded-lg border border-not-black bg-white p-1 text-sm prose-a:text-sky-600 md:text-base"
                    dangerouslySetInnerHTML={{
                      __html: marked.parse(content) as string,
                    }}
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default TimeLine;
