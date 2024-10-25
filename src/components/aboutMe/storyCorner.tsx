import { dataProps } from "@/src/typings";
import clsx from "clsx";
import { marked } from "marked";
import React from "react";

const StoryCorner = ({
  data,
}: {
  data: dataProps["about"]["story"]["list"];
}) => {
  const highlightColoursIndex: { [index: number]: string } = {
    0: "first-of-type:span:bg-brand-green/70 span:bg-brand-blue/70",
    1: "span:bg-brand-pink/70",
  };

  return (
    <div className="flex flex-col items-center gap-4 md:items-start *:md:w-10/12 lg:gap-y-4 xl:items-start">
      {data.map(({ title, content }, index) => (
        <div
          key={index}
          className="prose w-full max-w-none rounded-md border border-not-black bg-pale p-4 shadow"
        >
          <h3
            className={clsx(
              "not-prose span:text-highlight mx-auto mb-4 text-center lg:w-3/4",
              highlightColoursIndex[index],
            )}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div
            className="prose max-w-none *:my-2 *:text-pretty *:text-justify *:text-[15px] *:md:text-base"
            dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
          />
        </div>
      ))}
    </div>
  );
};

export default StoryCorner;
