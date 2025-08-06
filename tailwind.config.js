/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1ABC9C',
        errorColor:"#E83B46"
      },
    },
  },
  plugins: [],
}

