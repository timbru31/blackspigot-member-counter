module.exports = {
	transform: {
		'^.+\\.ts$': 'ts-jest'
	},
	testRegex: '/__tests__/.*\\.(test|spec)\\.ts$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
	reporters: [
		'default',
		[
			'<rootDir>/tmp/sauce-labs-reporter.js',
			{
				banana: 'yes',
				pineapple: 'no'
			}
		]
	]
};
