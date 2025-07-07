const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  ...compat.config({
    ignorePatterns: ['build/'],
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    plugins: ['import', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
    },
    env: {
      browser: true,
      node: true,
    },
  }),
];
