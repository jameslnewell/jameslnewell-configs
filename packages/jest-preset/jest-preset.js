const {defaults} = require('jest-config');
module.exports = {
  testMatch: ['**/(src|test)/**/*.test.ts?(x)'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  }
};