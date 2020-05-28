import { readFileSync } from 'fs';
import SauceLabs from 'saucelabs';
import { Reporter, Context, AggregatedResult } from '@jest/reporters';

class SauceLabsReporter implements Reporter {
	onTestResult: () => void;
	onRunStart: () => void;
	onTestStart: () => void;
	getLastError: () => void;

	onRunComplete(_: Set<Context>, results: AggregatedResult) {
		const passed = results.numFailedTests === 0;
		if (process.env.CI || process.env.REMOTE) {
			const user = process.env.SAUCE_USERNAME!!;
			const sauceLabsAccount = new SauceLabs({
				user,
				key: process.env.SAUCE_ACCESS_KEY!!,
			});
			const sessionId = readFileSync('tmp/sessionId', 'utf-8');
			return sauceLabsAccount
				.updateJob(user, sessionId, {
					id: sessionId,
					passed,
				})
				.then((_) => {
					return;
				})
				.catch((e) => {
					console.log(e);
					return e;
				});
		}
		return Promise.resolve();
	}
}

export = SauceLabsReporter;
