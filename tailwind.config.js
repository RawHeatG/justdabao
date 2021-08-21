const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fira: ["Raleway", "sans-serif"],
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
      height: {
        "screen-3/4": "70vh",
      },
      maxHeight: {
        500: "500px",
      },
      colors: {
        "dark-green": "#007749",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
