const colors = require('tailwindcss/colors');

// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { ...colors, gray: colors.warmGray },
      fontFamily: {
        serif: 'QuadraatOffcPro Demibold',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
