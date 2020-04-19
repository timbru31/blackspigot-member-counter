import { Options } from 'webdriverio';

export interface SauceLabsOptions extends Options {
	path: string;
}

export const remoteConfig: SauceLabsOptions = {
	capabilities: [
		// tslint:disable-next-line: no-object-literal-type-assertion
		{
			browserName: 'chrome',
			build: process.env.CI ? process.env.TRAVIS_BUILD_ID : undefined,
			name: `BlackSpigot Test commit ${process.env.CI ? process.env.TRAVIS_COMMIT : 'local'}`,
			tags: process.env.CI ? [process.env.TRAVIS_BRANCH!] : [],
		} as WebDriver.DesiredCapabilities,
	],
	key: process.env.SAUCE_ACCESS_KEY,
	path: '/wd/hub',
	user: process.env.SAUCE_USERNAME,
};
