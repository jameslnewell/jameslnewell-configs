const {defaults} = require('ts-jest/presets');

module.exports = {
  ...defaults,
  testMatch: ['**/(src|test)/**/*.test.ts?(x)'],
};
