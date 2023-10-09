/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./layouts/_default/**/*.html",
    "./layouts/partials/**/*.{html,js}",
    "./content/**/*.md",
    "./layout/index.html",
    "./public/index.html",

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

