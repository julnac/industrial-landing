import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-lato)", "serif"],
        sans: ["var(--font-lato)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        background: "var(--background-primary)",
        mutedBackground: "var(--background-secondary)",
        foreground: "var(--content-primary)",
        muted: "var(--content-secondary)",
        content4: "var(--content-quaternary)",
        primary: "var(--content-primary-doc)",
        modalBackground: "var(--background-modal)",
        borderTertiary: "var(--border-tertiary)",
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "12px",
        lg: "16px",
        xl: "24px",
      },
      borderWidth: {
        "0.2": "0.2px",
      },
      spacing: {
        "2xs": "2px",
        xs: "4px",
        s: "8px",
        m: "12px",
        l: "16px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "40px",
        70: "70px",
      },
      boxShadow: {
        l1: "var(--surface-l1)",
        l2: "var(--surface-l2)",
        l3: "var(--surface-l3)",
        l4: "var(--surface-l4)",
        l5: "var(--surface-l5)",
        l6: "var(--surface-l6)",
      },
      fontSize: {
        40: "40px",
        base: "16px",
        xl: "32px",
      },
      lineHeight: {
        48: "48px",
      },
      screens: {
        sm: '393px',
        md: '768px',
        lg: '1024px',
        xl: '1440px'
      },
      width: {
        460: '460px'
      }
    },
  },
  plugins: [],
} satisfies Config;