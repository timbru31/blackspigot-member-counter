import { Browser, remote, RemoteOptions } from 'webdriverio';

import { Page } from './abstract-page';
import { localConfig } from './config/local';
import { remoteConfig } from './config/saucelabs';

export class BlackSpigotPage extends Page {
	public client: Browser<'async'>;

	public async prepare() {
		let config = localConfig;
		if (process.env.REMOTE || process.env.CI) {
			config = remoteConfig;
		}
		this.client = await remote(config);
	}

	public async open() {
		await this.client.url('https://blackspigot.com/');
	}

	public async isPageLoaded() {
		const logo = await this.client.$('.p-header-logo');
		return (await logo.waitForExist({ timeout: 60000 })) !== null;
	}

	public async getUserCount() {
		const memberElement = (await this.client.$$('dl.pairs dd'))[2];
		const members = await memberElement.getText();
		return parseInt(members.replace(',', ''), 10);
	}

	public async tearDown() {
		await this.client.deleteSession();
	}
}
