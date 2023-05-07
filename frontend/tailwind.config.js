/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'appMain': '#0c100d',
        'appGreen': '#cffacc',
        'appRose': '#ffa693',
        'appPink': '#ff3766',
      }
    },
  },
  plugins: [],
}

