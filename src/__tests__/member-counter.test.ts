import { getUserCount } from '../member-counter';
const chromedriver = require('chromedriver');

beforeAll(() => {
  chromedriver.start([
    '--port=4444',
    '--url-base=/wd/hub'
  ]);
});

test('getUserCount', async () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
  expect.assertions(1);
  const members = await getUserCount();
  expect(members).toBeGreaterThanOrEqual(24940);
});

afterAll(() => {
  chromedriver.stop();
});
