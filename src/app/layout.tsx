import "../styles/globals.css";
import "dotenv/config";
import clsx from "clsx";
import { Metadata } from "next";
import { ReactNode } from "react";
import {
  pt_sans,
  homevideo,
  blacker,
  alondra_drawn,
  garden_delight,
} from "../utils/fonts";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import getCopyData from "../utils/getCopyData";
import ErrorUI from "../components/errorUI";

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

  manifest: "/favicon/site.webmanifest",
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const { error, data } = await getCopyData();

  return (
    <html lang="en">
      <body
        className={clsx(
          pt_sans.variable,
          homevideo.variable,
          blacker.variable,
          alondra_drawn.variable,
          garden_delight.variable,
          "font-sans antialiased",
        )}
      >
        {error ? (
          <ErrorUI error={error} />
        ) : (
          <>
            {" "}
            <NavBar data={data.navigation} />
            {children}
            <Footer data={data.footer} />
            <Analytics />
          </>
        )}
      </body>
    </html>
  );
};

export default RootLayout;
