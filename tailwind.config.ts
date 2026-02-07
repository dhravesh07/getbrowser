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
        cosmic: {
          50: "#F5F0FF",
          100: "#EBE0FF",
          200: "#D4BFFF",
          300: "#B794FF",
          400: "#9B6DFF",
          500: "#7C3AED",
          600: "#6D28D9",
          700: "#5B21B6",
          800: "#4C1D95",
          900: "#3B0764",
          950: "#1E0038",
        },
        astro: {
          gold: "#F5A623",
          amber: "#E8930C",
          bronze: "#C87533",
          sun: "#FFD700",
          moon: "#C0C0C0",
        },
        sky: {
          deep: "#0F0A2E",
          midnight: "#130D3A",
          twilight: "#1A1145",
          dusk: "#231755",
          nebula: "#2D1B69",
        },
        element: {
          fire: "#E74C3C",
          earth: "#27AE60",
          air: "#3498DB",
          water: "#2980B9",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "glow-gold": "glowGold 3s ease-in-out infinite alternate",
        "spin-slow": "spin 60s linear infinite",
        "spin-slower": "spin 90s linear infinite",
        "twinkle": "twinkle 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowGold: {
          "0%": { boxShadow: "0 0 20px rgba(245,166,35,0.25)" },
          "100%": { boxShadow: "0 0 40px rgba(255,215,0,0.45)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.3)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
