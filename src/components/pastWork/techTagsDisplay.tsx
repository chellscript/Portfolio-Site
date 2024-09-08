import React from "react";
import { WorkProps } from "../../typings";

interface TechTagsProps {
  limit?: number;
  tags: WorkProps["techUsed"];
}

const TechTags = ({ limit, tags }: TechTagsProps) => {
  const iterationArray =
    limit && limit < tags.length ? tags.slice(0, limit) : tags;

  return (
    <>
      {iterationArray.map((item, index) => (
        <div
          key={index}
          className="size-fit rounded-lg border border-not-black bg-brand-blue/80 px-2 text-sm hover:bg-brand-blue"
        >
          {item}
        </div>
      ))}
      {limit && limit < tags.length && (
        <div className="size-fit rounded-lg border border-not-black bg-brand-pink px-2 text-sm">
          {Number(tags.length - limit)}+ more
        </div>
      )}
    </>
  );
};

export default TechTags;
