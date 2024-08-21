import React, { useState } from "react";
import Image from "next/image";
import { Dialog, DialogPanel } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const ProjectMedia = ({ mediaSrc }: { mediaSrc: string }) => {
  const [showBigger, setShowBigger] = useState(false);

  const image = (
    <Image alt="test" src={mediaSrc} fill={true} className="object-contain" />
  );

  return (
    <div className="">
      {image}
      <button
        onClick={() => setShowBigger(true)}
        className="absolute right-4 top-[70%] flex size-24 items-center justify-center rounded-full bg-brand-pink"
      >
        {/* //  TODO - turn border and padding into reusable style */}
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="3x"
          className="rounded-full border-4 border-not-black p-4 text-not-black hover:border-pale hover:text-pale"
        />
      </button>
      {showBigger && (
        <Dialog
          open={showBigger}
          onClose={() => setShowBigger(false)}
          className="relative z-50 h-dvh"
        >
          <div className="fixed inset-0 flex w-screen items-center justify-center bg-not-black/50 p-4">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
              <div className="">{image}</div>
              <button
                className="absolute border border-not-black bg-red-500"
                onClick={() => setShowBigger(false)}
              >
                Cancel
              </button>
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default ProjectMedia;
