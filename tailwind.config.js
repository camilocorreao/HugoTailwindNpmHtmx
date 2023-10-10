/** @type {import('tailwindcss').Config} */
const typography = require('@tailwindcss/typography');

module.exports = {
  content: [
    "./layouts/**/*.html",
    "./layouts/_default/**/*.html",
    "./layouts/partials/**/*.{html,js}",
    "./content/_index.md",
    "./content/**/*.md",
    "./layout/index.html",
    "./public/index.html",
    "./hugo_stats.json",

  ],
  theme: {
    extend: {},
  },
  plugins: [typography],
}

