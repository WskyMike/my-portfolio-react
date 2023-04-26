module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'react-app',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y'],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'no-unused-expressions': 'off',
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'no-shadow': 'off',
    'consistent-return': 'off',
    'react/jsx-no-bind': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
  },
};
