const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      'apps/t3-client',
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies('apps/t3-client'),
  ],
  theme: {
    extend: {
      colors: {
        champagnePink: '#F1DCD4',
        blackCoral: '#4C5C73',
        headerPink: '#FFEEDD',
        sectionPink: '#FFF9F3',
        mediumGreen: '#B1C9C9',
        hoverTeal: '#194F7F',
        textGrey: '#BABABA',
        white: '#FFFFFF',
        black: '#272D38',
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
