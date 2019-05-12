export abstract class Page {
	public abstract async isPageLoaded(): Promise<boolean>;
	public abstract async tearDown(): Promise<void>;
	public abstract async open(): Promise<void>;
}
