module.exports = {
  testMatch: ['<rootDir>/(src|test)/**/*.test?(s).ts?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': require.resolve('babel-jest'),
  },
};
