import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        premium: "0 30px 80px -30px rgba(14,14,14,0.35), 0 10px 30px -15px rgba(14,14,14,0.25)"
      },
      keyframes: {
        "scroller-down": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" }
        },
        "scroller-up": {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" }
        }
      },
      animation: {
        "scroller-down": "scroller-down 30s linear infinite",
        "scroller-up": "scroller-up 30s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
