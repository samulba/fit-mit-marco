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
        "forest-deep": "#132B25",
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
      // Unified easing curves
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      // Unified durations
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
      // Soft brand shadows (all use forest as base color)
      boxShadow: {
        "soft-sm": "0 2px 8px -2px rgba(26, 60, 52, 0.06)",
        soft:
          "0 4px 16px -4px rgba(26, 60, 52, 0.08), 0 2px 6px -2px rgba(26, 60, 52, 0.04)",
        "soft-md":
          "0 8px 24px -8px rgba(26, 60, 52, 0.12), 0 3px 8px -3px rgba(26, 60, 52, 0.06)",
        "soft-lg":
          "0 16px 40px -12px rgba(26, 60, 52, 0.16), 0 6px 14px -4px rgba(26, 60, 52, 0.08)",
        "soft-xl":
          "0 24px 60px -16px rgba(26, 60, 52, 0.22), 0 8px 20px -6px rgba(26, 60, 52, 0.1)",
        "teal-glow":
          "0 16px 40px -12px rgba(0, 184, 148, 0.35), 0 6px 14px -4px rgba(0, 184, 148, 0.15)",
        "mint-glow":
          "0 16px 40px -12px rgba(85, 239, 196, 0.25), 0 0 0 1px rgba(85, 239, 196, 0.1)",
      },
      // Unified border radius
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
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
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "soft-float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        marquee: "marquee 30s linear infinite",
        shimmer: "shimmer 1.8s cubic-bezier(0.22, 1, 0.36, 1) infinite",
        "soft-float": "soft-float 4s cubic-bezier(0.22, 1, 0.36, 1) infinite",
      },
      // Responsive clamp helpers
      fontSize: {
        "display-xl": [
          "clamp(3rem, 9vw, 8rem)",
          { lineHeight: "0.95", letterSpacing: "-0.02em" },
        ],
        "display-lg": [
          "clamp(2.5rem, 7vw, 6rem)",
          { lineHeight: "0.98", letterSpacing: "-0.02em" },
        ],
        "display-md": [
          "clamp(2rem, 5vw, 4rem)",
          { lineHeight: "1.02", letterSpacing: "-0.015em" },
        ],
      },
    },
  },
  plugins: [],
};

export default config;
