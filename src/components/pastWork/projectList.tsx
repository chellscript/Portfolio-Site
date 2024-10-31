import React, { useMemo, useRef } from "react";
import TechTags from "./techTagsDisplay";
import clsx from "clsx";
import Image from "next/image";
// import { useMobileNav } from "@/src/hooks/useMobileNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { CompaniesDataProps } from "@/src/typings";

type ProjectListProps = {
  data: CompaniesDataProps["projects"]; //FIXME might have to change depending on hook below
  setSelectedProjectIndex: (arg: number) => void;
};

const ProjectList = ({ data, setSelectedProjectIndex }: ProjectListProps) => {
  // const ref = useRef<HTMLUListElement | null>(null);

  //TODO Remove IO, fix this to allow buttons to work
  //TODO implement pagination for table (max items 6)
  // const [next, previous, focusedProjectIndex] = useMobileNav(
  //   ref.current as HTMLUListElement,
  //   data,
  // );

  const workData = useMemo(() => data, [data]);

  return (
    <div className="flex size-full flex-col items-center justify-center md:justify-start">
      <ul
        // ref={ref}
        className="grid h-fit w-full grid-flow-col auto-rows-max items-center justify-start gap-4 text-clip rounded-md border ease-in-out max-md:overflow-x-scroll md:size-full md:auto-cols-min md:grid-flow-row md:grid-cols-3 lg:grid-cols-4"
      >
        {workData.map(({ name, techUsed, cover }, index) => (
          <li
            className={clsx(
              "group relative flex h-96 snap-x flex-col items-center justify-center opacity-100 transition-all duration-0 ease-linear md:flex md:h-96 md:grayscale-0",
            )}
            key={index}
            id={`project-${index}`}
          >
            <button
              onClick={() => setSelectedProjectIndex(index)}
              className="relative z-1 flex h-4/5 w-52 flex-col gap-y-2 rounded-lg border border-not-black/80 bg-white p-2 transition-all hover:-translate-y-1 hover:shadow-button-hover hover:shadow-not-black/80"
            >
              <div className="flex size-48 items-center justify-center self-center rounded-md border md:size-40">
                {cover ? (
                  <>Image here</>
                ) : (
                  <div className="relative">
                    <div className="absolute z-1 flex size-full items-center font-caffie_lofie text-lg text-white backdrop-blur-[2px]">
                      <p className="text-shadow-hero-mobile">
                        Image coming Soon
                      </p>
                    </div>
                    <Image
                      height={150}
                      width={150}
                      src="/images/previousWork/placeholder.jpeg"
                      className="size-full"
                      alt=""
                    />
                  </div>
                )}
              </div>
              <h3
                title={name}
                className="group relative m-0 line-clamp-1 text-left font-blacker text-lg"
              >
                {name}
              </h3>
              <div className="flex flex-row flex-wrap gap-2 self-start">
                {techUsed && <TechTags limit={3} tagsString={techUsed} />}
              </div>
            </button>
          </li>
        ))}
      </ul>
      {/* TODO fix when switching to GSAP */}
      {/* <div className="flex w-1/2 flex-row items-center justify-between md:hidden">
        <button
          onClick={() => previous()}
          className="aspect-square rounded-full border border-not-black bg-white px-4 py-1 text-center text-lg text-not-black shadow-inner shadow-gray-300/80 active:bg-brand-green"
          aria-label="Previous Project"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
       <span className="inline-block h-fit  text-lg">
          {focusedProjectIndex + 1}/{workData.length}
        </span>
        <button
          className="aspect-square rounded-full border border-not-black bg-white px-4 py-1 text-center text-lg text-not-black shadow-inner shadow-gray-300/80 active:bg-brand-green"
          onClick={() => next()}
          aria-label="Next Project"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div> */}
    </div>
  );
};

export default ProjectList;
