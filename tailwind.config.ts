import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
      fontFamily: {
        inter: "var(--font-inter)",
        montserrat: "var(--font-montserrat)",
        inconsolata: "var(--font-inconsolata)"
      }
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem"
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: true,
    darkTheme: "cupcake",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: false,
    themeRoot: ":root"
  }
} satisfies Config;
