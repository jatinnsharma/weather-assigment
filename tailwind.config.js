/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ['Nunito', 'sans-serif'],

      },
      height: {
        '680': '680px'
      }, minHeight: {
        
        '500': '500px'
      },
      width: {
        '1200': '1200px',
        '30': '30%'
      },
      minWidth: {
        '900': '900px',
        '400':'400px'
      },
      buttom: {
        10:'10px'
      }

    },
  },
  plugins: [],
}