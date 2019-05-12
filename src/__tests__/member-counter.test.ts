import { writeFileSync } from 'fs';
import { getUserCount } from '../member-counter';

test('getUserCount', async () => {
	jasmine.DEFAULT_TIMEOUT_INTERVAL = 65000;
	expect.assertions(1);
	const members = await getUserCount().catch((e: Error) => console.log(e));

	writeFileSync('tmp/sessionId', process.env.SESSION_ID);

	expect(members).toBeGreaterThanOrEqual(24940);
});
