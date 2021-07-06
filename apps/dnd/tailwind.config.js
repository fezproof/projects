const colors = require('tailwindcss/colors');

const getColourConfig = (colourVar) => ({ opacityValue }) => {
  if (opacityValue) return `rgba(${colourVar}, ${opacityValue})`;
  return `rgb(${colourVar})`;
};

// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        skin: {
          base: getColourConfig('var(--colour-text-base)'),
          muted: getColourConfig('var(--colour-text-muted)'),
          inverted: getColourConfig('var(--colour-text-inverted)'),
        },
      },
      backgroundColor: {
        skin: {
          fill: getColourConfig('var(--colour-fill)'),
          'button-accent': getColourConfig('var(--colour-button-accent)'),
          'button-accent-hover': getColourConfig(
            'var(--colour-button-accent-hover)',
          ),
          'button-muted': getColourConfig('var(--colour-button-muted)'),
        },
      },
      gradientColorStops: {
        skin: {
          fill: getColourConfig('var(--colour-fill)'),
        },
      },
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
