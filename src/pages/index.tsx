import { Inter } from "next/font/google";
import Hero from "@/src/components/sections/hero";
import Skills from "@/src/components/sections/skills";
import Work from "@/src/components/sections/pastWork";
import Contact from "@/src/components/sections/contact";
import NavBar from "../components/navBar";
import { Dirent, promises as fs } from "fs";
import path from "path";
import { copyDataProps, PastWorkDataProps } from "../typings";

const inter = Inter({ subsets: ["latin"] }); // this is how to import fonts
let publicPath = path.join(process.cwd(), "public", "data");

type fetchCopyDataProps = Promise<string[] | Record<string, any>>[];

const fetchCopyData = async (
  directory: string = "",
): Promise<fetchCopyDataProps | undefined> => {
  let currentPath = path.join(publicPath, directory);
  let contents = await fs.readdir(currentPath, { withFileTypes: true });

  return await Promise.all(
    contents.map(async (content: Dirent) => {
      if (content.isDirectory()) {
        return {
          [content.name.split(".")[0]]: await fetchCopyData(content.name),
        };
      }

      if (path.extname(content.name) === ".json") {
        return fs
          .readFile(path.join(currentPath, content.name), "utf8")
          .then((response) => JSON.parse(response));
      }

      return undefined;
    }),
  );
};

export const getStaticProps = async () => {
  let copyDataResponse = await fetchCopyData();
  let copyData = {};
  if (copyDataResponse?.length) {
    copyData = copyDataResponse.reduce((previous, current) => {
      return {
        ...previous,
        [Object.keys(current)[0]]: Object.values(current)[0],
      };
    }, {});
  }

  return { props: { copyData } };
};

export default function Home({ copyData }: { copyData: copyDataProps }) {
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
