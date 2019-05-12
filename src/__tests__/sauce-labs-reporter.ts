import { readFileSync } from 'fs';
import SauceLabs from 'saucelabs';

class SauceLabsReporter implements jest.Reporter {
	public onRunComplete(contexts: Set<jest.Context>, results: jest.AggregatedResult) {
		const passed = results.numFailedTests === 0;
		if (process.env.CI || process.env.REMOTE) {
			const user = process.env.SAUCE_USERNAME!!;
			const sauceLabsAccount = new SauceLabs({
				user,
				key: process.env.SAUCE_ACCESS_KEY!!
			});
			const sessionId = readFileSync('tmp/sessionId', 'utf-8');
			return sauceLabsAccount.updateJob(user, sessionId, {
				passed
			});
		}
		return Promise.resolve();
	}
}

export = SauceLabsReporter;
