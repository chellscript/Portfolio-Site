import { Inter } from "next/font/google";
import Hero from "@/src/components/sections/hero";
import Skills from "@/src/components/sections/skills";
import Work from "@/src/components/sections/pastWork";
import Contact from "@/src/components/sections/contact";
import NavBar from "../components/navBar";
import { promises as fs } from "fs";
import { DataProps } from "../typings";

const inter = Inter({ subsets: ["latin"] }); // this is how to import fonts

export const getStaticProps = async () => {
  try {
    const file = await fs.readFile(`${process.cwd()}/public/data.json`, "utf8");
    const data = JSON.parse(file);
    return { props: { data } };
  } catch (error) {
    console.error(error);
    return { props: {} };
  }
};

export default function Home({ data }: DataProps) {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Skills />
        <Work pastWork={data.pastWork} />
        <Contact />
      </main>
      <footer>Footer</footer>
    </>
  );
}
