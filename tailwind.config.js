/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,hbs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-animated'), require('daisyui')],
}

