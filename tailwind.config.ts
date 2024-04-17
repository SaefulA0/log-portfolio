import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      // default colors from tailwindcss
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      // custom colors
      MainColor: "#38DD77",
      Darker: "#1BB857",
      Lighter: "#70F2A2",
      Subtle: "#C5FDDB",
      //
      Error: "#FF3B3B",
      Warning: "#FFCC00",
      Info: "#FFCC00",
      Success: "#06C270",
      //
      Dark1: "#3A3A3C",
      Dark2: "#6B7588",
      Dark3: "#8F90A6",
      Dark4: "#C7C9D9",
      //
      Light1: "#DDE5E9",
      Light2: "#EBEBF0",
      Light3: "#F2F2F5",
      Light4: "#FAFAFC",
    },
    fontFamily: {
      satoshi: ["var(--font-satoshi)"],
      lato: ["var(--font-lato)"],
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".55em",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
