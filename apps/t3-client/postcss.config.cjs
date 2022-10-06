const { join } = require('path');

module.exports = {
  plugins: {
    tailwindcss: {
      config: join('apps/t3-client', 'tailwind.config.cjs'),
    },
    autoprefixer: {},
  },
};