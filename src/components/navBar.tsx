import React from "react";

let Options = ["Skills", "Past Work", "Contact Me"]; //!TODO Move this
function NavBar() {
  return (
    <nav className="fixed right-1/2 top-4 z-10 flex w-full max-w-[800px] translate-x-1/2 justify-end space-x-2  pr-6 md:top-6 md:pr-12 lg:pr-0">
      {Options.map((option) => (
        <div
          key={option}
          className="min-w-fit text-nowrap rounded-full border border-indigo-950 bg-white px-4 py-2 shadow-thick shadow-not-black hover:bg-brand-blue hover:shadow-thick-hover"
        >
          <span className="text-not-black  ">{option}</span>
        </div>
      ))}
    </nav>
  );
}

export default NavBar;
