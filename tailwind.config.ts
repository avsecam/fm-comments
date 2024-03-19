import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      moderateBlue: "#5457b6",
      softRed: "#ed6468",
      lightGrayishBlue: "#c3c4ef",
      paleRed: "#ffb8bb",

      darkBlue: "#324152",
      grayishBlue: "#67727e",
      lightGray: "#eaecf1",
      veryLightGray: "#f5f6fa",
      white: "#ffffff",
    },
  },
  plugins: [],
};
export default config;
