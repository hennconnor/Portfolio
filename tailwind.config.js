/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter']
      },
      keyframes: {
        fadein: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0px)'
          }
        }
      },
    },
    plugins: [],
  }
}