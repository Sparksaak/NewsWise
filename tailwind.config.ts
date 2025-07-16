import type { Config } from "tailwindcss"
import defaultConfig from "shadcn/ui/tailwind.config"

const config = {
  ...defaultConfig,
  content: [...defaultConfig.content, "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    ...defaultConfig.theme,
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      ...defaultConfig.theme.extend,
      colors: {
        ...defaultConfig.theme.extend.colors,
        // Custom News Wise colors - hardcoded for Next.js compatibility
        "news-wise-blue-start": "#7B8FFC", // Corresponds to hsl(235, 97%, 74%)
        "news-wise-purple-end": "#6A2E9A", // Corresponds to hsl(270, 50%, 39%)
        "news-wise-card-blue": "#CDEBFA", // A light sky blue for cards, corresponds to hsl(200, 80%, 90%)
        "news-wise-accent": "#FF9900", // Orange/Amber, corresponds to hsl(39, 100%, 50%)
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
} satisfies Config

export default config
