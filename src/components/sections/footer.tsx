// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col flex-wrap items-center gap-4 bg-not-black p-4 text-white">
      <p className="text-center">
        {" "}
        © Michi, 2024. All rights reserved, except{" "}
        <span className="font-gacko text-xl">
          <span className="text-brand-yellow">the good vibes</span> – those are{" "}
          <span className="text-brand-yellow">for you! ✨</span>
        </span>
      </p>
      <div className="flex gap-x-4 *:text-4xl">
        <Link href="" className="hover:text-brand-green">
          <FontAwesomeIcon icon={faGithub} />{" "}
        </Link>{" "}
        <Link href="" className="hover:text-brand-green">
          <FontAwesomeIcon icon={faLinkedin} />{" "}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
