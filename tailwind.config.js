/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#009379',
        secondary: '#2d2d2d',
        cream: '#fffcf5',
        pinkLight: '#f9e6f0',
        grayLight: '#f3f3f3',
        accent: '#ffd285',
        grayMedium: '#e5e5e5',
        dark: '#2d2d2d'
      },
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
        caveat: ['Caveat', 'cursive']
      },
      spacing: {
        '2.5': '10px',
        '7.5': '30px', 
        '16.5': '66px',
        '17.5': '70px',
        '25': '100px',
        '30': '120px',
        '35': '140px',
        '37.5': '150px',
        '80': '320px'
      }
    }
  },
  plugins: [],
}