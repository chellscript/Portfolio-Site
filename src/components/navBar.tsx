import Link from "next/link";
import React from "react";

const OPTIONS = [
  { label: "Skills", url: "skills" },
  { label: "Past Work", url: "work" },
  { label: "Contact Me", url: "contact" },
];

function NavBar() {
  return (
    <header className="mx-auto flex w-full max-w-screen-lg justify-end">
      <nav className="fixed top-4 z-10 flex space-x-2 bg-none md:right-0 lg:pr-0">
        {OPTIONS.map(({ label, url }, index) => (
          <Link
            href={`#${url}`}
            key={index}
            className="min-w-fit text-nowrap rounded-full border border-indigo-950 bg-white px-4 py-2 shadow-thick shadow-not-black hover:shadow-thick-hover"
          >
            <span className="text-not-black">{label}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default NavBar;
