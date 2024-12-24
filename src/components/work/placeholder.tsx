import Image from "next/image";
import React from "react";
import listPlaceholder from "/public/images/work/placeholder.png";
import base64 from "base-64";

export const loadingBlur = `data:image/svg+xml;base64,${base64.encode(
  `<svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#ae97b9"/>
  </svg>`,
)}`;

export const ListPlaceholder = () => {
  return (
    <div className="relative flex flex-col items-center justify-center rounded-lg bg-brand-purple/20">
      <Image
        width="100"
        height="100"
        src={listPlaceholder}
        loading="lazy"
        sizes="100px"
        className="border-not-black object-cover mix-blend-hard-light"
        alt=""
      />
      <div className="inline-block font-homevideo text-sm text-black mix-blend-hard-light">
        Image Coming Soon
      </div>
    </div>
  );
};

export const PlaceholderComponent = () => {
  return (
    <div
      role="img"
      aria-label="Image coming Soon"
      className="relative flex aspect-video size-full max-h-[305px] max-w-[540px] flex-col items-center justify-center rounded-lg border border-not-black bg-white"
    >
      <div className="absolute z-1 h-[95%] w-[98%] rounded-lg bg-brand-purple/20" />
      <Image
        width="104"
        height="40"
        src={listPlaceholder}
        loading="lazy"
        className="z-1 border-not-black object-contain mix-blend-hard-light md:size-1/2"
        alt=""
        sizes="224px "
      />
      <div className="inline-block font-homevideo text-black mix-blend-hard-light md:text-lg">
        Image coming Soon
      </div>
    </div>
  );
};
