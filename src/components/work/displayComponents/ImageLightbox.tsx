import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { homevideo } from "@/src/utils/fonts";
import clsx from "clsx";
import GalleryImage from "./galleryImage";
import CTAButton from "./ctaButton";
import { getCldImageUrl } from "next-cloudinary";

type ImageLightboxProps = {
  onClose: (arg: boolean) => void;
  isOpen: boolean;
  mediaId: string;
  name: string;
};

const ImageLightbox = ({
  onClose,
  isOpen,
  mediaId,
  name,
}: ImageLightboxProps) => {
  const IMAGE_WIDTH = 1920;
  const IMAGE_HEIGHT = 1080;

  const url = getCldImageUrl({
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    src: mediaId,
  });

  console.log(mediaId, url);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50 h-dvh">
      <div className="fixed inset-0 flex w-screen bg-not-black/80">
        <DialogPanel
          transition
          className={clsx(
            "relative flex h-screen w-screen flex-col items-center justify-center",
            homevideo.variable,
          )}
        >
          <div className="fixed left-1/2 top-1/2 flex w-[95dvw] -translate-x-1/2 -translate-y-1/2 flex-col gap-y-4 lg:max-w-[70dvw]">
            <div className="aspect-video overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-orange-200 scrollbar-thumb-orange-400/80">
              <GalleryImage
                width={IMAGE_WIDTH}
                height={IMAGE_HEIGHT}
                className="object-contain"
                sizes="(max-width: 425px) 250px, (max-width: 785px) 650px"
                url={url}
                alt={`Screenshot of ${name}`}
              />
            </div>
            <div className="flex w-full flex-col items-center gap-y-4">
              <CTAButton
                ariaLabel="Close Lightbox"
                tipMessage="Close"
                icon="mingcute:close-circle-fill"
                onClick={() => onClose(false)}
              />
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ImageLightbox;
