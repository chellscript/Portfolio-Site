import "../styles/globals.css";
import type { AppProps } from "next/app";
import reportA11y from "../../a11yreporting";
import React from "react";
import Head from "next/head";
import Footer from "../components/footer";
import NavBar from "../components/navBar";
import {
  pt_sans,
  homevideo,
  blacker,
  caffie_lofie,
  garden_delight,
} from "../fonts";
import clsx from "clsx";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ChellScript</title>
      </Head>
      <main
        className={clsx(
          pt_sans.variable,
          homevideo.variable,
          blacker.variable,
          caffie_lofie.variable,
          garden_delight.variable,
          "font-sans antialiased",
        )}
      >
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}

reportA11y(React);

export default App;
