import { AboutSectionProps, TimelineProps } from "@/src/typings";
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

type TimelineItem = {
  data: AboutSectionProps["timeline"]["list"][number];
  index: number;
  isActive: boolean;
  setActiveDate: (arg: number) => void;
};

const buttonColors: {
  [key in TimelineProps["type"]]: string;
} = {
  life: "bg-brand-pink",
  work: "bg-brand-blue",
  special: "bg-brand-yellow",
};

const TimelineItem = ({
  data,
  index,
  isActive,
  setActiveDate,
}: TimelineItem) => {
  const { title, role, date, content, type, image, alt } = data;
  const a11yString = `'${title}' description`.replace(/ /g, "-");

  return (
    <div
      className={clsx(
        "max-md:w-5/6 max-md:justify-self-center md:mt-6 md:w-full md:self-start",
        isActive && "md:col-span-2",
      )}
    >
      <button
        aria-controls={a11yString}
        aria-expanded={isActive}
        tabIndex={0}
        onClick={() => setActiveDate(index)}
        className={clsx("w-full text-left", isActive && "md:col-span-2")}
      >
        <div
          className={clsx(
            "timeline-dot group relative",
            isActive
              ? "after:rounded-none after:bg-not-black"
              : "after:bg-stone-500",
          )}
        >
          <div
            className={clsx(
              !isActive &&
                "rounded-lg hover:animate-tilt hover:shadow-card-hover hover:shadow-orange-400/50",
            )}
          >
            <p
              className={clsx(
                isActive && "md:text-lg",
                buttonColors[type],
                "rounded-b-none rounded-t-lg border border-b-0 border-not-black bg-opacity-80 text-center font-blacker text-not-black",
              )}
            >
              {date}
            </p>
            <div
              className={clsx(
                "relative flex flex-col gap-y-2 rounded-none border border-t-0 border-not-black bg-pale p-2 md:rounded-lg md:rounded-t-none",
                isActive ? "mb-1 shadow-not-black" : "group-hover:mb-1",
              )}
            >
              <h4
                className={clsx(
                  "m-0 text-center font-blacker max-md:break-all md:text-base lg:text-xl",
                  isActive && "before:absolute md:text-2xl",
                )}
              >
                {title}
                {role && (
                  <span className="m-0 block text-center font-alondra_drawn font-bold md:inline-block md:text-lg">
                    {role}
                  </span>
                )}
              </h4>
            </div>
          </div>
        </div>
      </button>
      <div
        id={a11yString}
        className={clsx(
          "relative flex flex-col flex-wrap items-center gap-y-2 overflow-hidden border border-not-black bg-white p-2 shadow-card-hover shadow-orange-400/80",
          isActive ? "pointer-events-auto block" : "pointer-events-none hidden",
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
              "self-center rounded-lg bg-opacity-15 object-contain max-md:size-1/2",
              buttonColors[type],
            )}
            placeholder="blur"
            blurDataURL={loadingBlur}
          />
        )}
        <div
          className={clsx(
            "max-h-52 overflow-y-auto overflow-x-hidden text-pretty border border-orange-300 bg-opacity-50 p-1 text-center text-sm scrollbar scrollbar-track-orange-200 scrollbar-thumb-orange-400/80 prose-a:underline md:text-base",
            buttonColors[type],
          )}
          dangerouslySetInnerHTML={{
            __html: marked.parse(content, { async: false }),
          }}
        />
      </div>
    </div>
  );
};

const TimeLine = ({ data, activeDate, setActiveDate }: TimeLineProps) => {
  return (
    <div className="relative grid size-full w-full auto-cols-max grid-flow-row grid-cols-1 justify-end gap-y-4 self-center max-md:max-w-lg md:auto-cols-fr md:grid-flow-col md:gap-x-4">
      <div
        className="absolute left-2 h-full w-1 bg-gradient-to-b from-not-black from-90% md:left-0 md:h-1 md:w-full md:bg-gradient-to-r"
        role="group"
        aria-labelledby="timeline-section"
      />
      {data.map((item, index) => (
        <TimelineItem
          key={index}
          data={item}
          index={index}
          isActive={activeDate === index}
          setActiveDate={setActiveDate}
        />
      ))}
    </div>
  );
};

export default TimeLine;
