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
      greenlight: '#acccbc',
      greenstar: '#bfe0c8'
    }
  },
  plugins: [],
}
