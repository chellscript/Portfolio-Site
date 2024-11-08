import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { NavigationProps } from "../typings";
import { Icon } from "@iconify/react/dist/iconify.js";
import MenuMobile from "../utils/mobileMenu";

function NavBar({ data: { list } }: { data: NavigationProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    if (!isMobile) setIsOpen(false);
  }, [isMobile]);

  return (
    <nav className="fixed right-0 top-3 z-10 h-1 w-fit items-end justify-center gap-y-3 bg-transparent pr-4 font-blacker max-md:grid md:left-1/2 md:flex md:w-full md:-translate-x-1/2 md:flex-row md:justify-end md:gap-x-2 md:gap-y-0 lg:right-0 lg:max-w-screen-lg lg:pr-10 xl:pr-0">
      {" "}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="menu"
        className={clsx(
          "text-nowrap rounded-full border border-indigo-950 px-4 py-2 md:hidden",
          isOpen
            ? "w-full bg-brand-green shadow-button"
            : "combined-shadow-button w-fit bg-white hover:bg-brand-green",
        )}
      >
        <span className="flex justify-center text-not-black hover:scale-150">
          {isOpen ? <Icon icon="mingcute:close-fill" /> : <MenuMobile />}
        </span>
      </button>
      {list.map(({ key, label, url }) => (
        <Link
          href={`#${url}`}
          key={key}
          onClick={() => setIsOpen(false)}
          className={clsx(
            "hover:outer-shadow-button combined-shadow-button relative text-nowrap rounded-full border border-indigo-950 bg-white px-4 py-2 text-center text-not-black transition-shadow hover:translate-y-1 hover:border-white/50 hover:bg-brand-green hover:text-not-black md:top-12 md:block",
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
