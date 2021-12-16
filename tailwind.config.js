const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      starbucks: '#00704A',
      greenlight: '#D4E9E2',
      greenstar: '#bfe0c8',
      starred: '#D50B32',
      buttonhover: '#C1D7D0'
    },
    fontFamily: {
      'quickstand': ['quickstand'],
    }
  },
  plugins: [],
}
