import { Options } from 'webdriverio';

export const remoteConfig: Options = {
  desiredCapabilities: {
    browserName: 'chrome',
  },
  host: 'ondemand.saucelabs.com',
  key: process.env.SAUCE_ACCESS_KEY,
  path: '/wd/hub',
  port: 80,
  user: process.env.SAUCE_USERNAME
};
