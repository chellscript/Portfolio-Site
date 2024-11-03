import React, { useMemo } from "react";
import TechTags from "./techTagsDisplay";
import clsx from "clsx";
import { CompaniesDataProps } from "@/src/typings";
import { getCldImageUrl } from "next-cloudinary";
import { ListPlaceholder, loadingBlur } from "./mediaPlaceholders";
import Image from "next/image";

type ProjectListProps = {
  data: CompaniesDataProps["projects"];
  setSelectedProjectIndex: (arg: number) => void;
};

const ProjectList = ({ data, setSelectedProjectIndex }: ProjectListProps) => {
  const workData = useMemo(() => data, [data]);

  return (
    <div className="flex size-full flex-col items-center justify-center md:justify-start">
      <ul className="grid h-fit w-full grid-flow-col auto-rows-max items-center justify-start gap-4 text-clip rounded-md border ease-in-out max-md:overflow-x-scroll md:size-full md:auto-cols-min md:grid-flow-row md:grid-cols-3 lg:grid-cols-4">
        {workData.map(({ name, techUsed, cover }, index) => {
          let imageUrl;
          if (cover) {
            imageUrl = getCldImageUrl({
              width: 960,
              height: 600,
              src: cover,
            });
          }

          return (
            <li
              className={clsx(
                "group relative grid h-96 snap-x flex-col items-center justify-center opacity-100 transition-all duration-0 ease-linear md:flex md:h-96 md:grayscale-0",
              )}
              key={index}
              id={`project-${index}`}
            >
              <button
                onClick={() => setSelectedProjectIndex(index)}
                className="group relative z-1 flex h-4/5 w-52 flex-col flex-nowrap gap-y-2 rounded-lg border border-not-black/80 bg-white p-2 transition-all hover:-translate-y-1 hover:shadow-button-hover hover:shadow-not-black/80"
              >
                <div className="self-center overflow-hidden rounded-lg border border-not-black/50 p-1 *:size-40">
                  {imageUrl ? (
                    <Image
                      width="160"
                      height="160"
                      src={imageUrl}
                      alt={`${name} Cover`}
                      sizes="160px"
                      className="size-auto rounded-lg border-not-black object-contain transition-transform ease-in-out group-hover:scale-125 motion-reduce:transition-transform"
                      placeholder="blur"
                      blurDataURL={loadingBlur}
                    />
                  ) : (
                    <ListPlaceholder />
                  )}
                </div>
                <h3
                  title={name}
                  className="relative m-0 line-clamp-1 text-left font-blacker text-lg"
                >
                  {name}
                </h3>
                <div className="flex flex-row flex-wrap justify-start gap-2">
                  {techUsed && <TechTags limit={3} tagsString={techUsed} />}
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectList;
