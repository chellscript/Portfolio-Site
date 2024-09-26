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
      <nav className="fixed right-2 top-3 z-10 flex h-10 flex-col gap-y-2 bg-none md:right-16 md:top-6 md:flex-row md:gap-x-2 md:gap-y-0 lg:right-[unset]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(
            "min-w-fit text-nowrap rounded-full border border-indigo-950 px-4 py-2 shadow-thick shadow-not-black hover:bg-brand-green hover:shadow-base md:hidden",
            isOpen ? "bg-brand-green" : "bg-white",
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
              "relative min-w-fit text-nowrap rounded-full border border-indigo-950 bg-white px-4 py-2 text-not-black shadow-thick shadow-not-black hover:border-white/50 hover:bg-brand-green hover:font-bold hover:shadow-base md:block",
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
