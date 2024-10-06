import React from "react";
import { copyDataProps } from "../../typings";
import Link from "next/link";

const SkillBricks = ({ data }: { data: copyDataProps["skills"] }) => {
  return (
    <div className="relative flex flex-col items-center gap-y-6">
      <span className="text-center">
        <h3 className="mb-0 text-center">✨ My technical skills</h3>
        <p className="m-0 font-garden_delight text-2xl text-not-black">
          (In no particular order)
        </p>
      </span>
      <div className="flex w-full flex-row flex-wrap gap-3 md:w-5/6">
        {data.map((skill, index) => (
          <span
            className="brick flex-1 content-center whitespace-nowrap border-2 border-red-950/30 bg-red-400 text-center font-caffie_lofie text-xl font-normal text-red-950 lg:text-2xl"
            key={index}
          >
            {skill}
          </span>
        ))}
      </div>
      <Link
        href="#work"
        className="cta-button bg-brand-blue p-4 text-center text-xl text-not-black"
      >
        Wanna see how I used them{" "}
        <span className="inner-shadow-button aspect-square rounded-full border border-orange-950 bg-white px-2 py-1">
          🔥
        </span>
      </Link>
    </div>
  );
};

export default SkillBricks;
