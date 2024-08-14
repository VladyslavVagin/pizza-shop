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
        primary_1: "#FFBE34",
        primary_2: "#091242",
        secondary: "#F4F4F4",
        heading_font: "#1C1F35",
        paragraph_font: "#666C89",
        borderIcon: "#273270",
        iconBlue: "#111c55",
        header_menu: "rgba(9, 18, 66, 0.25)",
        gradient_accent: "linear-gradient(127deg, #ffb629 0%, #ffda56 50%, #ffd7a6 100%)"
      },
    },
  },
  plugins: [],
};
export default config;
