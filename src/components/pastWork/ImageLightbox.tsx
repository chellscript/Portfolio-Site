import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { homevideo } from "@/src/fonts";
import clsx from "clsx";
import { CTAButton, ImageMediaComponent } from "./components";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type ImageLightboxProps = {
  onClose: (arg: boolean) => void;
  open: boolean;
  media: string;
  name: string;
};

const ImageLightbox = ({ onClose, open, media, name }: ImageLightboxProps) => {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50 h-dvh">
      <div className="fixed inset-0 flex w-screen bg-not-black/90">
        <DialogPanel
          className={clsx(
            "relative flex h-screen w-screen flex-col items-center justify-center",
            homevideo.variable,
          )}
        >
          <div className="fixed left-1/2 top-1/2 flex w-[95dvw] -translate-x-1/2 -translate-y-1/2 flex-col gap-y-4 lg:max-w-[65dvw]">
            {/* //TODO switch to react aria to allow close by esc */}
            <ImageMediaComponent
              width={1920}
              height={1080}
              className="size-auto object-contain"
              sizes="(max-width: 425px) 250px, (max-width: 785px) 650px"
              media={media}
              alt={`Screenshot of ${name}`}
            />
            <div className="flex w-full flex-col items-center gap-y-4">
              <CTAButton
                tipMessage="Close"
                icon={faXmark}
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
