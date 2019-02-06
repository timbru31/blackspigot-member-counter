// tslint:disable-next-line:no-implicit-dependencies
import { Options } from 'webdriver';

export const localConfig: Options = {
  capabilities: {
    'browserName': 'chrome',
    'goog:chromeOptions': {
      args: [
        'headless',
        'disable-gpu'
      ]
    }
  }
};
