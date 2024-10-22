/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        choplin:['choplin-light'],
        choplinBold:['choplin-bold'],
        afacad:['Afacad Flux', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

