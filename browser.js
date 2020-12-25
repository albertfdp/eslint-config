'use strict';

module.exports = {
  extends: [
    './index.js',
    'plugin:react/recommended',
    'standard-react',
    'prettier/react',
  ],
  plugins: ['react-hooks'],
  rules: {
    'react/no-danger': 'error',
    'react/no-deprecated': 'error',
    'react/jsx-fragments': ['error', 'element'],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
