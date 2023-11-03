/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "red-800": "#e50914",
        "gray-400":"#b3b3b3",
        "gray-600": "#737373"
      }
    },
  },
  plugins: [],
}

