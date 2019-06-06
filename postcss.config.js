const PresetENV = require('postcss-preset-env');
const CustomProperties = require('postcss-custom-properties');

/**
 * Polyfill css features and custom properties.
 */
module.exports = {
  plugins: [
    PresetENV(),
    CustomProperties({
      importFrom: ['./src/assets/css/palette.css'],
    }),
  ],
};
