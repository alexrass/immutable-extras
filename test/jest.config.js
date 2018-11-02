const path = require('path');
const rootDir = path.resolve(__dirname, '..');

module.exports = {
  automock: false,
  coverageDirectory: `${ rootDir }/test/.coverage/`,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/test/',
  ],
  collectCoverage: true,
  displayName: 'immutable-extras',
  globalTeardown: `${ rootDir }/test/setup/lint.js`,
  moduleFileExtensions: [ 'js' ],
  modulePaths: [
    `${ rootDir }/lib/`,
  ],
  rootDir,
  name: 'immutable-extras',
  resetMocks: true,
  roots: [
    `${ rootDir }/lib/`,
  ],
  setupTestFrameworkScriptFile: `${ rootDir }/test/setup/framework.js`,
  testMatch: [
    '**/__test__/**/*.js',
  ],
};
