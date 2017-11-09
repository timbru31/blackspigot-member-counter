import * as webdriverio from 'webdriverio';

import { Page } from './abstract-page';
import { localConfig } from './config/local';
import { remoteConfig } from './config/saucelabs';

export class BlackSpigotPage extends Page {
  private _client: webdriverio.Client<void>;

  get client() {
    return this._client;
  }

  set client(client) {
    this._client = client;
  }

  constructor() {
    super();

    let config = localConfig;
    if (process.env.REMOTE || process.env.CI) {
      config = remoteConfig;
    }
    this.client = webdriverio.remote(config);
  }

  public async open() {
    await this.client.init();
    await this.client.url('https://blackspigot.com/');
  }

  public async isPageLoaded() {
    return this.client.waitForExist('#logo', 60000);
  }

  public async getUserCount() {
    const members = await this.client.element('.memberCount dd').getText();
    return parseInt(members.replace(',', ''), 10);
  }

  public async tearDown() {
    await this.client.end();
  }
}
