/* eslint-disable @typescript-eslint/no-require-imports */
const plugin = require('tailwindcss/plugin')
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        128: '32rem',  // for 32rem (512px)
        144: '36rem',  // for 36rem (576px)
      },
      maxWidth: {
        hero: '896px'
      },
      width: {
        hero: '896px'
      },
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
      fontFamily: {
        sans: ['var(--font-pt_sans)', 'Arial', 'Helvetica', 'sans-serif'],
        homevideo: ['var(--font-homevideo)'],
        blacker: ['var(--font-blacker)'],
        garden_delight: ['var(--font-garden_delight)'],
        alondra_drawn: ['var(--font-alondra_drawn)'],
      },

      boxShadow: {
        DEFAULT: '3px 2px 0px',
        'button': '3px 5px 0px',
        'button-hover': '0px 3px 0px',
        'card-hover': '5px 11px 0px',
        inner: 'inset -2px -4px 0px 0px '
      },
      backgroundImage: {
        'skills-pattern': "url('/images/skills/pattern.svg')",
        'contact-pattern': "url('/images/contact/pattern.svg')",
        'hero-hidden-bg': "url('https://res.cloudinary.com/michasaportfolio/image/upload/v1730927902/pattern_qlxyqg.svg')",
        'hero-bg': "url('https://res.cloudinary.com/michasaportfolio/image/upload/v1730928204/background_fpx9rj.svg'"
      },
      animation: {
        'sideswipe-right': 'sideswipeRightIn 0.5s linear forwards',
        'sideswipe-right-out': 'sideswipeRightOut 0.5s linear  forwards',
        'sideswipe-left': 'sideswipeLeftIn 0.5s linear forwards',
        'sideswipe-left-out': 'sideswipeLeftOut 0.5s linear forwards',
        'sideswipe-top-in': 'sideswipeTopIn 0.2s linear forwards',
        marquee: 'marquee 10s linear infinite',
        l21: 'l21 2s infinite linear',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 4px))' },
        }
        ,
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
        sideswipeTopIn: {
          '0%': { transform: 'translateY(-100%)', },
          '100%': { transform: 'translateY(0)' },
        },
        l21: {
          '100%': {
            backgroundPosition: 'left'
          }
        },
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/typography'),
    plugin(function ({ addVariant }: { addVariant: (name: string, selector: string) => void }) {
      addVariant('span', '&>span');
      addVariant('p-span', '&>p>span');

    })

  ],
};
export default config;
