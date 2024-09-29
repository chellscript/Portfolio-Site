import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const OPTIONS = [
  { label: "About Me", url: "about-me" },
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
    <nav className="fixed left-1/2 top-3 z-10 flex w-full -translate-x-1/2 flex-col items-end gap-y-3 px-4 md:w-full md:flex-row md:justify-end md:gap-x-2 md:gap-y-0 md:px-10 lg:right-0 lg:max-w-screen-lg lg:p-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
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
            "hover:outer-shadow-button combined-shadow-button relative w-32 text-nowrap rounded-full border border-indigo-950 bg-white px-4 py-2 text-center text-not-black transition-shadow hover:translate-y-1 hover:border-white/50 hover:bg-brand-green hover:font-bold md:block",
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
