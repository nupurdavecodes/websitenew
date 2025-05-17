/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: '#0A0908',
          slate: '#22333B',
          cream: '#EAE0D5',
          beige: '#C6AC8E',
          brown: '#5E503F',
        },
      },
    },
  },
  plugins: [],
};