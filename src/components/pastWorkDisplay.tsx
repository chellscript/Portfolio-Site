import React from "react";

const PastWorkDisplay = ({ data }) => {
  {
    console.log(data);
  }
  return (
    <div className="flex h-full flex-col">
      <div className="w-full bg-white">
        <h3>{data.name}</h3>
      </div>
      <div className="flex h-full flex-row">
        <div className="basis-1/2 border border-red-500">media</div>
        <div className="basis-1/2 border border-blue-500"></div>
      </div>
    </div>
  );
};

export default PastWorkDisplay;
