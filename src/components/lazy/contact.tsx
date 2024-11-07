import dynamic from "next/dynamic";
import { DataProps } from "../../typings";
import ElementPlaceholder from "./placeholder";

const LazyContact = ({
  data,
}: {
  loadingHeight?: string;
  data: DataProps["contact"];
}) => {
  const DynamicComponent = dynamic<{ data: DataProps["contact"] }>(
    () => import("../contact"),
    {
      loading: () => (
        <ElementPlaceholder
          className="bg-brand-pink/80"
          loaderContent='before:content-["Contact_Me_🤙🏾,_Loading..."]'
        />
      ),
    },
  );

  return <DynamicComponent data={data} />;
};

export default LazyContact;
