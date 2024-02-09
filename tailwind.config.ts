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

      },
      screens:{
        'mxl': '1440px',
      },
      colors:{
        "text-color":"#252b42",
        "secondary-text-color":"#737373",
        "primary-color":'#23A6F0',
        "hover-text-color":'#2A7CC7',
        "gradient-s" : '#96E9FB',
        'gradient-e' : '#ABECD6'
        
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        
      }
    }
    
  },
  plugins: [
    nextui(),
  ],
};
export default config;
