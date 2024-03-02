/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height:{
        '112': '28rem',
        '120': '30rem',
        '136': '34rem'
      }
    },
  },
  plugins: [],
})

