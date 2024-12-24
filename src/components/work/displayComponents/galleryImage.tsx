import Image from "next/image";
import React from "react";
import { loadingBlur } from "../placeholder";

type GalleryImageProps = {
  url: string;
  alt?: string;
  height: number;
  width: number;
  className?: string;
  sizes: string;
};

const GalleryImage = ({
  url,
  alt = "",
  width,
  height,
  className = "",
  sizes,
}: GalleryImageProps) => (
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
export default GalleryImage;
