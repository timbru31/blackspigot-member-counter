import * as webdriverio from 'webdriverio';
import { Page } from './abstract-page';

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

    this.client = webdriverio.remote({
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: [
            'headless',
            'disable-gpu'
          ],
          binary: '/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary',
        }
      }
    });
  }

  public async open() {
    await this.client.init();
    await this.client.url('http://blackspigot.com/');
  }

  public async isPageLoaded() {
    return this.client.waitForExist('#logo', 10000);
  }

  public async getUserCount() {
    const members = await this.client.element('.memberCount dd').getText();
    return parseInt(members.replace(',', ''), 10);
  }

  public async tearDown() {
    await this.client.end();
  }
}
