import { PT_Sans } from "next/font/google";
import localFont from "next/font/local";

export const pt_sans = PT_Sans({
  subsets: ["latin"],
  variable: "--font-pt_sans",
  weight: ["400", "700"],
});

export const homevideo = localFont({
  src: "../../public/fonts/homevideo.woff2",
  variable: "--font-homevideo",
});

export const blacker = localFont({
  src: "../../public/fonts/blackershield.woff2",
  variable: "--font-blacker",
});

export const garden_delight = localFont({
  src: "../../public/fonts/garden-delight.woff2",
  variable: "--font-garden_delight",
});

export const alondra_drawn = localFont({
  src: "../../public/fonts/CSAlondraDrawn-Regular_demo.woff2",
  variable: "--font-alondra_drawn",
});
