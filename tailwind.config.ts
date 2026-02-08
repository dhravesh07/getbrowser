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
        void: {
          DEFAULT: "#0A0E1A",
          deep: "#070B14",
          surface: "#111620",
          card: "#151B2B",
          light: "#1C2333",
        },
        parchment: {
          DEFAULT: "#EDE0D0",
          light: "#F5EDE0",
          dim: "#C4B8A8",
          muted: "#8A7F72",
          faint: "#5C554C",
        },
        saffron: {
          DEFAULT: "#D4763C",
          light: "#E8945A",
          pale: "#F0B88A",
          deep: "#B85E28",
          muted: "#A06030",
        },
        copper: {
          DEFAULT: "#B87333",
          light: "#D4955C",
          pale: "#E4B88A",
          dark: "#8A5520",
        },
        wine: {
          DEFAULT: "#7B2D3F",
          light: "#9E4A5E",
          deep: "#5A1A2C",
          muted: "#6B3040",
        },
        stone: {
          DEFAULT: "#6B6560",
          light: "#8A847E",
          dark: "#4A4540",
          faint: "#3A3530",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "draw-line": "drawLine 1.5s cubic-bezier(0.16,1,0.3,1) forwards",
        "grain": "grain 8s steps(10) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        drawLine: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-5%,-10%)" },
          "20%": { transform: "translate(-15%,5%)" },
          "30%": { transform: "translate(7%,-25%)" },
          "40%": { transform: "translate(-5%,25%)" },
          "50%": { transform: "translate(-15%,10%)" },
          "60%": { transform: "translate(15%,0%)" },
          "70%": { transform: "translate(0%,15%)" },
          "80%": { transform: "translate(3%,35%)" },
          "90%": { transform: "translate(-10%,10%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
