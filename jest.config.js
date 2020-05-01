module.exports = {
  setupFiles: [
    '<rootDir>/config/jest/test-shim',
    '<rootDir>/config/jest/test-setup'
  ],
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testMatch: [
    '**/src/**/*.(test|spec).(tsx|ts|jsx|js)'
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  moduleNameMapper: {
    '^@app/(.*)': '<rootDir>/$1'
  },
  testEnvironment: 'node'
}
