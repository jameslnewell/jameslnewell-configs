
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint', 
    'prettier'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  rules: {
  }
};
