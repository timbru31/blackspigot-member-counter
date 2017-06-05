import { BlackSpigotPage } from '../blackspigot-page';

test('getUserCount', async () => {
  const bs = new BlackSpigotPage();
  expect.assertions(1);
  try {
    await bs.getUserCount();
  } catch (e) {
    expect(e).toBeTruthy();
  }
});
