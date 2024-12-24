"use client";
import { getCldVideoUrl } from "next-cloudinary";
import ReactPlayer from "react-player";
import clsx from "clsx";
import { useState } from "react";

type DisplayVideoProps = {
  media: string;
  description: string;
};

const DisplayVideo = ({ media, description }: DisplayVideoProps) => {
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
        className="my-4 inline-block rounded-lg bg-purple-200 px-4 py-2 text-center font-homevideo"
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

export default DisplayVideo;
