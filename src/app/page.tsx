import Hero from "@/src/components/hero";
import AboutMe from "../components/aboutAndSkills";
import Work from "../components/work";
import Contact from "../components/contact";
import { Metadata } from "next";
import getCopyData, { ReturnedResponse } from "../utils/getCopyData";

export const metadata: Metadata = {
  title: "ChellScript",
  description:
    "Portfolio site for the Front-End Dev with user empathy superpowers. I create intuitive, enjoyable and accessible experiences that actually make sense, especially for humans that use them.",
  openGraph: {
    type: "website",
    url: "https://chellscript.dev",
    title: "ChellScript",
    description:
      "Portfolio site for the Front-End Dev with user empathy superpowers. I create intuitive, enjoyable and accessible experiences that actually make sense, especially for humans that use them.",
  },
  twitter: {
    title: "ChellScript",
    card: "summary_large_image",
    description:
      "Portfolio site for the Front-End Dev with user empathy superpowers. I create intuitive, enjoyable and accessible experiences that actually make sense, especially for humans that use them.",
  },
};

export default async function Home() {
  const { data, error }: ReturnedResponse = await getCopyData();

  if (error) {
    return;
  }

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
