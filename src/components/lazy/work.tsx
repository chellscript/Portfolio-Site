import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { DataProps } from "../../typings";

const LazyWork = ({
  data,
}: {
  loadingHeight?: string;
  data: DataProps["previousWork"];
}) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const DynamicComponent = dynamic<{ data: DataProps["previousWork"] }>(
    () => import("../work/index"),
    {
      loading: () => (
        <div className="min-h-96 animate-pulse bg-brand-purple">Loading...</div>
      ),
    },
  );

  // return <div ref={ref}>{inView && <DynamicComponent data={data} />}</div>;
  return (
    <div ref={ref}>
      {inView && (
        <div className="min-h-96 animate-pulse bg-brand-purple/80 font-garden_delight">
          Loading...
        </div>
      )}
    </div>
  );
};

export default LazyWork;
