import React, { useEffect, useRef, useState } from "react";
import { PastWorkListProps } from "../typings";
import TechTags from "./techTagsDisplay";
import clsx from "clsx";
import Image from "next/image";
import { useMobileIOHook } from "../hooks/mobileIntersectionObserver";
import { useMediaQuery } from "react-responsive";

//TODO replace hover: with hover media query

const PastWorkList = ({
  data,
  setSelectedProjectIndex,
  setFocusedProjectIndex,
  focusedProjectIndex,
}: PastWorkListProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [iOBlock, setIOBlock] = useState(false);
  const scrollParent = useRef<HTMLUListElement>(null);

  const iOCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (isIntersecting) {
        target.classList.remove("grayscale");
        let index = Number(target.id.split("-")[1]);
        !isNaN(index) && setFocusedProjectIndex(index);
      } else {
        target.classList.add("grayscale");
      }
    });
  };

  const navigateScroll = () => {
    let selectedProject = document.getElementById(
      `project-${focusedProjectIndex}`,
    );
    selectedProject?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  };

  const unblockIntersectionObserver = () => {
    if (iOBlock && scrollParent.current) {
      scrollParent.current.addEventListener(
        "scrollend",
        () => setIOBlock(false),
        { once: true },
      );
    }
  };

  const next = () => {
    if (focusedProjectIndex < data.length - 1) {
      setFocusedProjectIndex(focusedProjectIndex + 1);
    } else {
      setIOBlock(true);
      setFocusedProjectIndex(0);
    }
  };

  const previous = () => {
    if (focusedProjectIndex > 0) {
      setFocusedProjectIndex(focusedProjectIndex - 1);
    } else {
      setIOBlock(true);
      setFocusedProjectIndex(data.length - 1);
    }
  };
  useEffect(() => {
    if (!scrollParent.current) {
      return;
    }
    const [observer, projects] = useMobileIOHook(
      scrollParent.current,
      iOCallback,
    );

    projects.forEach((project) => observer.observe(project));

    if (iOBlock || !isMobile) {
      //stops IntersectionObserver firing
      observer.disconnect();
    }

    return () => observer.disconnect();
  }, [iOBlock, data, isMobile]);

  useEffect(() => {
    if (!isMobile) {
      return;
    }
    navigateScroll();
    unblockIntersectionObserver();
  }, [focusedProjectIndex, isMobile]);

  return (
    <div className="flex size-full flex-col items-center justify-center md:justify-start">
      <ul
        ref={scrollParent}
        className="flex h-fit w-full flex-row content-start items-center gap-4 overflow-clip overflow-x-auto rounded-md border p-4 md:grid md:h-full md:w-full md:grid-cols-[repeat(auto-fit,minmax(208px,1fr))] md:justify-start md:overflow-hidden"
      >
        {data.map(({ name, techUsed }, index) => (
          <li
            className={clsx(
              "debug group relative h-96 snap-x flex-col items-center opacity-100 transition-all md:flex md:h-80 md:grayscale-0",
            )}
            key={index}
            id={`project-${index}`}
          >
            <button
              onClick={() => setSelectedProjectIndex(index)}
              className="relative z-[2] flex h-[90%] w-52 flex-col gap-y-2 rounded-t-lg border border-not-black bg-white p-2"
            >
              <div className="size-48 self-center rounded-md border md:size-40">
                <Image
                  height={192}
                  width={192}
                  src="/images/previousWork/placeholder.svg"
                  className="grayscale group-hover:grayscale-0"
                  alt={`Cover of ${name} Project`}
                />
              </div>
              <div className="group relative line-clamp-1 text-left text-lg">
                {name}
              </div>
              <div className="flex flex-row flex-wrap gap-2 self-start">
                {<TechTags limit={3} tags={techUsed} />}
              </div>
            </button>
            <div className="transition-translate static bottom-0 h-fit w-full rounded-b-lg border border-t-0 border-not-black bg-brand-green px-2 text-center md:w-52 lg:absolute lg:-translate-y-8 lg:duration-300 lg:ease-in-out lg:group-hover:-translate-y-2">
              Check It Out
            </div>
          </li>
        ))}
      </ul>
      <div className="flex w-64 flex-row justify-between md:hidden">
        <button className="debug" onClick={() => previous()}>
          Left
        </button>
        <p>
          {focusedProjectIndex + 1}/{data.length}
        </p>
        <button className="debug" onClick={() => next()}>
          Right
        </button>
      </div>
    </div>
  );
};
export default PastWorkList;
