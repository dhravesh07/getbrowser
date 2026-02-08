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
          DEFAULT: "#F5EDE0",
          light: "#FFF8F0",
          dim: "#E0D5C5",
          muted: "#BFB5A5",
          faint: "#9A9088",
        },
        saffron: {
          DEFAULT: "#E8853F",
          light: "#F0A56A",
          pale: "#F5C898",
          deep: "#D06A28",
          muted: "#B87030",
        },
        copper: {
          DEFAULT: "#CC8844",
          light: "#DDA866",
          pale: "#EECA99",
          dark: "#A06820",
        },
        wine: {
          DEFAULT: "#7B2D3F",
          light: "#9E4A5E",
          deep: "#5A1A2C",
          muted: "#6B3040",
        },
        stone: {
          DEFAULT: "#8A847E",
          light: "#A8A29E",
          dark: "#5C5650",
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
