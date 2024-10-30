import React from "react";
import { AboutSectionProps } from "../../typings";
import Link from "next/link";
import skillsMichi from "/public/images/aboutMe/skills.png";
import Image from "next/image";

const SkillBricks = ({ data }: { data: AboutSectionProps["skills"] }) => {
  const dataArray = data.split(",");
  return (
    <>
      <div className="flex p-2 md:w-5/6">
        <Image
          height={180}
          width={180}
          src={skillsMichi}
          className="m-0 size-auto object-cover object-left max-lg:hidden"
          alt="Michi in a construction outfit holding a brick"
        />{" "}
        <div className="flex w-full flex-row flex-wrap gap-3 justify-self-center">
          {dataArray.map((skill, index) => (
            <span
              className="brick flex-1 content-center whitespace-nowrap border-2 border-red-950/30 bg-red-400 text-center font-caffie_lofie text-xl font-normal text-red-950 lg:text-2xl"
              key={index}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <Link
        href="#work"
        className="cta-button w-full bg-white p-4 text-center font-blacker text-xl text-not-black md:w-5/6"
      >
        See which projects I used them in{" "}
        <span className="inner-shadow-button aspect-square rounded-full border border-orange-950 bg-white px-2 py-1">
          🔥
        </span>
      </Link>
    </>
  );
};

export default SkillBricks;
