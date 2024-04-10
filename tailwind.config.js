/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        theme1: "#111111",
        theme2: "#72E338",
        primary: {
          DEFAULT: '#FF592C;',
        },
        secondary: {
          DEFAULT: '#3772FF',

        },
        gray: {
          DEFAULT: '#ffffff',
          100: '#FCFCFD',
          200: '#F4F5F6',
          300: '#E6E8EC',
          400: '#B1B5C4',
          500: '#777E91',
          600: '#353945',
          700: '#23262F',
          800: '#141416'
        }
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'primary': ['Quantico'],
        'secondry': ['Commissioner'],

        poppins: ['Poppins', 'sans-sarif'],
        dmsans: ['DM Sans', 'sans-sarif']
      }
    },
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1780px',
      '4xl': '2160px', // only need to control product grid mode in ultra 4k device
    },
  },
  plugins: [],
}