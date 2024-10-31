import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ContactSectionProps } from "../typings";
import clsx from "clsx";
import Image from "next/image";
import { marked } from "marked";
import myself from "/public/images/contact/avatar_michi.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@headlessui/react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const buttonColor: { [key: string]: string } = {
  github: "bg-brand-yellow",
  linkedIn: "bg-brand-blue",
  resume: "bg-brand-green",
};

//TODO UPDATE RESUME WITH REAL ONE

const ReactionButtion = ({
  toggleFunction,
  toggleBool,
}: {
  toggleFunction: (arg: boolean) => void;
  toggleBool: boolean;
}) => (
  <Button
    className="inner-shadow-button ease absolute -bottom-4 right-2 block size-auto items-center justify-center rounded-full border border-indigo-950 bg-pale px-4 py-1 text-center shadow-not-black/50"
    onClick={() => toggleFunction(!toggleBool)}
  >
    <FontAwesomeIcon
      className={clsx(
        toggleBool
          ? "text-red-500 hover:text-not-black"
          : "text-not-black hover:scale-125",
      )}
      icon={faHeart}
    />
  </Button>
);

const Contact = ({ data }: { data: ContactSectionProps }) => {
  const {
    title,
    subline,
    employMe,
    contactMe,
    links: { list },
  } = data;

  const [contactHeart, setContactHeart] = useState(false);
  const [hireHeart, setHireHeart] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const date = now.toLocaleDateString([], {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    setCurrentTime(`@ ${time} ${date}`);
  }, []);

  return (
    <section
      id="contact"
      className="flex flex-col items-center bg-brand-pink/50 py-6 bg-blend-soft-light md:p-10"
    >
      <div className="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-brand-pink/50 bg-contact-pattern bg-center bg-repeat p-4 bg-blend-overlay shadow shadow-[hotpink]/50 after:ml-0.5 md:items-center lg:max-w-screen-lg lg:px-8">
        <h2>{title}</h2>
        <p className="font-garden_delight text-xl text-not-black max-md:text-center md:text-2xl">
          {subline}
        </p>
        <div className="my-6 grid w-full grid-cols-1 grid-rows-[(repeat(3,auto))] content-center justify-items-center gap-x-4 rounded-lg bg-white/60 p-4 pb-8 md:grid-cols-[auto_auto] md:grid-rows-[auto_auto] md:justify-items-start lg:w-10/12">
          <Image
            quality={100}
            width={120}
            height={120}
            src={myself}
            alt="chat avatar of michi"
            className="col-span-1 col-start-1 row-start-1 aspect-square rounded-full border-2 border-white bg-brand-yellow/80 object-contain object-bottom md:row-span-full"
          />
          <div className="col-span-1 col-start-1 row-start-2 flex flex-nowrap gap-x-2 md:col-start-2 md:row-start-1">
            <p className="font-homevideo text-xl font-bold">Michi</p>
            <p className="prose uppercase">{currentTime}</p>
          </div>
          <div className="col-span-1 col-start-1 row-start-3 flex flex-col gap-y-6 md:col-start-2 md:row-start-2">
            <div className="relative">
              <div
                className="max-app-width w-full text-pretty rounded-2xl rounded-bl-none border border-not-black bg-white p-4 shadow max-md:text-center"
                dangerouslySetInnerHTML={{ __html: marked.parse(contactMe) }}
              />

              <ReactionButtion
                toggleBool={contactHeart}
                toggleFunction={setContactHeart}
              />
            </div>{" "}
            <div className="relative">
              <div
                className="max-app-width [&>p:nth-of-type(2)]:hire-emph prose w-full text-pretty rounded-2xl rounded-bl-none border border-not-black bg-white p-4 shadow prose-p:my-2 max-md:text-center"
                dangerouslySetInnerHTML={{ __html: marked.parse(employMe) }}
              />
              <ReactionButtion
                toggleBool={hireHeart}
                toggleFunction={setHireHeart}
              />
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 justify-between justify-items-center *:text-center max-md:flex-col max-md:gap-y-4 md:grid-cols-3 md:gap-x-4 lg:w-10/12">
          {list.map(({ url, key, label, logo }, index) => (
            <Link
              key={index}
              href={url}
              target="_blank"
              className={clsx("cta-button max-md:w-full", buttonColor[key])}
            >
              {label}
              <span className="inner-shadow-button flex aspect-square size-8 items-center rounded-full border border-orange-950 bg-white px-2 py-1">
                <Image
                  quality={100}
                  width={35}
                  height={35}
                  src={logo}
                  alt={`${logo} logo`}
                  className="scale-110 object-contain"
                />{" "}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
