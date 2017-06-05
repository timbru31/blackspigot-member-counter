import { BlackSpigotPage } from './blackspigot-page';

export async function getUserCount() {
  const bs = new BlackSpigotPage();
  await bs.open();
  await bs.isPageLoaded();
  const members = await bs.getUserCount();
  await bs.tearDown();
  return members;
}
