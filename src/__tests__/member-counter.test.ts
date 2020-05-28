import { writeFileSync } from 'fs';
import { getUserCount } from '../member-counter';

jest.setTimeout(65000);
test('getUserCount', async () => {
	expect.assertions(1);
	const members = await getUserCount();

	writeFileSync('tmp/sessionId', process.env.SESSION_ID);

	expect(members).toBeGreaterThanOrEqual(24940);
});
