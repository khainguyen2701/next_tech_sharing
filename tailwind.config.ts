import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
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
      animation: {
        "spin-slow": "spin 30s linear infinite"
      },
      fontFamily: {
        sans: ["var(--font-inconsolata)", "sans-serif"],
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
} satisfies Config);
