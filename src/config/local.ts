import { Options } from 'webdriverio';

export const localConfig: Options = {
	capabilities: [
		{
			browserName: 'chrome',
			'goog:chromeOptions': {
				args: ['headless', 'disable-gpu'],
			},
		},
	],
};
