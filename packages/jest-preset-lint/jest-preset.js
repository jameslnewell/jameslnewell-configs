/* eslint-disable @typescript-eslint/no-var-requires */
const {defaults} = require('jest-config');

module.exports = {
  runner: require.resolve('jest-runner-eslint'),
  testMatch: ['<rootDir>/(src|test)/**/*.ts?(x)'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  watchPlugins: [require.resolve('jest-runner-eslint/watch-fix')],
};
