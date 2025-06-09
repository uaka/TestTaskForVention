import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';

export interface ICustomWorld extends World {
    browser?: Browser;
    context?: BrowserContext;
    page?: Page;
    testName?: string;
    startTime?: Date;
}

export class CustomWorld extends World implements ICustomWorld {
    public browser?: Browser;
    public context?: BrowserContext;
    public page?: Page;
    public testName?: string;
    public startTime?: Date;

    constructor(options: IWorldOptions) {
        super(options);
    }
}

setWorldConstructor(CustomWorld);
