import React from "react";
import { AboutSectionProps } from "../../typings";
import Link from "next/link";
import Image from "next/image";
import { getCldImageUrl } from "next-cloudinary";

const SkillBricks = ({ data }: { data: AboutSectionProps["skills"] }) => {
  const dataArray = data.split(",");

  const michiBuilder = getCldImageUrl({
    width: 300,
    height: 300,
    src: "michi_builder_krrfxl.png",
  });

  return (
    <>
      <div className="flex gap-y-4 p-2 md:w-5/6">
        <Image
          height={300}
          width={300}
          src={michiBuilder}
          className="m-0 object-cover max-lg:hidden"
          alt="Michi in a construction outfit holding a brick"
        />{" "}
        <div className="flex w-full flex-row flex-wrap gap-3 justify-self-center">
          {dataArray.map((skill, index) => (
            <span
              className="brick flex-1 content-center whitespace-nowrap border-2 border-red-950/30 bg-red-400 text-center text-xl font-normal text-red-950 lg:text-2xl"
              key={index}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <Link
        href="#portfolio"
        className="cta-button w-full bg-white p-4 text-center font-blacker text-xl text-not-black shadow-button md:w-5/6"
      >
        See the projects I used them in
        <span className="inner-shadow-button aspect-square rounded-full border border-orange-950 bg-white px-2 py-1">
          🔥
        </span>
      </Link>
    </>
  );
};

export default SkillBricks;
