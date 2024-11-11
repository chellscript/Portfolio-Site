import "../styles/globals.css";
import "dotenv/config";
import clsx from "clsx";
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
          <ErrorUI />
        ) : (
          <>
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
