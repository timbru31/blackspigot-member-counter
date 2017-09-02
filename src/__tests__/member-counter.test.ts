import { getUserCount } from '../member-counter';

test('getUserCount', async () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 65000;
  expect.assertions(1);
  const members = await getUserCount().catch((e: Error) => console.log(e));

  expect(members).toBeGreaterThanOrEqual(24940);
});
