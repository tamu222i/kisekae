/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#ffd1dc',
          purple: '#e2d4f0',
          blue: '#d4ebf2',
          yellow: '#fcf4dd',
          green: '#d8f3dc',
        }
      }
    },
  },
  plugins: [],
}

