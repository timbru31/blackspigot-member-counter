declare module 'saucelabs' {
	interface Options {
		user: string;
		key: string;
	}

	class SauceLabs {
		constructor(options: Options);

		updateJob(
			user: string,
			sessinId: string,
			options: {
				passed: boolean;
			}
		): Promise<any>;
	}

	export default SauceLabs;
}