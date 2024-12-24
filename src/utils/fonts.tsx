import { PT_Sans } from "next/font/google";
import localFont from "next/font/local";

export const pt_sans = PT_Sans({
  subsets: ["latin"],
  variable: "--font-pt_sans",
  weight: ["400", "700"],
  preload: true,
});

export const homevideo = localFont({
  src: "../../public/fonts/homevideo.woff2",
  variable: "--font-homevideo",
  preload: true,
});

export const blacker = localFont({
  src: "../../public/fonts/blackershield.woff2",
  variable: "--font-blacker",
  preload: true,
});

export const garden_delight = localFont({
  src: "../../public/fonts/garden-delight.woff2",
  variable: "--font-garden_delight",
  preload: true,
});
