import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-urbanist)", ...fontFamily.sans],
        serif: ["var(--font-blackpast)", ...fontFamily.serif],
        display: ["var(--font-oldenglish)", ...fontFamily.serif],
        body: ["var(--font-darkcastle)", ...fontFamily.serif],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        heading: "hsl(var(--heading))",
        muted: "hsl(var(--muted))",
        btn: "hsl(var(--btn))",
        secondary: "hsl(var(--secondary))",
        "btn-secondary": "hsl(var(--btn-secondary))",
        "nav-background": "hsl(var(--nav-background))",
      },
      animation: {
        move: "move 5s linear infinite",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
      },
    },
  },
  plugins: [animate, typography],
} satisfies Config;
