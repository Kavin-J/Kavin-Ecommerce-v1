import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      screens: {
        "xs":"526px",
        "mxl": "1440px",
        
      },
      colors: {
        "text-color": "#252b42",
        "secondary-text-color": "#737373",
        "secondary-color-1":"#23856D",
        "primary-color": "#23A6F0",
        "hover-text-color": "#2A7CC7",
        "gradient-s": "#96E9FB",
        "gradient-e": "#ABECD6",
        primary:{
          DEFAULT:'rgb(45,139,192,0.75)',
        }
      },
      transitionProperty: {
        "height": "height",
        "spacing": "margin, padding",
      },
      objectPosition: {
        "option-1": "top 50px right 0px",
        "option-2": "bottom -20px right 0px",
        "option-3": "bottom -20px right -75px",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
