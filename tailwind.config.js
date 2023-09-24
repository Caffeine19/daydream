/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        zinc: {
          930: 'rgb(16,16,20)'
        }
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
