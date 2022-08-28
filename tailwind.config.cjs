/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'red': '#FB5859',
        'blue': '#5266E1',
        'light-blue': '#5266DF',
        'dark': '#242946',
      },
      boxShadow: {
        'shadow-bluw': '0 3px 15px #5266E130'
      },
    },
  },
  plugins: [],
};
