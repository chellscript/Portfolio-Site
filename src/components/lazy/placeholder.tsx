import clsx from "clsx";
import React from "react";

const ElementPlaceholder = ({
  className = "",
  loaderContent,
}: {
  className?: string;
  loaderContent?: string;
}) => {
  return (
    <div
      className={clsx(
        "relative grid min-h-[50dvh] w-full flex-col place-content-center overflow-hidden",
        className,
      )}
    >
      {loaderContent && <p className={clsx("loader", loaderContent)} />}
    </div>
  );
};

export default ElementPlaceholder;
