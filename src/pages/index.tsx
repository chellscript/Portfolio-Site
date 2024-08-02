import { Inter } from "next/font/google";
import Hero from "@/src/components/sections/hero";
import Skills from "@/src/components/sections/skills";
import Work from "@/src/components/sections/pastWork";
import Contact from "@/src/components/sections/contact";
import NavBar from "../components/navBar";
import { Dirent, promises as fs } from "fs";
import path from "path";
import { copyDataProps } from "../typings";

const inter = Inter({ subsets: ["latin"] }); // this is how to import fonts

const fetchCopyData = async (directory: string = "") => {
  let publicPath = path.join(process.cwd(), "public", "data");
  let currentPath = path.join(publicPath, directory);
  let contents = await fs.readdir(currentPath, { withFileTypes: true });
  let promises = contents.map(async (content: Dirent) => {
    if (content.isDirectory()) {
      return await fetchCopyData(content.name);
    }

    if (path.extname(content.name) === ".json") {
      return fs
        .readFile(path.join(currentPath, content.name), "utf8")
        .then((response) => JSON.parse(response));
    }
  });

  let promiseResults = (await Promise.all(promises)) as [];
  if (directory.length) {
    return { [directory.split(".")[0]]: promiseResults };
  }

  let copyData = promiseResults.reduce((previous, current) => {
    return {
      ...previous,
      [Object.keys(current)[0]]: Object.values(current)[0],
    };
  }, {});

  return copyData;
};

export const getStaticProps = async () => {
  let copyData = await fetchCopyData();
  return { props: { copyData } };
};

export default function Home({ copyData }: copyDataProps) {
  const { previousWork, skills } = copyData;
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Skills skillsData={skills} />
        <Work previousWorkData={previousWork} />
        <Contact />
      </main>
      <footer>Footer</footer>
    </>
  );
}
