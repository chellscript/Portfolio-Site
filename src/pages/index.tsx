import Hero from "@/src/components/hero";
import AboutMe from "@/src/components/aboutAndSkills";
import Work from "@/src/components/work";
import Contact from "@/src/components/contact";

import { DataProps } from "../typings";

export default function Home({
  copyData,
}: {
  copyData: Omit<DataProps, "footer">;
}) {
  const { hero, about, contact, previousWork } = copyData;

  return (
    <>
      <Hero data={hero} />
      <AboutMe data={about} />
      <Work data={previousWork} />
      <Contact data={contact} />
    </>
  );
}
