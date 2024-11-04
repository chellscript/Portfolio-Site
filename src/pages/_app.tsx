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
  alondra_drawn,
  garden_delight,
} from "../utils/fonts";
import clsx from "clsx";
import { DataProps } from "../typings";
import sanitizeResponse from "../utils/sanitizeResponse";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Analytics } from "@vercel/analytics/react";

App.getInitialProps = async () => {
  const response = await fetch(`${process.env.CMS_URL}`, {
    cache: "no-store",
  });

  const unsafeJSON = await response.json();
  const json = sanitizeResponse(unsafeJSON);

  return { json };
};

function App({
  Component,
  pageProps,
  json,
}: AppProps & { json: { data: DataProps } }) {
  const { footer, navigation, ...rest } = json.data;

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
          alondra_drawn.variable,
          garden_delight.variable,
          "font-sans antialiased",
        )}
      >
        <NavBar data={navigation} />
        <Component {...pageProps} copyData={rest} />
        <Analytics />
        <Footer data={footer} />
      </main>
    </>
  );
}

reportA11y(React);

export default App;
