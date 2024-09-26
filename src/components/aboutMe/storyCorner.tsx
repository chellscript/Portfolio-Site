import React from "react";

const StoryCorner = () => {
  return (
    <div className="flex w-full flex-col gap-4 lg:gap-y-4">
      <div className="prose rounded-md border border-not-black bg-pale p-4 shadow-thick md:w-full lg:w-full">
        <h3 className="not-prose mb-3 text-center">
          From{" "}
          <em className="chip self-center whitespace-nowrap break-normal bg-brand-green leading-loose text-not-black">
            Life Code
          </em>{" "}
          to{" "}
          <em className="chip whitespace-nowrap break-normal bg-brand-pink">
            Computer Code
          </em>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          accusamus nesciunt! Magnam saepe eligendi voluptatem nam maxime. Ullam
          consequatur, tempore officiis culpa cupiditate quibusdam ab mollitia
          quae veritatis, dolor fugiat?
        </p>
      </div>
      <div className="prose rounded-md border border-not-black bg-pale p-4 shadow-thick md:w-full lg:w-full">
        <h3 className="not-prose mb-3 text-center">
          Wait
          <br />
          <em className="chip bg-brand-purple/50 text-not-black sm:text-nowrap lg:whitespace-pre">
            User-Empathy Enthusiast
          </em>{" "}
          ?
        </h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
      </div>
    </div>
  );
};

export default StoryCorner;
