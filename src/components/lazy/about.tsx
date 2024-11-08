import dynamic from "next/dynamic";
import { DataProps } from "../../typings";
import ElementPlaceholder from "./placeholder";

const LazyAbout = ({ data }: { data: DataProps["about"] }) => {
  const DynamicComponent = dynamic<{ data: DataProps["about"] }>(
    () => import("../aboutAndSkills/index"),
    {
      loading: () => (
        <ElementPlaceholder
          className="bg-orange-500/80"
          loaderContent='before:content-["About_Me_💁🏾‍♀️,_Loading..."]'
        />
      ),
    },
  );

  return <DynamicComponent data={data} />;
};

export default LazyAbout;
