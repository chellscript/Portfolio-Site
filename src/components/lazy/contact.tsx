import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { DataProps } from "../../typings";

const LazyContact = ({
  data,
}: {
  loadingHeight?: string;
  data: DataProps["contact"];
}) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const DynamicComponent = dynamic<{ data: DataProps["contact"] }>(
    () => import("../contact"),
    {
      loading: () => (
        <div className="min-h-96 animate-pulse bg-brand-pink/80">
          Loading...
        </div>
      ),
    },
  );

  return <div ref={ref}>{inView && <DynamicComponent data={data} />}</div>;
};

export default LazyContact;
