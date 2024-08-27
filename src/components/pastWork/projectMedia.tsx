import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { ReturnStaticImage } from "./imageMapper";

const ProjectMedia = ({ mediaKey }: { mediaKey: string }) => {
  const [showBigger, setShowBigger] = useState(false);

  const MediaSrc = ReturnStaticImage[mediaKey];

  return (
    <>
      {!!mediaKey.length && (
        <div className="relative row-start-2 size-fit">
          <button
            onClick={() => setShowBigger(true)}
            className="absolute -bottom-8 -right-4 z-[1] flex aspect-square size-16 items-center justify-center rounded-full border-2 border-not-black bg-brand-green p-4 hover:scale-105 md:-bottom-4 md:right-4"
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="xl"
              className="text-not-black"
            />
          </button>
          <Image
            alt="test"
            src={MediaSrc}
            placeholder="blur"
            className="object-contain"
            sizes="(max-width: 425px) 400px,(max-width: 786px) 650px,500px "
          />
        </div>
      )}
      {showBigger && (
        <Dialog
          open={showBigger}
          onClose={() => setShowBigger(false)}
          className="relative z-50 h-dvh"
        >
          <div className="fixed inset-0 flex w-screen bg-not-black/90">
            <DialogPanel className="relative flex h-screen w-screen flex-col items-center justify-center">
              <div className="fixed left-1/2 top-1/2 w-dvw -translate-x-1/2 -translate-y-1/2 lg:w-[90dvw]">
                <button
                  onClick={() => setShowBigger(false)}
                  className="relative -bottom-6 -right-6 z-[1] ml-auto flex aspect-square items-center justify-center rounded-full bg-brand-green hover:scale-90"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    size="2x"
                    className="aspect-square rounded-full border-4 border-not-black p-2 text-not-black"
                  />
                </button>
                <Image
                  alt="test"
                  src={MediaSrc}
                  placeholder="blur"
                  className="rounded-md border-4 border-brand-green object-contain"
                />
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default ProjectMedia;
