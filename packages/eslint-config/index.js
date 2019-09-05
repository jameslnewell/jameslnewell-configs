const javascript = require("./partial/javascript");
const typescript = require("./partial/typescript");

module.exports = {
  overrides: [
    {
      ...javascript,
      files: ["*.js"]
    },
    {
      ...javascript,
      files: ["*.test.js"],
      env: {
        jest: true
      }
    },
    {
      ...typescript,
      files: ["*.ts"]
    },
    {
      ...typescript,
      files: ["*.test.ts"],
      env: {
        jest: true
      }
    }
  ]
};
