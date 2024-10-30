/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:"#000000",
        secondry:"#333333",
        btn:"#FFCC00",
        link:"#FF5722"
      },
      fontFamily:{
        normal: ['Orbitron', 'sans-serif'], // Use the font family name
        med: ['Orbitronm', 'sans-serif'],
        semibld: ['Orbitronsb', 'sans-serif'],
        bld: ['Orbitronb', 'sans-serif'],

      }
    },
  },
  plugins: [],
}