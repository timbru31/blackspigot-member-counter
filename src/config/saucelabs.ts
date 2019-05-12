// tslint:disable-next-line:no-implicit-dependencies
import { Options } from 'webdriver';

export interface SauceLabsOptions {
	capabilities: {
		name: string;
		tags: string[];
	};
}

export const remoteConfig: Options & SauceLabsOptions = {
	capabilities: {
		browserName: 'chrome',
		build: process.env.CI ? process.env.TRAVIS_BUILD_ID : undefined,
		name: `BlackSpigot Test commit ${process.env.CI ? process.env.TRAVIS_COMMIT : 'local'}`,
		tags: process.env.CI ? [process.env.TRAVIS_BRANCH!] : []
	},
	key: process.env.SAUCE_ACCESS_KEY,
	path: '/wd/hub',
	user: process.env.SAUCE_USERNAME
};
