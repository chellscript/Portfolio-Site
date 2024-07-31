import React from "react";
import { PastWorkListProps } from "../typings";

const PastWorkList = ({ data, setVisibleWorkIndex }: PastWorkListProps) => (
  <ul className="flex size-full flex-row flex-wrap content-start justify-center gap-4 rounded-md border p-4 md:h-full md:justify-start">
    {data.work.map(({ name }, index) => (
      <li key={index}>
        <button
          className="aspect-square size-40 rounded-md bg-white p-6"
          onClick={() => setVisibleWorkIndex(index)}
        >
          {name}
        </button>
      </li>
    ))}
  </ul>
);
export default PastWorkList;
