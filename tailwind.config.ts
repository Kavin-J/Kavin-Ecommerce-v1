import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode:'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens:{
        'mxl': '1440px',
      },
      colors:{
        "text-color":"#252b42",
        "secondary-text-color":"#737373",
        "primary-color":'#23A6F0',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'dispaly':'display'
      }
    }
    
  },
  plugins: [
    nextui(),
  ],
};
export default config;
