import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        replica: {
          green: "#B6D1CD",
          dark: "#5F6866",
          ink: "#1F2423",
          accent: "#2F4F4A",
          mist: "#EEF5F3",
          paper: "#F7FAF9",
          line: "#D7E3E0",
          card: "#FFFFFF"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 28px 80px rgba(47, 79, 74, 0.12)"
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)"
      }
    }
  },
  plugins: []
};

export default config;
