import React, { useState } from "react";
//TODO replace headlessui with ReactAria
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ProjectsListProps } from "@/src/typings";
import {
  CTAButton,
  ImageMediaComponent,
  VideoMediaComponent,
} from "./components";
import { MediaPlaceholder } from "./mediaPlaceholders";
import ImageLightbox from "./ImageLightbox";

const ProjectMedia = ({
  media,
  mediaType,
  name,
}: Pick<ProjectsListProps, "media" | "mediaType"> & { name: string }) => {
  const [showBigger, setShowBigger] = useState(false);

  let renderedComponent;

  if (!media || !["image", "video"].includes(mediaType)) {
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
          <div className="absolute -bottom-8 right-0 z-[5] flex flex-row-reverse items-baseline gap-x-4 lg:bottom-0 lg:right-0 lg:translate-y-1/2">
            <CTAButton
              tipMessage="View this larger"
              icon={faMagnifyingGlass}
              onClick={() => setShowBigger(true)}
            />
          </div>
          {showBigger && (
            <ImageLightbox
              open={showBigger}
              onClose={() => setShowBigger(false)}
              media={media}
              name={name}
            />
          )}
        </>
      );
      break;
    case "video":
      renderedComponent = (
        <VideoMediaComponent
          media={media}
          description={`Walkthrough demonstrating the functionality of the ${name}`}
        />
      );
      break;
    default:
      renderedComponent = <MediaPlaceholder />;
      break;
  }

  return (
    <div className="relative row-start-2 flex w-full flex-col justify-center lg:justify-start">
      {renderedComponent}
    </div>
  );
};

export default ProjectMedia;
