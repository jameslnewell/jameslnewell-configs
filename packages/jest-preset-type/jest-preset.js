/* eslint-disable @typescript-eslint/no-var-requires */
const {defaults} = require('jest-config');

module.exports = {
  runner: 'jest-runner-tsc',
  testMatch: ['**/(src|test)/**/*.ts?(x)'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
};
