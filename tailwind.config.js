/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter']
      },
      fontSize: {
        '8xl': 'clamp(1rem, 7vw + 1rem, 6rem)',
        '4xl': 'clamp(.5rem, 3vw + 1rem, 2.25rem)',
        '2xl': 'clamp(.025rem, 3vw + 1rem, 1.5rem)'

      }
    },
    plugins: [],
  }
}