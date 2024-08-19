/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        // padding: {
        //   DEFAULT: '1rem',
        //   sm: '2rem',
        //   lg: '4rem',
        //   xl: '5rem',
        //   '2xl': '6rem',
        // },
      },
      colors: {
        color: {
          1: "#23BE0A",
          2: "#131313",
          3: "#424242",
          4: "#F3F3F3",
          5: "#f4fcf3",
          6: "#59C6D2",
          7: "#5a5a5a",
         
        }
        },
      fontFamily: {
        work : 'Work Sans, sans-serif',
        play: 'Playfair Display, serif',
       
       
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
}