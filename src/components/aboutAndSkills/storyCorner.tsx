import { AboutSectionProps } from "@/src/typings";
import clsx from "clsx";
import { marked } from "marked";
import React from "react";
import Image from "next/image";
import science from "/public/images/aboutMe/science.png";
import gitPush from "/public/images/aboutMe/gitpush.png";
import empathy from "/public/images/aboutMe/empathy.png";

const StoryCorner = ({
  data,
}: {
  data: AboutSectionProps["story"]["list"];
}) => {
  const highlightColoursIndex: { [index: number]: string } = {
    0: "first-of-type:span:bg-brand-green/70 span:bg-brand-blue/70",
    1: "span:bg-brand-pink/70",
  };

  return (
    <div className="flex flex-col items-center justify-stretch gap-4 md:flex-row md:items-start *:md:w-10/12 lg:gap-y-4 xl:items-start">
      <div className="prose relative w-full max-w-none overflow-hidden rounded-md border border-not-black bg-pale p-4 shadow md:pb-8">
        <Image
          height={100}
          width={100}
          src={science}
          className="absolute -top-2 left-0 -scale-x-100 object-cover max-lg:hidden"
          alt="gloved hand holding a scientific pipette"
        />{" "}
        <Image
          height={180}
          width={180}
          src={gitPush}
          className="absolute -right-14 -top-12 isolate z-1 m-0 object-cover max-lg:hidden"
          alt="hand pushing a button saying git-push"
        />
        <h3
          className={clsx(
            "not-prose span:text-highlight isolate z-1 mx-auto mb-4 text-center lg:w-3/4",
            highlightColoursIndex[0],
          )}
          dangerouslySetInnerHTML={{ __html: data[0].title }}
        />
        <div
          className="prose isolate z-1 max-w-none overflow-x-hidden rounded-md bg-white px-4 py-1 scrollbar scrollbar-track-not-black/40 scrollbar-thumb-not-black/80 *:my-2 *:text-pretty *:text-justify *:text-[15px] max-lg:max-h-60 *:md:text-base lg:max-h-64"
          dangerouslySetInnerHTML={{ __html: marked.parse(data[0].content) }}
        />
      </div>
      <div className="prose relative w-full max-w-none rounded-md border border-not-black bg-pale p-4 shadow md:pb-8">
        <h3
          className={clsx(
            "not-prose span:text-highlight isolate z-1 mb-4 max-lg:mx-auto max-lg:text-center lg:mr-auto lg:text-start",
            highlightColoursIndex[1],
          )}
          dangerouslySetInnerHTML={{ __html: data[1].title }}
        />
        <Image
          height={120}
          width={120}
          src={empathy}
          className="absolute right-4 top-4 rotate-6 -scale-x-100 object-cover max-lg:hidden"
          alt="pink love heart with person shaped symbol"
        />

        <div
          className="prose max-w-none overflow-x-hidden overflow-y-scroll rounded-md bg-white/80 px-4 py-1 scrollbar scrollbar-track-not-black/40 scrollbar-thumb-not-black/80 *:my-2 *:text-pretty *:text-justify *:text-[15px] max-lg:max-h-60 *:md:text-base lg:max-h-64"
          dangerouslySetInnerHTML={{ __html: marked.parse(data[1].content) }}
        />
      </div>
    </div>
  );
};

export default StoryCorner;
