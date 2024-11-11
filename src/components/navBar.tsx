"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { NavigationProps } from "../typings";
import MenuMobile from "./criticalIcons/MobileMenu";
import MenuClose from "./criticalIcons/MobileClose";

function NavBar({ data: { list } }: { data: NavigationProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    if (!isMobile) setIsOpen(false);
  }, [isMobile]);

  const a11yLabel = "page-section-menu";

  return (
    <nav className="fixed right-0 top-3 z-10 h-1 w-fit items-end justify-center gap-y-3 bg-transparent pr-4 font-blacker max-md:grid md:left-1/2 md:flex md:w-full md:-translate-x-1/2 md:flex-row md:justify-end md:gap-x-2 md:gap-y-0 lg:right-0 lg:max-w-screen-lg lg:pr-10 xl:pr-0">
      {" "}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="menu"
        aria-expanded={isOpen}
        aria-controls={a11yLabel}
        className={clsx(
          "text-nowrap rounded-full border border-indigo-950 md:hidden",
          isOpen
            ? "w-full bg-brand-green shadow-button"
            : "combined-shadow-button w-fit bg-white hover:bg-brand-green",
        )}
      >
        <span
          className={clsx(
            "flex justify-center text-not-black",
            isOpen ? "px-4 py-2" : "px-6 py-4",
          )}
        >
          {isOpen ? <MenuClose /> : <MenuMobile />}
        </span>
      </button>
      <ul
        className="flex flex-col gap-y-3 md:flex-row md:justify-end md:gap-x-2 md:gap-y-0"
        id={a11yLabel}
      >
        {list.map(({ key, label, url }) => (
          <li
            key={key}
            className={clsx(
              "hover:outer-shadow-button combined-shadow-button relative text-nowrap rounded-full border border-indigo-950 bg-white text-center transition-shadow hover:translate-y-1 hover:border-white/50 hover:bg-brand-green md:top-12 md:block",
              isOpen ? "block" : "hidden",
            )}
          >
            <Link
              href={`#${url}`}
              className="block size-full px-4 py-2 text-not-black no-underline hover:text-not-black active:text-slate-600"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
