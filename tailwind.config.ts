import { nextui } from "@nextui-org/react";
import { Roboto } from "next/font/google";
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
      keyframes: {
        slider: {
          "0%": { transform: "translateX(-25%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-scale": {
          "0%, 100%": {
            transform: "scale(1)",
            opacity:'1'
            
          },
          "50%": {
            transform: "scale(1.2)",
            opacity:'0.8' // ขนาดใหญ่ขึ้น 20%
          },
        },
      },
      animation: {
        slider: "slider 30s linear infinite",
        "pulse-scale": "pulse-scale 1s ease-in-out infinite",
      },
      backgroundImage: {},
      screens: {},
      colors: {
        "text-color": "#252b42",
        "secondary-text-color": "#737373",
        "secondary-color-1": "#23856D",
        "primary-color": "#23A6F0",
        "hover-text-color": "#2A7CC7",
        "gradient-s": "#96E9FB",
        "gradient-e": "#ABECD6",
        "disable-element": "#8EC2F2",
        primary: {
          DEFAULT: "rgb(45,139,192,0.75)",
        },
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
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
