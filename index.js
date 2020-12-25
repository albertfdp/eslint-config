'use strict';

module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'script',
  },

  extends: ['standard', 'prettier', 'prettier/standard'],
  plugins: ['promise', 'import'],
  rules: {
    'no-console': 'error',
    strict: 'error',
  },
  env: {
    node: true,
    es2021: true,
  },
  globals: {
    expect: true,
  },
};
