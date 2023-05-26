// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
// postcss.config.js

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    'postcss-simple-vars': {},
    'postcss-mixins': {},
  },
};
