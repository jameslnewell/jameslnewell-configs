const javascript = require("./javascript");
const react = require("./react");

module.exports = {
  ...javascript,
  parserOptions: {
    ...javascript.parserOptions,
    ...react.parserOptions,
    ecmaFeatures: {
      ...javascript.parserOptions.ecmaFeatures,
      ...react.parserOptions.ecmaFeatures
    }
  },
  plugins: [...javascript.plugins, ...react.plugins],
  settings: {
    ...react.settings
  },
  extends: [...javascript.extends, ...react.extends],
  rules: {
    ...javascript.rules,
    ...react.rules
  }
};
