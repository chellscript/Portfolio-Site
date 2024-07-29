import { Inter } from "next/font/google";
import Hero from "@/src/components/sections/hero";
import Skills from "@/src/components/sections/skills";
import Work from "@/src/components/sections/pastWork";
import Contact from "@/src/components/sections/contact";
import NavBar from "../components/navBar";
import Image from "next/image";
import divider from "../images/waveDivider.svg";

const inter = Inter({ subsets: ["latin"] }); // this is how to import fonts

export default function Home() {
  return (
    <>
      <main>
        <NavBar />
        <Hero />
        <Skills />
        <Work />
        {/*
        <Contact /> */}
      </main>
      <footer>Footer</footer>
    </>
  );
}
