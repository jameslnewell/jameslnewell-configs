module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    ecmaFeatures: {},
    sourceType: 'module',
  },
  plugins: [],
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  rules: {
    'no-unused-vars': ['error', {argsIgnorePattern: '^_unused_'}],
  },
};
