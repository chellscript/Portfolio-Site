import React from "react";

const StoryCorner = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row lg:flex-col lg:gap-y-4">
      <div className="prose rounded-md border border-not-black bg-pale p-4 shadow-thick md:w-1/2 lg:w-full">
        <h3 className="mb-3 text-center">
          From{" "}
          <em className="chip self-center bg-brand-green text-not-black">
            Life Code
          </em>{" "}
          to <em className="chip bg-brand-pink">Computer Code</em>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          accusamus nesciunt! Magnam saepe eligendi voluptatem nam maxime. Ullam
          consequatur, tempore officiis culpa cupiditate quibusdam ab mollitia
          quae veritatis, dolor fugiat?
        </p>
      </div>
      <div className="prose rounded-md border border-not-black bg-pale p-4 shadow-thick md:w-1/2 lg:w-full">
        <h3 className="mb-3 text-center">
          Wait, what is an{" "}
          <em className="chip bg-brand-purple/50 text-not-black lg:whitespace-pre">
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
