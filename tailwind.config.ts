import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: "#f9fafb",
        dark: "#1b1b1b",
        //
        bgcolor: "#1f242d",
        secondbgcolor: "#323946",
        maincolor: "#7cf03d",
        whitecolor: "#fff",
        disabledcolor: "#fff3",
      },
      screens: {
        xs: "479px",
        sm: "639px",
        md: "767px",
        lg: "1023px",
        xl: "1280px",
        "2xl": "1535px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
