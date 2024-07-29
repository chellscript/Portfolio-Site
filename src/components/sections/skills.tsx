import React from "react";
import Image from "next/image";
import divider from "../../images/waveDivider.svg";
const MySkills = [
  "React",
  "Typescript",
  "HTML & CSS",
  "Figma",
  "APIs",
  "Javascript",
  "Accessibility",
  "UX/UI Design",
  "E2E Testing",
  "Tailwind",
  "Svelte",
  "Accesibility",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="grid grid-cols-5 grid-rows-5 justify-items-center gap-5  bg-brand-yellow "
    >
      <h2 className="col-span-5 row-span-1  text-5xl text-black">My Skills</h2>
      <div className="col-span-5 row-span-4 w-1/2 max-w-screen-md rounded-md ">
        {/* <Image src={divider} fill alt="" /> */}
        <div className="grid grid-cols-6  gap-2">
          {MySkills.map((skill, index) => (
            <div
              className="col-span-2 content-center rounded border border-black bg-red-500 p-3 text-center "
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
