module.exports = {
  extends: ['./index.js', 'plugin:react/recommended', 'prettier/react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        // we've got types so we don't need prop-types
        'react/prop-types': 'off',
      },
    },
  ],
};
