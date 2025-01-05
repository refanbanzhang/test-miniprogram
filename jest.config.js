/** @type {import('jest').Config} */
module.exports = {
  // maxConcurrency: 1,
  testTimeout: 100 * 1000,
  globalSetup: '<rootDir>/global-setup.js',
  globalTeardown: '<rootDir>/global-teardown.js',
}