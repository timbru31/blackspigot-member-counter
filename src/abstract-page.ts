export abstract class Page {
  public async abstract isPageLoaded(): Promise<boolean>;
  public async abstract tearDown(): Promise<void>;
  public async abstract open(): Promise<void>;
}
