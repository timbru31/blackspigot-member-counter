import { remote } from 'webdriverio';

import { Page } from './abstract-page';
import { localConfig } from './config/local';
import { remoteConfig } from './config/saucelabs';

export class BlackSpigotPage extends Page {
  private _client: BrowserObject;

  get client() {
    return this._client;
  }

  set client(client) {
    this._client = client;
  }

  public async prepare() {
    let config = localConfig;
    if (process.env.REMOTE || process.env.CI) {
      config = remoteConfig;
    }
    this.client = await remote(config);
  }

  public async open() {
    await this._client.url('https://blackspigot.com/');
  }

  public async isPageLoaded() {
    const logo = await this._client.$('#logo');
    return await logo.waitForExist(60000) !== null;
  }

  public async getUserCount() {
    const memberElement = await this._client.$('.memberCount dd');
    const members = await memberElement.getText();
    return parseInt(members.replace(',', ''), 10);
  }

  public async tearDown() {
    await this._client.deleteSession();
  }
}
