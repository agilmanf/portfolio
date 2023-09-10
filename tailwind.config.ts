import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: { "3xl": "2560px", "4xl": "3840px" },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        grandhotel: ["Grand Hotel", "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
