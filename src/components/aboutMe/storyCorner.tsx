import React from "react";

const StoryCorner = () => {
  return (
    <div className="flex w-full flex-col items-center gap-4 *:w-11/12 *:md:w-full lg:gap-y-4 *:lg:w-4/5 xl:items-center">
      <div className="prose w-full rounded-md border border-not-black bg-pale p-4 shadow">
        <h3 className="not-prose mb-3 text-center">
          From{" "}
          <span className="text-highlight bg-brand-green/80">Life Code</span> to{" "}
          <span className="text-highlight bg-brand-pink/80">Computer Code</span>
        </h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          accusamus nesciunt! Magnam saepe eligendi voluptatem nam maxime. Ullam
          consequatur, tempore officiis culpa cupiditate quibusdam ab mollitia
          quae veritatis, dolor fugiat?
        </p>
      </div>
      <div className="prose w-full rounded-md border border-not-black bg-pale p-4 shadow">
        <h3 className="not-prose relative mb-3 text-center">
          Wait
          <br />
          <em className="text-highlight bg-brand-purple/50">
            User-Empathy Enthusiast
          </em>
          ?
        </h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
      </div>
    </div>
  );
};

export default StoryCorner;
