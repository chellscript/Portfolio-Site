import React, { useMemo, useRef } from "react";
import TechTags from "./techTagsDisplay";
import clsx from "clsx";
import Image from "next/image";
import { useMobileNav } from "@/src/hooks/useMobileNav";
import { ProjectListProps } from "@/src/typings";

const ProjectList = ({ data, setSelectedProjectIndex }: ProjectListProps) => {
  const ref = useRef<HTMLUListElement | null>(null);

  const [next, previous, focusedProjectIndex] = useMobileNav(
    ref.current as HTMLUListElement,
    data,
  );

  const workData = useMemo(() => data.work, [data]);

  return (
    <div className="flex size-full flex-col items-center justify-center md:justify-start">
      <ul
        ref={ref}
        className="flex h-fit w-full flex-row content-start items-center gap-2 overflow-x-auto text-clip rounded-md border p-4 md:grid md:size-full md:grid-cols-[repeat(auto-fill,minmax(208px,1fr))] md:justify-start md:overflow-hidden"
      >
        {workData.map(({ name, techUsed }, index) => (
          <li
            className={clsx(
              "group relative h-96 snap-x flex-col items-center opacity-100 transition-all md:flex md:h-80 md:grayscale-0",
            )}
            key={index}
            id={`project-${index}`}
          >
            <button
              onClick={() => setSelectedProjectIndex(index)}
              className="relative z-[2] flex h-[90%] w-52 flex-col gap-y-2 rounded-t-lg border border-not-black bg-white p-2"
            >
              <div className="size-48 self-center rounded-md border md:size-40">
                <Image
                  height={192}
                  width={192}
                  src="/images/previousWork/placeholder.svg"
                  className="grayscale group-hover:grayscale-0"
                  alt={`Cover of ${name} Project`}
                />
              </div>
              <div className="group relative line-clamp-1 text-left text-lg">
                {name}
              </div>
              <div className="flex flex-row flex-wrap gap-2 self-start">
                {<TechTags limit={3} tags={techUsed} />}
              </div>
            </button>
            <div className="static bottom-0 h-fit w-full rounded-b-lg border border-t-0 border-not-black bg-brand-green px-2 text-center md:w-52 lg:absolute lg:-translate-y-8 lg:duration-300 lg:ease-in-out lg:group-hover:-translate-y-2">
              Check It Out
            </div>
          </li>
        ))}
      </ul>
      <div className="flex w-64 flex-row justify-between md:hidden">
        <button className="debug" onClick={() => previous()}>
          Left
        </button>
        <p>
          {focusedProjectIndex + 1}/{workData.length}
        </p>
        <button className="debug" onClick={() => next()}>
          Right
        </button>
      </div>
    </div>
  );
};

export default ProjectList;
