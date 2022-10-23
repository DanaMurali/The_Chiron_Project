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
    screens: {
      'tinyMobile': '320px',
      'smallMobile': '480px'
    },
    extend: {
      colors: {
        champagnePink: "#F1DCD4",
        blackCoral: "#4C5C73",
        headerPink: "#FFEEDD",
        sectionPink: "#FFF9F3",
        mediumGreen: "#B1C9C9",
        hoverTeal: "#194F7F",
        textGrey: "#BABABA",
        white: "#FFFFFF",
        black: "#272D38"
      },
    },
  },
  plugins: [],
};