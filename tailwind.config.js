/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./public/**/*.{html,js,jsx}"
],
  theme: {
    extend: {
      colors:{
        'primary-dark':'#21231b',
        'primary-light':'#fdfefd',
        'primary-accent':'#105b70'
      }
    },
  },
  plugins: [],
}
