"use client";
import { getCldImageUrl } from "next-cloudinary";
import clsx from "clsx";
import { useState } from "react";
import ImageLightbox from "./ImageLightbox";
import GalleryImage from "./galleryImage";
import { useClose } from "@headlessui/react";
import { ProjectsListProps } from "@/src/typings";
import CTAButton from "./ctaButton";

type DisplayImageProps = Pick<
  ProjectsListProps,
  "media" | "name" | "description" | "mediaLightbox"
>;

const DisplayImage = ({
  media,
  mediaLightbox,
  name,
  description,
}: DisplayImageProps) => {
  const IMAGE_WIDTH = 604;
  const IMAGE_HEIGHT = 309;

  const [visibleImageIndex, setVisibleImageIndex] = useState<number>(0);
  const [showBigger, setShowBigger] = useState(false);

  const close = useClose();

  const mediaList = media.split(",");
  const lightboxMediaList = mediaLightbox?.length
    ? mediaLightbox.split(",")
    : [];

  const descriptionList = description.split(",");

  return (
    <>
      {mediaList.map((image, index) => {
        const url = getCldImageUrl({
          width: IMAGE_WIDTH,
          height: IMAGE_HEIGHT,
          src: image,
        });

        //TODO better names to indicate what is an array and what is a string
        const lightboxImageId = lightboxMediaList[visibleImageIndex] || image;

        return (
          <>
            <div
              className={clsx(
                "relative",
                visibleImageIndex === index ? "block" : "hidden",
              )}
            >
              <GalleryImage
                width={IMAGE_WIDTH}
                height={IMAGE_HEIGHT}
                className="max-h-80 object-contain max-md:size-full"
                sizes="(max-width: 425px) 250px, (max-width: 785px) 650px"
                url={url}
                alt={`Screenshot of ${name}`}
              />{" "}
              <div className="absolute -bottom-8 right-0 z-[5] flex flex-row-reverse items-center gap-x-4 lg:bottom-0 lg:right-0 lg:translate-y-1/2">
                <CTAButton
                  tipMessage="View larger image"
                  icon="mingcute:zoom-in-fill"
                  ariaLabel="View Large Image"
                  onClick={() => setShowBigger(true)}
                />
              </div>{" "}
            </div>

            {showBigger && (
              <ImageLightbox
                isOpen={showBigger}
                onClose={() => {
                  close();
                  setShowBigger(false);
                }}
                mediaId={lightboxImageId}
                name={name}
              />
            )}
          </>
        );
      })}
      {mediaList.length > 1 && (
        <>
          {description && (
            <p
              className="my-4 mt-8 inline-block rounded-lg bg-purple-200 px-4 py-2 text-center font-homevideo"
              id="screenshot-description"
            >
              Screenshot of {descriptionList[visibleImageIndex]}
            </p>
          )}
          <div className="flex flex-col justify-center p-4 pt-0 font-homevideo md:justify-start">
            <p
              id="screenshot-collection"
              className="my-2 flex flex-col flex-wrap justify-start gap-y-2 font-bold"
            >
              Screenshot Collection:
            </p>
            <div
              role="tablist"
              aria-labelledby="screenshot-collection"
              className="flex justify-center gap-x-2"
            >
              {mediaList.map((_, index) => (
                <button
                  disabled={index === visibleImageIndex}
                  onClick={() => setVisibleImageIndex(index)}
                  className={clsx(
                    "rounded-md px-4 py-2",
                    index === visibleImageIndex
                      ? "pointer-events-none bg-brand-purple text-white"
                      : "border border-not-black bg-white",
                  )}
                  key={index}
                  aria-controls={`screenshot-${index}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DisplayImage;
