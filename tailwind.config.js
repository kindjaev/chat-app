/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'olive': '#ccd5ae',
        'light-olive': '#fefae0',
        'dark-olive': '#2f3e46'
      },
    },
  },
  plugins: [],
}
