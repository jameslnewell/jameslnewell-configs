/* eslint-disable @typescript-eslint/no-var-requires */
const {defaults} = require('jest-config');

module.exports = {
  testMatch: ['<rootDir>/(src|test)/**/*.test.ts?(x)'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  transform: {
    '^.+\\.tsx?$': require.resolve('babel-jest')
  }
};
