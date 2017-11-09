import { BlackSpigotPage } from './blackspigot-page';

export async function getUserCount() {
  const bs = await setup();
  const members = await bs.getUserCount();
  await bs.tearDown();
  return members;
}

async function setup() {
  const bs = new BlackSpigotPage();
  await bs.open();
  process.env.SESSION_ID = (await bs.client.url()).sessionId;

  await bs.isPageLoaded();
  return bs;
}
