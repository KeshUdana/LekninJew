import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F9F5EE",
        ink: "#111111",
        charcoal: "#1E1E1E",
        champagne: "#C9A055",
        ceylonTeal: "#2A5F5F",
        warmGrey: "#8A857C",
      },
      fontFamily: {
        heading: "var(--font-heading)",
        sans: "var(--font-body)",
      },
      spacing: {
        section: "6rem",
      },
    },
  },
};

export default config;
