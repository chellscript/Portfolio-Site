import Hero from "@/src/components/hero";
import { DataProps } from "../typings";
import LazyAbout from "../components/lazy/about";
import LazyWork from "../components/lazy/work";
import LazyContact from "../components/lazy/contact";
import Head from "next/head";

export default function Home({
  copyData,
}: {
  copyData: Omit<DataProps, "footer" | "navigation">;
}) {
  const { hero, about, contact, previousWork } = copyData;

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
      </Head>
      <Hero data={hero} />
      <LazyAbout data={about} />
      <LazyWork data={previousWork} />
      <LazyContact data={contact} />
    </>
  );
}
