/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customOrange: "#f6511d",
      },
    },
  },
  plugins: [],
};
