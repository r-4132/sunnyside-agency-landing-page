/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile' : '250px'
      },
      colors:{
        softRed:'var(--softRed)',
        yellow:'var(--yellow)',
        darkDesaturatedCyan:'var(--darkDesaturatedCyan)',
        darkBlue:'var(--darkBlue)',
        darkModerateCyan:'var(--darkModerateCyan)',

        veryDarkDesaturatedBlue:'var(--veryDarkDesaturatedBlue)',
        veryDarkGrayishBlue:'var(--veryDarkGrayishBlue)',
        darkGrayishBlue:'var(--darkGrayishBlue)',
        grayishBlue:'var(--grayishBlue)',
        white:'var(--white)'
      },
    },
  },
  plugins: [],
}

