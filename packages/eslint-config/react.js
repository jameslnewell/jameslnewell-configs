const javascriptReact = require("./partial/javascript-react");
const typescript = require("./partial/typescript");
const typescriptReact = require("./partial/typescript-react");

module.exports = {
  overrides: [
    {
      ...javascriptReact,
      files: ["*.js", "*.jsx"]
    },
    {
      ...javascriptReact,
      files: ["*.test.js", "*.test.jsx"],
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
    },
    {
      ...typescriptReact,
      files: ["*.tsx"]
    },
    {
      ...typescriptReact,
      files: ["*.test.tsx"],
      env: {
        jest: true
      }
    }
  ]
};
