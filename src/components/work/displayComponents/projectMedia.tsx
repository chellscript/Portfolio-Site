"use client";
import React from "react";
import { ProjectsListProps } from "@/src/typings";
import { PlaceholderComponent } from "../placeholder";
import DisplayImage from "./displayImage";
import DisplayVideo from "./displayVideo";

const ProjectMedia = ({
  media,
  mediaType,
  name,
  mediaDescription = "",
  mediaLightbox,
}: Pick<
  ProjectsListProps,
  "media" | "mediaType" | "mediaDescription" | "mediaLightbox"
> & {
  name: string;
}) => {
  let renderedComponent;

  if (media?.length === 0 || !["image", "video"].includes(mediaType)) {
    renderedComponent = <PlaceholderComponent />;
  }

  switch (mediaType) {
    case "image":
      renderedComponent = (
        <DisplayImage
          description={mediaDescription}
          media={media}
          mediaLightbox={mediaLightbox}
          name={name}
        />
      );
      break;
    case "video":
      renderedComponent = (
        <DisplayVideo media={media} description={mediaDescription} />
      );
      break;
    default:
      renderedComponent = <PlaceholderComponent />;
      break;
  }

  return (
    <div className="relative row-start-2 flex w-full flex-col justify-center max-lg:items-center lg:justify-start">
      {renderedComponent}
    </div>
  );
};

export default ProjectMedia;
