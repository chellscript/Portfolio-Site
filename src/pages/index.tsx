import Hero from "@/src/components/hero";
import { DataProps } from "../typings";
import LazyAbout from "../components/lazy/about";
import LazyWork from "../components/lazy/work";
import LazyContact from "../components/lazy/contact";

export default function Home({
  copyData,
}: {
  copyData: Omit<DataProps, "footer" | "navigation">;
}) {
  const { hero, about, contact, previousWork } = copyData;

  return (
    <>
      <Hero data={hero} />
      <LazyAbout data={about} />
      <LazyWork data={previousWork} />
      <LazyContact data={contact} />
    </>
  );
}
