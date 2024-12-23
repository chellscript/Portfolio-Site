import React from "react";
import { ProjectsListProps } from "../../typings";

type TechTagsProps = {
  limit?: number;
  tagsString: ProjectsListProps["techUsed"];
};

const TechTags = ({ limit, tagsString }: TechTagsProps) => {
  const tagArray = tagsString.split(",");

  const displayTags =
    limit && limit < tagArray.length ? tagArray.slice(0, limit) : tagArray;
  return (
    <>
      {displayTags.map((item, index) => (
        <div
          key={index}
          className="size-fit rounded-lg border border-not-black bg-brand-blue/80 px-2 font-homevideo text-sm"
        >
          {item}
        </div>
      ))}
      {limit && limit < tagArray.length && (
        <div className="size-fit rounded-lg border border-not-black bg-[#8F5C8F] px-2 font-homevideo text-sm font-bold text-white">
          {Number(tagArray.length - limit)}+ more
        </div>
      )}
    </>
  );
};

export default TechTags;
