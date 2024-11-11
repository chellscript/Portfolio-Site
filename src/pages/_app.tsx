import "../styles/globals.css";
import "dotenv/config";
import type { AppProps } from "next/app";
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
import { Metadata } from "next";

export const metaData: Metadata = {
  title: "ChellScript",
  description:
    "Portfolio site for the Front-End Dev with user empathy superpowers. I create intuitive, enjoyable and accessible experiences that actually make sense, especially for humans that use them.",
  openGraph: {
    type: "website",
    url: "https://chellscript.dev",
    title: "ChellScript",
    description:
      "Portfolio site for the Front-End Dev with user empathy superpowers. I create intuitive, enjoyable and accessible experiences that actually make sense, especially for humans that use them.",
    images: [
      {
        url: "https://chellscript.dev/images/opengraph-image.png",
      },
    ],
  },
  twitter: {
    title: "ChellScript",
    card: "summary_large_image",
    description:
      "Portfolio site for the Front-End Dev with user empathy superpowers. I create intuitive, enjoyable and accessible experiences that actually make sense, especially for humans that use them.",
    images: [
      {
        url: "https://chellscript.dev/images/twitter-image.png",
      },
    ],
  },
  //   {
  //     rel: "icon",
  //     href: "/favicon.ico", // Path to your favicon
  //     sizes: "16x16",
  //   },
  //   {
  //     rel: "icon",
  //     href: "/icon-192x192.png", // Path to a 192x192 icon
  //     sizes: "192x192",
  //   },
  //   {
  //     rel: "icon",
  //     href: "/icon-512x512.png", // Path to a 512x512 icon
  //     sizes: "512x512",
  //   },
  // ],
  manifest: "/favicon/site.webmanifest",
};

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

export default App;
