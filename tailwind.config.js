/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#000000',
      gray: '#818181',
      primary: '#27A98B',
      secondary: '#F2EEEE',
      warn: '#E15241'
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        display: ['Montserrat'],
        body: ['Montserrat']
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600'
      }
    }
  },
  plugins: []
};
