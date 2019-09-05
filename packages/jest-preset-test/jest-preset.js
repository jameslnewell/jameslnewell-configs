const {defaults} = require('ts-jest/presets');

module.exports = {
  ...defaults,
  testMatch: ['<rootDir>/(src|test)/**/*.test.ts?(x)'],
  transform: {
    '^.+\\.tsx?$': require.resolve('ts-jest'),
  },
};
