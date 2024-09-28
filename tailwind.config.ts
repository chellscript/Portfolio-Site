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
        DEFAULT: '3px 2px 0px',
        'button': '3px 5px 0px',
        'button-hover': ' 1px 5px 0px',
        inner: 'inset -2px -4px 0px 0px '
      },
      backgroundImage: {
        hero: "url('/images/hero/background.jpeg')"
      },
      animation: {
        'sideswipe-right': 'sideswipeRightIn 0.75s linear forwards',
        'sideswipe-right-out': 'sideswipeRightOut 0.75s linear  forwards',
        'sideswipe-left': 'sideswipeLeftIn 0.75s linear forwards',
        'sideswipe-left-out': 'sideswipeLeftOut 0.75s linear forwards',
      },
      keyframes: {
        sideswipeRightIn: {
          '0%': { transform: 'translateX(100%)', },
          '100%': { transform: 'translateX(0)' },
        },
        sideswipeRightOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        sideswipeLeftIn: {
          '0%': { transform: 'translateX(-100%)', },
          '100%': { transform: 'translateX(0)' },
        },
        sideswipeLeftOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
      }

    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
};
export default config;
