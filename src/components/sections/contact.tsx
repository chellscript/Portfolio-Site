import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center bg-brand-pink/50 p-6 bg-blend-soft-light md:p-10"
    >
      <div className="bg-contact-pattern debug relative flex h-fit w-full max-w-screen-md flex-col items-center overflow-hidden rounded-lg bg-center bg-repeat p-4 bg-blend-screen shadow shadow-[hotpink]/50 after:ml-0.5 md:items-start">
        <h2 className="">Lets Connect</h2>
        <p className="text-xl italic text-not-black">
          You can't still be shy scrolling all the way down here right?
        </p>
        <div className="max-app-width prose my-4 w-11/12 text-pretty rounded-2xl border border-not-black bg-white p-4 shadow md:w-96">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est eius
          tenetur sapiente, sunt aspernatur culpa doloremque ipsum deserunt quis
          itaque hic. Perspiciatis dolorum perferendis eaque sequi aspernatur
          sunt, necessitatibus minima!
        </div>
        <div className="flex w-full justify-between max-md:flex-col max-md:gap-y-4 md:gap-x-4">
          <button
            className="cta-button bg-brand-yellow max-md:w-full"
            // onClick={() => setActiveSlide(index)}
          >
            Download My Resume
            <span className="inner-shadow-button aspect-square size-8 rounded-full border border-orange-950 bg-white px-2 py-1">
              x
            </span>
          </button>
          <Link href="" className="cta-button bg-brand-green max-md:w-full">
            Checkout My Github
            <span className="inner-shadow-button aspect-square size-8 rounded-full border border-orange-950 bg-white px-2 py-1">
              x
            </span>
          </Link>{" "}
          <Link className="cta-button bg-brand-blue max-md:w-full" href="">
            Message Me on LinkedIn
            <span className="inner-shadow-button aspect-square size-8 rounded-full border border-orange-950 bg-white px-2 py-1">
              x
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
