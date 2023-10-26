/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    "colors": {
    "home-guide": "#b283b3",
    "bouton": "#d1b490",
    "bouton-hover": "#8f7a61",
    "principale": "#8c588d",
    "footer": "#0f1020",
    "fond": "#fcf9f6",
    "card-bleu": "#8d8fac",
    "card-vert": "#8aa8a1",
    "custom": "#CABFBF",
    "marron": "#734343",
    "rose": "#D467A8",
    "rouge": "#E64A4A",
    "argent": "#928F8F",
    "rose_v": "#CFA49A",
    "transparent": "#E7E4DF",
    "violet_v": "#CC9EBA",
    "bleu_v": "#9EAEC1",
    "noir": "#1D1D1B",


  
   },
   "fontFamily": {
    "playfair-display": "Playfair Display",
    "poppins": "Poppins",
    "outfit": "Outfit"
   },
   "borderRadius": {
    "none": "0",
    "xs": "0.3125rem",
    "sm": "0.625rem",
    "default": "1.25rem",
    "lg": "1.875rem",
    "xl": "3.125rem",
    "2xl": "3.4375rem"
   },
    extend: {
      gridTemplateColumns: {
        principal: 'repeat(12, minmax(0, 64px))',
        // '2': 'repeat(2, minmax(0, 150px))',
      },
      gridTemplateRows:{
        secondary: 'repeat(6, minmax(0, 64px))',
      },

      backgroundImage: {
        'homecard': "url('/img/homecard.webp')",
      }
    },
  
  },
  plugins: [],
}

