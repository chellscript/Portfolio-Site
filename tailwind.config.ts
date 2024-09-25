/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'pale': '#F0E4D8',
        'not-black': '#2c3e50',
        'brand-yellow': '#ffcb6b',
        'brand-green': '#D4ED30',
        'brand-purple': '#987dc1',
        'brand-pink': '#f3acc0',
        'brand-blue': '#ace4f3'
      },
      zIndex: {
        1: '1'
      },
      boxShadow: {
        'base': '2px 2px 0px', 'thick': '3px 5px 0px',
        'bricks': '0px 4px 0px'
      },
      backgroundImage: {
        hero: "url('/images/hero/background.jpeg')"
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
};
export default config;
