/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');

module.exports = {
  testEnvironment: 'jsdom',
  rootDir: '../../',
  preset: 'ts-jest/presets/js-with-babel',
  modulePathIgnorePatterns: ['./node_modules'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  globals: {
    PACKAGE_VERSION: 'version',
    'ts-jest': {
      tsconfig: path.resolve(__dirname, 'tsconfig.test.json')
    }
  },
  setupFilesAfterEnv: ['<rootDir>/utils/test/jest.setup.js'],
  moduleNameMapper: {
    'garden-test-utils': '<rootDir>/utils/test/utilities.ts'
  },
  collectCoverageFrom: [
    '<rootDir>/packages/*/src/**/*.{js,jsx,ts,tsx}',
<<<<<<< HEAD
    '!<rootDir>/packages/*/src/index.{js,ts}',
=======
>>>>>>> 5e53335e (chore: add test for index)
    '!<rootDir>/packages/.template/**',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
  coverageDirectory: '<rootDir>/utils/storybook/coverage',
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/packages/.template']
};
