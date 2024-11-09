import "../styles/globals.css";
import "dotenv/config";
import type { AppProps } from "next/app";
import reportA11y from "../../a11yreporting"; //make dev server only?
import React from "react";
import Head from "next/head";
import {
  pt_sans,
  homevideo,
  blacker,
  alondra_drawn,
  garden_delight,
} from "../utils/fonts";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
          alondra_drawn.variable,
          garden_delight.variable,
          "font-sans antialiased",
        )}
      >
        <Component {...pageProps} />
        <Analytics />
        <SpeedInsights />
      </main>
    </>
  );
}

reportA11y(React);

export default App;
