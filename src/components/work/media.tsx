"use client";

import React, { useState } from "react";
import { ProjectsListProps } from "@/src/typings";
import {
  CTAButton,
  ImageMediaComponent,
  VideoMediaComponent,
} from "./components";
import { MediaPlaceholder } from "./placeholder";
import ImageLightbox from "./ImageLightbox";
import { useClose } from "@headlessui/react";

const ProjectMedia = ({
  media,
  mediaType,
  name,
  mediaDescription = "",
}: Pick<ProjectsListProps, "media" | "mediaType" | "mediaDescription"> & {
  name: string;
}) => {
  const [showBigger, setShowBigger] = useState(false);

  let renderedComponent;
  const close = useClose();

  if (media?.length === 0 || !["image", "video"].includes(mediaType)) {
    renderedComponent = <MediaPlaceholder />;
  }

  switch (mediaType) {
    case "image":
      renderedComponent = (
        <>
          <ImageMediaComponent
            width={604}
            height={309}
            className="max-md:size-full"
            sizes="(max-width: 425px) 250px, (max-width: 785px) 650px"
            media={media}
            alt={`Screenshot of ${name}`}
          />
          <div className="absolute -bottom-8 right-0 z-[5] flex flex-row-reverse items-center gap-x-4 lg:bottom-0 lg:right-0 lg:translate-y-1/2">
            <CTAButton
              tipMessage="View larger image"
              icon="mingcute:zoom-in-fill"
              ariaLabel="View Large Image"
              onClick={() => setShowBigger(true)}
            />
          </div>
          {showBigger && (
            <ImageLightbox
              isOpen={showBigger}
              onClose={() => {
                close();
                setShowBigger(false);
              }}
              media={media}
              name={name}
            />
          )}
        </>
      );
      break;
    case "video":
      renderedComponent = (
        <VideoMediaComponent media={media} description={mediaDescription} />
      );
      break;
    default:
      renderedComponent = <MediaPlaceholder />;
      break;
  }

  return (
    <div className="relative row-start-2 flex w-full flex-col justify-center max-lg:items-center lg:justify-start">
      {renderedComponent}
    </div>
  );
};

export default ProjectMedia;
