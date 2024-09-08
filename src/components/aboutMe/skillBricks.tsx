import React from "react";
import { copyDataProps } from "../../typings";

const SkillBricks = ({ data }: { data: copyDataProps["skills"] }) => {
  return (
    <div className="relative flex flex-col items-center gap-y-2">
      <h4>These are my technical skills</h4>{" "}
      <div className="flex w-full flex-row flex-wrap gap-3 md:w-5/6">
        {data.map((skill, index) => (
          <span
            className="chip flex-1 content-center whitespace-nowrap rounded-xl border-2 border-red-950/50 bg-red-400 text-center text-2xl font-bold shadow-bricks"
            key={index}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillBricks;
