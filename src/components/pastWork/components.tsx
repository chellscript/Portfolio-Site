import { CompaniesDataProps } from "@/src/typings";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loadingBlur } from "./mediaPlaceholders";
import { CldVideoPlayer, getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

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
}: VideoMediaComponentProps) => (
  <>
    <CldVideoPlayer
      width="1920"
      height="1080"
      logo={false}
      src={media}
      muted
      fontFace="PT Sans Caption" //google fonts
      className="cld-video-player cld-video-player-skin-light"
      colors={{ accent: "#D4ED30", base: "#987dc1", text: "#fff" }}
      aria-describedby="video-description"
    />
    <p id="video-description" className="sr-only">
      {description}
    </p>
  </>
);

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
