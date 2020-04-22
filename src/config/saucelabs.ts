import { Options, RemoteOptions } from 'webdriverio';

export interface SauceLabsOptions extends WebDriver.Options {
	path: string;
	key?: string;
	user?: string;
	capabilities: SauceLabsCapabilities;
}

interface SauceLabsCapabilities extends WebDriver.DesiredCapabilities {
	name?: string;
	tags?: string[];
}

export const remoteConfig = {
	capabilities: {
		browserName: 'chrome',
		build: process.env.CI ? process.env.TRAVIS_BUILD_ID : undefined,
		name: `BlackSpigot Test commit ${process.env.CI ? process.env.TRAVIS_COMMIT : 'local'}`,
		tags: process.env.CI ? [process.env.TRAVIS_BRANCH!] : [],
	},
	key: process.env.SAUCE_ACCESS_KEY,
	user: process.env.SAUCE_USERNAME,
	services: [
		[
			'sauce',
			{
				sauceConnect: true,
			},
		],
	],
};
