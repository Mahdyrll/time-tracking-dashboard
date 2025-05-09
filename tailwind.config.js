/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '765px',
      'laptop': '1024px',
      'lg': '1030px'
    },
    extend: {
      colors: {
        work: '#ff8c66',
        play: '#56c2e6',
        study: '#ff5c7c',
        exercise: '#4acf81',
        social: '#7536d3',
        selfcare: '#f1c75b',
        purple600: '#5847eb',
        navy950: '#0f1424',
        navy900: '#1c1f4a',
        purple500: '#6f76c8',
        navy200: '#bdc1ff'
      },
    },
    fontFamily: {
      'rubikLight': 'rubik-light',
      'rubikMedium': 'rubik-medium',
      'rubikRegular': 'rubik-regular',
      'rubikSemibold': 'rubik-semibold'
    },
  },
  plugins: [],
}

