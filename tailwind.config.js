/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B0B0F',    // Deep cyberpunk black background
          card: '#12121A',    // Sleek lighter dark for product cards
          purple: '#7C3AED',  // Signature neon purple
          accent: '#A78BFA',  // Lighter purple accent for highlights
        }
      }
    },
  },
  plugins: [],
}