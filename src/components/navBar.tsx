import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const OPTIONS = [
  { label: "Skills", url: "skills" },
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
    <header className="mx-auto flex w-full max-w-screen-lg justify-end">
      <nav className="fixed right-4 top-4 z-10 flex h-10 space-x-2 bg-none lg:pr-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(
            "min-w-fit text-nowrap rounded-full border border-indigo-950 px-4 py-2 shadow-thick shadow-not-black hover:bg-brand-green hover:shadow-thick-hover md:hidden",
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
            className={clsx(
              "relative min-w-fit text-nowrap rounded-full border border-indigo-950 bg-white px-4 py-2 shadow-thick shadow-not-black hover:border-white/50 hover:bg-brand-green hover:shadow-thick-hover md:block",
              isOpen ? "block" : "hidden",
            )}
          >
            <span className="text-not-black">{label}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default NavBar;
