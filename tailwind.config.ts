import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          DEFAULT: "#0B2A3D",
          light: "#164461",
          dark: "#051621",
        },
        sail: {
          DEFAULT: "#F8F9FA",
          dark: "#E9ECEF",
        },
        gold: {
          DEFAULT: "#D4920A",
          light: "#F0A500",
          dark: "#A67208",
        },
        compass: {
          DEFAULT: "#C0392B",
          light: "#E74C3C",
          dark: "#962D22",
        },
        teal: {
          DEFAULT: "#2E8B7A",
          light: "#3BA692",
          dark: "#1F5F53",
        },
      },
      fontFamily: {
        bebas: ["var(--font-bebas-neue)", "sans-serif"],
        nunito: ["var(--font-nunito)", "sans-serif"],
      },
      animation: {
        "wave": "wave 10s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-2%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
