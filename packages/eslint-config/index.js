const javascript = require('./partial/javascript');
const typescript = require('./partial/typescript');

module.exports = {
  overrides: [
    {
      ...javascript,
      files: ['*.js'],
    },
    {
      ...javascript,
      files: ['*.test.js'],
      env: {
        jest: true,
      },
    },
    {
      ...typescript,
      files: ['*.ts', '*.tsx'],
    },
    {
      ...typescript,
      files: ['*.test.ts', '*.test.tsx'],
      env: {
        jest: true,
      },
    },
  ],
};
