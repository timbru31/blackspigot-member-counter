import { Options } from 'webdriverio';

export interface ISauceLabsOptions {
  host?: string;
  desiredCapabilities: {
    name: string;
  };
}

export const remoteConfig: Options & ISauceLabsOptions = {
  desiredCapabilities: {
    browserName: 'chrome',
    build: process.env.CI ? process.env.TRAVIS_BUILD_ID : null,
    name: `BlackSpigot Test commit ${process.env.CI ? process.env.TRAVIS_COMMIT : 'local'}`,
    tags: process.env.CI ? [process.env.TRAVIS_BRANCH] : [],
  },
  host: 'ondemand.saucelabs.com',
  key: process.env.SAUCE_ACCESS_KEY,
  path: '/wd/hub',
  port: 80,
  user: process.env.SAUCE_USERNAME
};
