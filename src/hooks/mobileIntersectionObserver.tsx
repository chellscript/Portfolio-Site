export const useMobileIOHook = (
  scrollerRef: HTMLUListElement,
  callback: (entries: IntersectionObserverEntry[]) => void,
): [IntersectionObserver, Element[]] => {
  let observer = new IntersectionObserver(callback, {
    root: scrollerRef,
    threshold: 1,
  });

  let projects = Array.from(scrollerRef.children);

  return [observer, projects];
};
