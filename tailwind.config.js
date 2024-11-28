/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "button-play": "url('/src/assets/images/content/icon-play.svg')",
      },
    },
    screens: {
      sm: "820px",
      md: "1024px",
    },
  },
  plugins: [],
};
