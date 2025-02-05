/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // custom color
        custom: {
          500: "#202124",
          300: "#4d5156",
          200: "#61656b",
          100: "#303134",
          50: "#171717",
        },
      },
    },
  },
  plugins: [],
};
