/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^react-native$': 'react-native-web', // lightweight stand-in for logic tests
    '^react-native-uismith(.*)$': '<rootDir>/src$1'
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
};

