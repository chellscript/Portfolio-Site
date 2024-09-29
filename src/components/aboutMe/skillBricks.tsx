import React from "react";
import { copyDataProps } from "../../typings";
import Link from "next/link";

const SkillBricks = ({ data }: { data: copyDataProps["skills"] }) => {
  return (
    <div className="relative flex flex-col items-center gap-y-6">
      <h3>✨ My technical skills</h3>{" "}
      <div className="flex w-full flex-row flex-wrap gap-3 md:w-5/6">
        {data.map((skill, index) => (
          <span
            className="chip flex-1 content-center whitespace-nowrap rounded-xl border-2 border-red-950/30 bg-red-400 text-center text-xl lg:text-2xl"
            key={index}
          >
            {skill}
          </span>
        ))}
      </div>
      <Link
        href="#work"
        className="cta-button bg-white p-4 text-center text-xl hover:font-bold"
      >
        Wanna see how I used them{" "}
        <span className="inner-shadow-button aspect-square size-8 rounded-full border border-orange-950 bg-brand-green px-2 py-1">
          x
        </span>
      </Link>
    </div>
  );
};

export default SkillBricks;
