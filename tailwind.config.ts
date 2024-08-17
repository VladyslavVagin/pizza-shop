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
        subtitle_back: "rgba(4, 28, 55, 0.5)",
        subtitle_background: "rgba(232, 232, 232, 0.5)",
        input_border: "#4e5683"
      },
      backgroundImage: {
        "hero-pattern": "url('/images/hero.webp')",
        "accent-gradient": "linear-gradient(127deg, #ffb629 0%, #ffda56 50%, #ffd7a6 100%)",
        "card-gradient": "linear-gradient(0deg, #091242 0%, rgba(60, 60, 60, 0) 100%)",
        "weprovide-pattern": "url('/images/background.webp')",
      },
      fontSize: {
        titleMain: ["60px", "72px"],
      },
      scale: {
        "900": "9.0"
      },
    },
  },
  plugins: [],
};
export default config;
