"use client";
import { CompaniesDataProps } from "@/src/typings";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loadingBlur } from "./placeholder";
import { getCldImageUrl, getCldVideoUrl } from "next-cloudinary";
import Image from "next/image";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import ReactPlayer from "react-player";
import clsx from "clsx";
import { useState } from "react";

type ImageMediaComponentProps = {
  media: string;
  alt?: string;
  height: number;
  width: number;
  className?: string;
  sizes: string;
};

export const ImageMediaComponent = ({
  media,
  alt = "",
  width,
  height,
  className = "",
  sizes,
}: ImageMediaComponentProps) => {
  const url = getCldImageUrl({
    width: width,
    height: height,
    src: media,
  });
  return (
    <Image
      width={width}
      height={height}
      src={url}
      alt={alt}
      sizes={sizes}
      loading="eager"
      placeholder="blur"
      blurDataURL={loadingBlur}
      className={className}
    />
  );
};

type VideoMediaComponentProps = {
  media: string;
  description: string;
};

export const VideoMediaComponent = ({
  media,
  description,
}: VideoMediaComponentProps) => {
  const mediaList = media.split(",");
  const descriptionList = description.split(",");

  const [visibleVideoIndex, setVisibleVideoIndex] = useState<number>(0);

  return (
    <>
      <div className="relative flex justify-center">
        {mediaList.map((videoID, index) => {
          const videoUrl = getCldVideoUrl({
            width: 1920,
            height: 1080,
            src: videoID,
          });

          return (
            <div
              key={videoID}
              className={clsx(
                "relative flex max-h-80 w-full flex-col items-center md:max-h-96",
                index === visibleVideoIndex ? "block" : "hidden",
              )}
            >
              <ReactPlayer
                id={videoID}
                controls
                width="100%"
                height="100%"
                fallback={
                  <div className="size-full animate-pulse bg-brand-purple" />
                }
                url={videoUrl}
              />
            </div>
          );
        })}
      </div>
      <p
        className="my-4 inline-block rounded-md bg-purple-200 px-2 text-center font-homevideo"
        id="video-description"
      >
        Video walkthrough showing {descriptionList[visibleVideoIndex]}
      </p>
      {mediaList.length > 1 && (
        <div className="flex flex-col justify-center p-4 pt-0 font-homevideo md:justify-start">
          <p
            id="video-playlist"
            className="my-2 flex flex-col flex-wrap justify-start gap-y-2 font-bold"
          >
            Video Playlist:
          </p>
          <div
            role="tablist"
            aria-labelledby="video-playlist"
            className="flex gap-x-2"
          >
            {mediaList.map((_, index) => (
              <button
                disabled={index === visibleVideoIndex}
                onClick={() => setVisibleVideoIndex(index)}
                className={clsx(
                  "rounded-md px-4 py-2",
                  index === visibleVideoIndex
                    ? "pointer-events-none bg-brand-purple text-white"
                    : "border border-not-black bg-white",
                )}
                key={index}
                aria-controls={`video-${index}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

{
  /* <p id="video-description" className="sr-only">
        {description}
      </p>
    </> */
}

type CTAButtonProps = {
  onClick: () => void;
  icon: IconProp;
  tipMessage: string;
};

export const CTAButton = ({ onClick, icon, tipMessage }: CTAButtonProps) => (
  <>
    <button
      onClick={onClick}
      className="peer z-1 flex aspect-square size-16 items-center justify-center rounded-full border-2 border-not-black bg-white p-4 shadow-inner shadow-gray-300/80 hover:translate-y-1 hover:scale-105 hover:shadow-none"
    >
      <FontAwesomeIcon icon={icon} size="xl" className="text-not-black" />
    </button>
    <div className="text-highlight h-fit bg-brand-green text-center !font-homevideo text-lg opacity-0 peer-hover:opacity-100">
      {tipMessage}
    </div>
  </>
);

//TODO use when re-adding mobile navigation
type MobNavButtionsProps = {
  workData: CompaniesDataProps["projects"];
  focusedProjectIndex: number;
  previous: () => void;
  next: () => void;
};

export const MobileNavigationButtons = ({
  workData,
  focusedProjectIndex,
  previous,
  next,
}: MobNavButtionsProps) => {
  return (
    <div className="flex w-1/2 flex-row items-center justify-between md:hidden">
      <button
        onClick={() => previous()}
        className="aspect-square rounded-full border border-not-black bg-white px-4 py-1 text-center text-lg text-not-black shadow-inner shadow-gray-300/80 active:bg-brand-green"
        aria-label="Previous Project"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <span className="inline-block h-fit text-lg">
        {focusedProjectIndex + 1}/{workData.length}
      </span>
      <button
        className="aspect-square rounded-full border border-not-black bg-white px-4 py-1 text-center text-lg text-not-black shadow-inner shadow-gray-300/80 active:bg-brand-green"
        onClick={() => next()}
        aria-label="Next Project"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};
