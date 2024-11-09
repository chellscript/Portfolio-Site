import dynamic from "next/dynamic";
import { DataProps } from "../../typings";
import ElementPlaceholder from "./placeholder";

const LazyFooter = ({
  data,
}: {
  loadingHeight?: string;
  data: DataProps["footer"];
}) => {
  const DynamicComponent = dynamic<{ data: DataProps["footer"] }>(
    () => import("../footer"),
    {
      loading: () => (
        <ElementPlaceholder className="min-h-[25dvh] bg-not-black" />
      ),
    },
  );

  return <DynamicComponent data={data} />;
};

export default LazyFooter;
