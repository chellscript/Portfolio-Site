import React from "react";

const StoryCorner = () => {
  return (
    <div className="flex flex-col gap-x-4 gap-y-4 md:flex-row lg:flex-col lg:gap-y-4">
      <div className="shadow-base rounded-md border border-not-black bg-pale p-4">
        <h3 className="text-center">
          From{" "}
          <em className="chip self-center bg-brand-green text-not-black shadow-not-black/80">
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
      <div className="shadow-base rounded-md border border-not-black bg-pale p-4">
        <h4 className="text-center">
          Wait, what's a{" "}
          <em className="chip bg-brand-purple/50 text-not-black lg:whitespace-pre">
            User-Empathy Enthusiast
          </em>{" "}
          ?
        </h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
      </div>
    </div>
  );
};

export default StoryCorner;
