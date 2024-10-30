import Hero from "@/src/components/hero";
import AboutMe from "@/src/components/aboutAndSkills";
import Work from "@/src/components/pastWork";
import Contact from "@/src/components/contact";

import { DataProps } from "../typings";

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.CMS_URL}`, {
    cache: "no-store",
  });

  //TODO sanatise this response here
  const data = await response.json();

  return { props: data };
};

export default function Home({ data }: { data: DataProps }) {
  const { hero, about, contact, previousWork } = data;

  return (
    <>
      <Hero data={hero} />
      <AboutMe data={about} />
      <Work data={previousWork} />
      <Contact data={contact} />
    </>
  );
}
