import React from "react";

const Skills = ({ skillsData }: { skillsData: string[] }) => {
  return (
    <section
      id="skills"
      className="grid grid-cols-5 grid-rows-5 justify-items-center gap-5 bg-brand-yellow"
    >
      <h2 className="col-span-5 row-span-1 text-black">My Skills</h2>
      <div className="col-span-5 row-span-4 w-1/2 max-w-screen-md rounded-md">
        <div className="grid grid-cols-6 gap-2">
          {skillsData.map((skill, index) => (
            <div
              className="col-span-2 content-center rounded border border-black bg-red-500 p-3 text-center"
              key={index}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
