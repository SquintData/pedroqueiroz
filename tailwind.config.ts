import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        coal: "#11100f",
        ember: "#d99a3d",
        bone: "#f4ede1",
        smoke: "#a99f90",
        graphite: "#1b1a18"
      },
      fontFamily: {
        display: ["var(--font-display, Georgia)", "serif"],
        sans: ["var(--font-sans, Trebuchet MS)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 20px 80px rgba(217, 154, 61, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
