/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}", "./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Amatic SC", "Roboto"],
      },
    },
  },
  plugins: [],
};
