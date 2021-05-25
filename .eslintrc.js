module.exports = {
  env: {
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier', 'plugin:react/recommended'],
  plugins: ['prettier', 'react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'no-unused-vars': ['error', {argsIgnorePattern: 'next'}],
    'react/jsx-filename-extension': ['error', {extensions: ['.js', '.jsx']}],
    'import/prefer-default-export': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react-native/no-color-literals': 'off',
    'react-native/sort-styles': 'off',
    'global-require': 'off',
    'react-native/no-raw-text': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-undef': 'off',
  },
};
