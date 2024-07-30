import React from "react";

const PastWorkList = ({ data, visibleCompanyIndex, setVisibleWorkIndex }) => (
  <div className="flex size-full flex-row flex-wrap content-start justify-center gap-4 rounded-md border p-4 md:h-full md:justify-start">
    {data[visibleCompanyIndex].work.map(({ name }, index) => (
      <button
        key={index}
        className="aspect-square size-40 rounded-md bg-white p-6"
        onClick={() => setVisibleWorkIndex(index)}
      >
        {name}
      </button>
    ))}
  </div>
);
export default PastWorkList;
