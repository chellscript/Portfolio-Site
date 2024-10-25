import Hero from "@/src/components/hero";
import AboutMe from "@/src/components/aboutMe";
import Work from "@/src/components/pastWork";
import Contact from "@/src/components/contact";

import { dataProps } from "../typings";

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.CMS_URL}`, {
    cache: "no-store",
  });
  const data = await response.json();

  return { props: data };
};

export default function Home({ data }: { data: dataProps }) {
  const { hero, about, contact, previousWork } = data;

  return (
    <>
      <Hero data={hero} />
      <AboutMe data={about} />
      {/*<Work previousWorkData={previousWork} /> */}
      <Contact />
    </>
  );
}
