const { configs } = require("@typescript-eslint/eslint-plugin");

module.exports = {
  env: {
    es6: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {}
  },
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    // manually apply "plugin:@typescript-eslint/eslint-recommended" since overrides inside overrides are
    // causing some kind of diff error
    ...configs["eslint-recommended"].overrides[0].rules,

    // note you must disable the base rule as it can report incorrect errors
    // @see https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/no-unused-vars.md#options
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true
      }
    ]
  }
};
