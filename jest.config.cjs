/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^react-native$': '<rootDir>/test/react-native-shim.ts',
    '^react-native-uismith(.*)$': '<rootDir>/src$1'
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
};

