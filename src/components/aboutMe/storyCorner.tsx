import React from "react";

const StoryCorner = () => {
  return (
    <div className="flex w-full flex-col items-center gap-4 *:w-4/5 *:md:w-full lg:gap-y-4 *:lg:w-4/5 xl:items-center">
      <div className="prose w-full rounded-md border border-not-black bg-pale p-4 shadow-lg">
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
      <div className="prose w-full rounded-md border border-not-black bg-pale p-4 shadow-lg">
        <h3 className="not-prose mb-3 text-center">
          Wait
          <br />
          <em className="chip bg-brand-purple/50 text-not-black">
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
