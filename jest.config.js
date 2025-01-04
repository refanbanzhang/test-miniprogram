/** @type {import('jest').Config} */
module.exports = {
  maxConcurrency: 1,
  testTimeout: 100 * 1000,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}