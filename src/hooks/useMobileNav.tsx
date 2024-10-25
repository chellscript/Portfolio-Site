import { useCallback, useEffect, useMemo, useState } from "react";
import { PastWorkDataProps } from "../typings";
import { useMediaQuery } from "react-responsive";

type Hooks = [
  next: () => void,
  previous: () => void,
  focusedProjectIndex: number,
];

export const useMobileNav = (
  scrollParentCurrent: HTMLUListElement | undefined,
  data: PastWorkDataProps,
): Hooks => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const workData = useMemo(() => data.work, [data]);

  const [activeIOBlock, setActiveIOBlock] = useState(false);
  const [focusedProjectIndex, setFocusedProjectIndex] = useState<number>(0);

  const ObserverCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
          target.classList.remove("grayscale");
          const index = Number(target.id.split("-")[1]);
          if (!isNaN(index)) setFocusedProjectIndex(index);
        } else {
          target.classList.add("grayscale");
        }
      });
    },
    [setFocusedProjectIndex],
  );

  const navigateScroll = useCallback(() => {
    if (!scrollParentCurrent) {
      return;
    }

    const childrenProjects = Array.from(scrollParentCurrent.children);

    const selectedProject = childrenProjects.find(
      (child) => child.id === `project-${focusedProjectIndex}`,
    );

    if (selectedProject) {
      selectedProject.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [focusedProjectIndex, scrollParentCurrent]);

  //Intersection Observer Only
  useEffect(() => {
    if (!isMobile && !scrollParentCurrent) {
      return;
    }

    const observer = new IntersectionObserver(ObserverCallback, {
      root: scrollParentCurrent,
      threshold: 0.9,
    });

    if (scrollParentCurrent) {
      const projects = Array.from(scrollParentCurrent.children);
      projects.forEach((project) => observer.observe(project));
    }

    if (activeIOBlock || !isMobile) {
      observer.disconnect();
    }

    return () => {
      if (scrollParentCurrent) {
        const projects = Array.from(scrollParentCurrent.children);
        projects.forEach((project) => observer.unobserve(project));
      }
    };
  }, [activeIOBlock, ObserverCallback, isMobile, scrollParentCurrent]);

  const next = () => {
    if (focusedProjectIndex < workData.length - 1) {
      setFocusedProjectIndex(focusedProjectIndex + 1);
    } else {
      setActiveIOBlock(true);
      setFocusedProjectIndex(0);
    }
  };

  const previous = () => {
    if (focusedProjectIndex > 0) {
      setFocusedProjectIndex(focusedProjectIndex - 1);
    } else {
      setActiveIOBlock(true);
      setFocusedProjectIndex(workData.length - 1);
    }
  };

  useEffect(() => {
    if (!isMobile && !scrollParentCurrent) {
      return;
    }

    navigateScroll();

    if (activeIOBlock) {
      scrollParentCurrent?.addEventListener(
        "scrollend",
        () => setActiveIOBlock(false),
        {
          once: true,
        },
      );
    }

    return () =>
      scrollParentCurrent?.removeEventListener("scrollend", () =>
        setActiveIOBlock(false),
      );
  }, [
    scrollParentCurrent,
    focusedProjectIndex,
    isMobile,
    activeIOBlock,
    setActiveIOBlock,
    navigateScroll,
  ]);

  return [next, previous, focusedProjectIndex];
};
