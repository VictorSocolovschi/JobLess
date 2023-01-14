module.exports = {
    testEnvironment: 'jsdom',
    testRegex: '\\.test\\.js$',
    transform: {
      '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    },
    moduleFileExtensions: ['js'],
  };