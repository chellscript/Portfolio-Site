"use client";
import { useState, useEffect } from "react";
import Loading from "../app/loading";
import clsx from "clsx";

const LoadingWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    if (isLoaded && !hideLoader) {
      const animationTimer = setTimeout(() => {
        setHideLoader(true);
      }, 1000);
      return () => clearTimeout(animationTimer);
    }
  }, [isLoaded, hideLoader]);

  return (
    <>
      {!hideLoader && (
        <Loading
          className={clsx("fixed z-50", isLoaded && "animate-slide-up")}
        />
      )}
      {children}
    </>
  );
};

export default LoadingWrapper;
