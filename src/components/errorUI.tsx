import Image from "next/image";
import React from "react";
import logo from "../../public/images/chellscriptlogo.webp";
const ErrorUI = () => {
  const year = new Date().getFullYear();

  return (
    <section className="flex h-screen w-screen flex-col">
      <div className="flex h-full items-center justify-center bg-pale *:max-w-hero">
        <div className="flex flex-col gap-y-2 text-center font-homevideo text-not-black *:inline-block lg:size-1/2">
          <h2 className="text-center font-homevideo !leading-tight max-md:text-3xl">
            Oh this is...
            <br />
            <span className="bg-brand-pink/40 p-2 text-red-500">
              unexpected
            </span>
          </h2>
          <p className="text-2xl !leading-normal">
            A{" "}
            <span className="rounded-md bg-brand-pink/40 p-2 font-homevideo underline decoration-red-500 decoration-wavy">
              pesky error
            </span>{" "}
            has prevented this website from loading
          </p>
          <Image
            width={150}
            height={150}
            src={logo}
            alt="chellscript.dev clamshell"
            className="my-4 self-center bg-transparent"
          />{" "}
          <p className="text-highlight bg-brand-green text-xl !leading-normal !mix-blend-darken max-md:!text-wrap">
            (Either reload this page or try again later)
          </p>{" "}
        </div>
      </div>
      <footer className="bg-not-black text-center font-garden_delight text-white">
        © Michi (ChellScript), {year}
      </footer>
    </section>
  );
};

export default ErrorUI;
