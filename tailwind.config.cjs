/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primaryDark: "#363636",
      secondaryDark: "#464646",
      accent: "#02C093",
    },
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};

module.exports = config;
