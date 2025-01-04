/** @type {import('jest').Config} */
module.exports = {
  maxConcurrency: 1,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}