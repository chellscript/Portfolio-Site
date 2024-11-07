import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { DataProps } from "../../typings";

const LazyAbout = ({ data }: { data: DataProps["about"] }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const DynamicComponent = dynamic<{ data: DataProps["about"] }>(
    () => import("../aboutAndSkills/index"),
    {
      loading: () => (
        <>
          <div className="min-h-96 animate-pulse bg-orange-400/80">
            Loading...
          </div>
          <div className="min-h-96 animate-pulse bg-red-400/80">Loading...</div>
        </>
      ),
    },
  );

  return <div ref={ref}>{inView && <DynamicComponent data={data} />}</div>;
};

export default LazyAbout;
