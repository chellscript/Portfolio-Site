import Link from "next/link";
import React from "react";

let Options = [
  { label: "Skills", url: "skills" },
  { label: "Past Work", url: "work" },
  { label: "Contact Me", url: "contact" },
]; //!TODO Move this

function NavBar() {
  return (
    <nav className="fixed right-1/2 top-4 z-10 flex w-full max-w-screen-lg  translate-x-1/2 justify-end space-x-2 pr-6  md:top-6 md:pr-12 lg:pr-0">
      {Options.map(({ label, url }, index) => (
        <Link
          href={`#${url}`}
          key={index}
          className="min-w-fit text-nowrap rounded-full border border-indigo-950 bg-white px-4 py-2 shadow-thick shadow-not-black hover:shadow-thick-hover"
        >
          <span className="text-not-black  ">{label}</span>
        </Link>
      ))}
    </nav>
  );
}

export default NavBar;
