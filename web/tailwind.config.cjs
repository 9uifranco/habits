/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        background: '#09090A'
      },
      gridTemplateRows: {
        // Simple 7 row grid
        '7': 'repeat(7, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}
