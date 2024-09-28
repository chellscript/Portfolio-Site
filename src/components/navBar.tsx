import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const OPTIONS = [
  { label: "About Me", url: "skills" },
  { label: "Past Work", url: "work" },
  { label: "Contact Me", url: "contact" },
];
//TODO change active highlight to blue
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    if (!isMobile) setIsOpen(false);
  }, [isMobile]);

  return (
    <header className="relative mx-auto flex max-w-screen-sm justify-end md:max-w-screen-md lg:max-w-screen-lg">
      <nav className="fixed right-2 top-3 z-10 flex h-10 flex-col gap-y-4 bg-none md:right-16 md:top-6 md:flex-row md:gap-x-2 md:gap-y-0 lg:right-20">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(
            "min-w-fit text-nowrap rounded-full border border-indigo-950 px-4 py-2 md:hidden",
            isOpen
              ? "outer-shadow-button bg-brand-green"
              : "combined-shadow-button bg-white hover:bg-brand-green",
          )}
        >
          <span className="text-not-black">
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
          </span>
        </button>
        {OPTIONS.map(({ label, url }, index) => (
          <Link
            href={`#${url}`}
            key={index}
            onClick={() => setIsOpen(false)}
            className={clsx(
              "hover:outer-shadow-button combined-shadow-button relative min-w-fit text-nowrap rounded-full border border-indigo-950 bg-white px-4 py-2 text-center text-not-black transition-shadow hover:translate-y-1 hover:border-white/50 hover:bg-brand-green hover:font-bold md:block",
              isOpen ? "block" : "hidden",
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default NavBar;
