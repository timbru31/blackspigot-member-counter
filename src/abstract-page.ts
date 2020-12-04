export abstract class Page {
	public abstract isPageLoaded(): Promise<boolean>;
	public abstract tearDown(): Promise<void>;
	public abstract open(): Promise<void>;
}
