declare module 'saucelabs' {
	interface Options {
		user: string;
		key: string;
	}

	class SauceLabs {
		constructor(options: Options);

		updateJob(
			sessinId: string,
			options: {
				passed: boolean;
			}
		): Promise<any>;
	}

	export default SauceLabs;
}
