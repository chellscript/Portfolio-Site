import Hero from "@/src/components/hero";
import { DataProps } from "../typings";
import Head from "next/head";
import sanitizeResponse from "../utils/sanitizeResponse";
import NavBar from "../components/navBar";
import AboutMe from "../components/aboutAndSkills";
import Work from "../components/work";
import Contact from "../components/contact";
import Footer from "../components/footer";

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.CMS_URL}`, {
    cache: "no-store",
  });

  const unsafeJSON = await response.json();
  const { data } = sanitizeResponse(unsafeJSON);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return { props: { data } };
};

export default function Home({ data }: { data: DataProps }) {
  const { navigation, hero, about, contact, previousWork, footer } = data;

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://res.cloudinary.com" />\{" "}
      </Head>
      <NavBar data={navigation} />
      <Hero data={hero} />
      <AboutMe data={about} />
      <Work data={previousWork} />
      <Contact data={contact} />
      <Footer data={footer} />
    </>
  );
}
