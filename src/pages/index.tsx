// import { Inter } from "next/font/google";
import Hero from "@/src/components/sections/hero";
import AboutMe from "@/src/components/sections/aboutMe";
import Work from "@/src/components/sections/pastWork";
import Contact from "@/src/components/sections/contact";
import NavBar from "../components/navBar";
import { Dirent, promises as fs } from "fs";
import path from "path";
import { copyDataProps } from "../typings";

// const inter = Inter({ subsets: ["latin"] }); // this is how to import fonts

const publicPath = path.join(process.cwd(), "public", "data");

type fetchDataProps = Promise<string[] | Record<string, undefined>>[];

const fetchData = async (
  directory: string = "",
): Promise<fetchDataProps | undefined> => {
  const currentPath = path.join(publicPath, directory);
  const contents = await fs.readdir(currentPath, { withFileTypes: true });

  return await Promise.all(
    contents.map(async (content: Dirent) => {
      if (content.isDirectory()) {
        return {
          [content.name.split(".")[0]]: await fetchData(content.name),
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
  const copyDataResponse = await fetchData();
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
  // console.log(copyData);
  const { previousWork, skills, timeline } = copyData;
  return (
    <>
      <NavBar />
      <main className="[&_section_>_*:first-child]:max-app-width">
        <Hero />
        <AboutMe skillsData={skills} timelineData={timeline} />
        <Work previousWorkData={previousWork} />
        <Contact />
      </main>
      <footer className="w-full bg-not-black text-white">Footer</footer>
    </>
  );
}
