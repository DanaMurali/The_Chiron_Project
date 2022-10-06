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
        champagnePink: "#F1DCD4",
        blackCoral: "#4C5C73",
      },
    },
  },
  plugins: [],
};