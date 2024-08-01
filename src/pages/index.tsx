import { Inter } from "next/font/google";
import Hero from "@/src/components/sections/hero";
import Skills from "@/src/components/sections/skills";
import Work from "@/src/components/sections/pastWork";
import Contact from "@/src/components/sections/contact";
import NavBar from "../components/navBar";
import { promises as fs } from "fs";
import path from "path";
import { DataProps } from "../typings";

const inter = Inter({ subsets: ["latin"] }); // this is how to import fonts
let publicPath = path.join(process.cwd(), "public", "data");

const fetchPreviousWorkData = async () => {
  try {
    let filesDirectory = path.join(publicPath, "previousWork");
    let files = await fs.readdir(filesDirectory);
    let promises = files.map((file: string) =>
      fs
        .readFile(path.join(filesDirectory, file), "utf8")
        .then((response) => JSON.parse(response)),
    );
    let results = await Promise.all(promises);
    return results;
  } catch (error) {
    console.error(error);
  }
};

export const getStaticProps = async () => {
  try {
    let data = await fetchPreviousWorkData();
    return { props: { previousWork: data } };
  } catch (error) {
    console.error(error);
    return { props: {} };
  }
};

export default function Home({ previousWork }: DataProps) {
  console.log(previousWork);
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Skills />
        <Work pastWork={previousWork} />
        <Contact />
      </main>
      <footer>Footer</footer>
    </>
  );
}
