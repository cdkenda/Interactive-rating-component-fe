/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "light-grey":"hsl(217, 12%, 63%)",
        "medium-grey":"hsl(216, 12%, 54%)",
        "dark-blue":"hsl(213, 19%, 18%)",
        "very-dark-blue":"hsl(216, 12%, 8%)",
        "grayish-blue":"hsl(221,18%,17%)",
        "dark-grayish-blue":"hsl(215,27%,12%)",
      },
      fontFamily: {
        "overpass":['Overpass'],
      }
    },
  },
  plugins: [],
}

