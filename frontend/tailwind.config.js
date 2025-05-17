/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1c7430', // Green color similar to greencard.in
          light: '#2a9d43',
          dark: '#155724',
        },
        secondary: {
          DEFAULT: '#f4f9f4',
          dark: '#e6f0e6',
        },
        accent: {
          DEFAULT: '#ff9800',
          light: '#ffb74d',
          dark: '#f57c00',
        },
        dark: {
          DEFAULT: '#343a40',
          light: '#495057',
          dark: '#212529',
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};