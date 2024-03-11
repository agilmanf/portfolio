/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
};
