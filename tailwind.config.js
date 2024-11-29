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

      colors: {
        gray: {
          100: "#f9f9f9",
          200: "#f1f1f1",
          300: "#F0F0F0",
          400: "#d2d2d2",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
      },
    },
    // screens: {
    //   sm: "820px",
    //   md: "1024px",
    // },
  },
  plugins: [],
};
