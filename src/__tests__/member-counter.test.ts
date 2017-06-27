import { getUserCount } from '../member-counter';
const chromedriver = require('chromedriver');

beforeAll(async () => {
  chromedriver.start([
    '--port=4444',
    '--url-base=/wd/hub'
  ]);
  if (exports.defaultInstance === null) {
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
});

test('getUserCount', async () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
  expect.assertions(1);
  const members = await getUserCount().catch((e: Error) => console.log(e));
  expect(members).toBeGreaterThanOrEqual(24940);
});

afterAll(() => {
  chromedriver.stop();
});
