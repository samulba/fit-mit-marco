import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#1A3C34",
        "forest-mid": "#264A40",
        teal: "#00B894",
        "teal-light": "#00D4A8",
        mint: "#55EFC4",
        sage: "#A8D5BA",
        cream: "#F8F5F0",
        warm: "#FFF8F2",
        sand: "#E8DDD0",
        charcoal: "#2D3436",
        slate: "#636E72",
        "light-slate": "#B2BEC3",
        coral: "#E17055",
        gold: "#D4A853",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
