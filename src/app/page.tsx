import Hero from "@/src/components/hero";
import { DataProps } from "../typings";
import Head from "next/head";
import AboutMe from "../components/aboutAndSkills";
import Work from "../components/work";
import Contact from "../components/contact";
import getCopyData from "../utils/getCopyData";

export default async function Home() {
  const data: DataProps = await getCopyData();

  const { hero, about, contact, previousWork } = data;

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://res.cloudinary.com" />\{" "}
      </Head>
      <Hero data={hero} />
      <AboutMe data={about} />
      <Work data={previousWork} />
      <Contact data={contact} />
    </>
  );
}
