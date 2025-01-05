/** @type {import('jest').Config} */
module.exports = {
  testTimeout: 100 * 1000,
  globalSetup: '<rootDir>/global-setup.js',
  globalTeardown: '<rootDir>/global-teardown.js',
}