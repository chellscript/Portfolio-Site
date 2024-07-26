import { Inter } from "next/font/google";
import Hero from "@/src/components/sections/hero";
import Skills from "@/src/components/sections/skills";
import Work from "@/src/components/sections/work";
import Contact from "@/src/components/sections/contact";
import NavBar from "../components/navBar";

const inter = Inter({ subsets: ["latin"] }); // this is how to import fonts

export default function Home() {
  return (
    <>
      <main className="relative">
        <NavBar />
        <Hero />
        <Skills />
        <Work />
        <Contact />
      </main>
      <footer>Footer</footer>
    </>
  );
}
