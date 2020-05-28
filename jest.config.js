module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	testRunner: 'jest-circus/runner',
	testRegex: '/__tests__/.*\\.(test|spec)\\.ts$',
	reporters: process.env.CI || process.env.REMOTE ? ['default', '<rootDir>/tmp/sauce-labs-reporter.js'] : ['default'],
};
