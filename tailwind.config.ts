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
        dark: "#191818",
        pink: "#ff2c6b",
        cream: "#e8e6e3",
      },
      fontFamily: {
        zagma: ["var(--font-zagma)", "Georgia", "serif"],
        "zagma-italic": ["var(--font-zagma-italic)", "Georgia", "serif"],
        sans: ["var(--font-neue-haas)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      borderRadius: {
        card: "1.2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
