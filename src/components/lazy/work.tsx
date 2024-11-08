import dynamic from "next/dynamic";
import { DataProps } from "../../typings";
import ElementPlaceholder from "./placeholder";

const LazyWork = ({
  data,
}: {
  loadingHeight?: string;
  data: DataProps["previousWork"];
}) => {
  const DynamicComponent = dynamic<{ data: DataProps["previousWork"] }>(
    () => import("../work/index"),
    {
      loading: () => (
        <ElementPlaceholder
          className="bg-brand-purple/80"
          loaderContent=' before:content-["Previous_Work_🔥,_Loading..."]'
        />
      ),
    },
  );

  return <DynamicComponent data={data} />;
};

export default LazyWork;
