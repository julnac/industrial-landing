import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        xs: '0.625rem',   // 10px
        sm: '0.75rem',   // 12px
        base: '0.875rem',  // 14px
        lg: '1rem',    // 16px
        xl: '1.25rem',   // 20px
        'h': '2.5rem', // 40px
        'hxl': '3.75rem', // 60px
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        muted: "var(--muted)",
        mutedBackground: "var(--background-muted)",
        modalBackground: "var(--background-modal)",
        gradient: "var(--gradient-primary)"
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
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },
      boxShadow: {
        soft: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        strong: "0px 6px 20px rgba(0, 0, 0, 0.2)",
      },
      height: {
        "500": "500px"
      },
      width: {
        "710": "710px"
      }
    },
  },
  plugins: [],
} satisfies Config;
