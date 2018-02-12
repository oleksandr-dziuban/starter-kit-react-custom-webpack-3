module.exports = {
  setupFiles: [
    '<rootDir>/config/jest/shim.js',
    '<rootDir>/config/jest/adapter.js',
  ],
  testMatch: ['**/src/**/?(*.)(spec|test).js?(x)'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '\\.(gql|graphql)$': 'jest-transform-graphql',
    '.*': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/fileMock.js',
    '\\.(css)$': '<rootDir>/config/jest/styleMock.js',
  },
};
