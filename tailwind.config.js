/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}', './*.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#10b981',
        secondary: '#7878aa',
        dark: '#19173d',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
