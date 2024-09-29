import React, { useMemo, useRef } from "react";
import TechTags from "./techTagsDisplay";
import clsx from "clsx";
import Image from "next/image";
import { useMobileNav } from "@/src/hooks/useMobileNav";
import { ProjectListProps } from "@/src/typings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
        className="grid h-fit w-full grid-flow-col auto-rows-auto items-center justify-start gap-4 text-clip rounded-md border ease-in-out max-md:overflow-x-scroll md:size-full md:auto-cols-min md:grid-flow-row md:grid-cols-3 lg:grid-cols-4"
      >
        {workData.map(({ name, techUsed }, index) => (
          <li
            className={clsx(
              "group relative flex h-96 snap-x flex-col items-center justify-center opacity-100 transition-all duration-0 ease-linear md:flex md:h-80 md:grayscale-0",
            )}
            key={index}
            id={`project-${index}`}
          >
            <button
              onClick={() => setSelectedProjectIndex(index)}
              className="relative z-1 flex h-[90%] w-52 flex-col gap-y-2 rounded-lg border border-not-black bg-white p-2 transition-all hover:-translate-y-1 hover:shadow-button-hover hover:shadow-not-black"
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
          </li>
        ))}
      </ul>
      <div className="flex w-1/2 flex-row items-center justify-between md:hidden">
        <button
          onClick={() => previous()}
          className="aspect-square rounded-full border border-not-black bg-white px-4 py-1 text-center text-lg text-not-black shadow-inner shadow-gray-300/80 active:bg-brand-green"
          aria-label="Previous Project"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <span className="inline-block h-fit align-middle text-lg">
          {focusedProjectIndex + 1}/{workData.length}
        </span>
        <button
          className="aspect-square rounded-full border border-not-black bg-white px-4 py-1 text-center text-lg text-not-black shadow-inner shadow-gray-300/80 active:bg-brand-green"
          onClick={() => next()}
          aria-label="Next Project"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default ProjectList;
