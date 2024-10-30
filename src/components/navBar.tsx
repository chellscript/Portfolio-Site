import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const OPTIONS = [
  { label: "About Me", url: "about-me" },
  { label: "My Skills", url: "skills" },
  { label: "Past Work", url: "work" },
  { label: "Contact Me", url: "contact" },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    if (!isMobile) setIsOpen(false);
  }, [isMobile]);

  return (
    //h-42 for scroll ofset
    <nav className="fixed right-0 top-3 z-10 flex h-12 w-fit flex-col items-end justify-center gap-y-3 px-4 font-blacker md:left-1/2 md:w-full md:-translate-x-1/2 md:flex-row md:justify-end md:gap-x-2 md:gap-y-0 lg:right-0 lg:max-w-screen-lg lg:p-0 lg:px-14">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="menu"
        className={clsx(
          "text-nowrap rounded-full border border-indigo-950 px-4 py-2 md:hidden",
          isOpen
            ? "outer-shadow-button w-32 bg-brand-green"
            : "combined-shadow-button w-fit bg-white hover:bg-brand-green",
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
            "hover:outer-shadow-button combined-shadow-button relative w-32 text-nowrap rounded-full border border-indigo-950 bg-white px-4 py-2 text-center align-middle text-not-black transition-shadow hover:translate-y-1 hover:border-white/50 hover:bg-brand-green md:block",
            isOpen ? "block" : "hidden",
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

export default NavBar;
