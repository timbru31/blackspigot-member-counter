import { Options } from 'webdriverio';

export const localConfig: Options = {
  desiredCapabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        'headless',
        'disable-gpu'
      ]
    }
  }
};
