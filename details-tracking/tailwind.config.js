/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'primary': '#4F359B',
      'subtitle': '#5C6672',
      'title': '#26303E',
      'border': '#D8D9DD',
      'white': '#FFFFFF'
    },

    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },

    extend: {
    },
  },
  plugins: [],
}

