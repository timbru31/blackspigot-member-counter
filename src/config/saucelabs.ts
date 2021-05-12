import { RemoteOptions } from 'webdriverio';

export const remoteConfig: RemoteOptions = {
	capabilities: {
		platformName: 'Windows 10',
		browserName: 'chrome',
		'sauce:options': {
			build: process.env.CI ? process.env.GITHUB_RUN_ID : undefined,
			name: `BlackSpigot Test commit ${process.env.CI ? process.env.GITHUB_SHA : 'local'}`,
			tags: process.env.CI ? [process.env.GITHUB_REF!] : [],
		},
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
