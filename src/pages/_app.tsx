import "../styles/globals.css";
import "dotenv/config";
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
import { DataProps } from "../typings";

App.getInitialProps = async () => {
  const response = await fetch(`${process.env.CMS_URL}`, {
    cache: "no-store",
  });

  //TODO sanatise this response here
  const json = await response.json();

  return { json };
};

function App({
  Component,
  pageProps,
  json,
}: AppProps & { json: { data: DataProps } }) {
  const { footer, ...rest } = json.data;

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
        <Component {...pageProps} copyData={rest} />
        <Footer data={footer} />
      </main>
    </>
  );
}

reportA11y(React);

export default App;
