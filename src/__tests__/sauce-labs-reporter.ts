import { readFileSync } from 'fs';

const sauceLabs = require('saucelabs');

class SauceLabsReporter implements jest.Reporter {

  public onRunComplete(contexts: Set<jest.Context>, results: jest.AggregatedResult) {
    const passed = results.numFailedTests === 0;
    if (process.env.CI || process.env.REMOTE) {
      const sauceLabsAccount = new sauceLabs({
        password: process.env.SAUCE_ACCESS_KEY,
        username: process.env.SAUCE_USERNAME
      });
      const sessionId = readFileSync('tmp/sessionId', 'utf-8');
      sauceLabsAccount.updateJob(sessionId, {
        passed
      }, (err: any) => {
        if (err) {
          console.log(err);
        }
      });
    }
  }
}

export = SauceLabsReporter;
