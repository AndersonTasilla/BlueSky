/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fonstFamily: {
        'fuentePrincipal': ['Karla', 'sans-serif'],
      }
    },
  },
  plugins: [],
}