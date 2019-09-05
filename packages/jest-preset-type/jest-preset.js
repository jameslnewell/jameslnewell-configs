/* eslint-disable @typescript-eslint/no-var-requires */
const {defaults} = require('jest-config');

module.exports = {
  runner: require.resolve('jest-runner-tsc'),
  testMatch: ['<rootDir>/(src|test)/**/*.ts?(x)'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
};
