module.exports = {
  // The root of your source code, relative to this config file
  roots: ['<rootDir>'],
  // A list of file extensions that Jest should look for
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  // A list of paths to directories that Jest should use to search for files
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  // The test environment that will be used for testing
  testEnvironment: 'jsdom',
  // A regex pattern to match test files
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  // A list of reporter options to use with Jest
  reporters: ['default'],
  // A list of setup files to run before each test
  setupFilesAfterEnv: [
    './jest.setup.js',
  ],
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  globals: {
    'ts-jest': {
      babelConfig: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    },
  },
  coverageThreshold: {
    global: {
      lines: 70,
    }
  },
};
