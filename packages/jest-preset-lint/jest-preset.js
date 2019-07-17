/* eslint-disable @typescript-eslint/no-var-requires */
const {defaults} = require('jest-config');

module.exports = {
  runner: require.resolve('jest-runner-eslint'),
  testMatch: ['**/(src|test)/**/*.ts?(x)'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  watchPlugins: ['jest-runner-eslint/watch-fix'],
};
