// src/world/customWorld.ts
import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';
import { launchBrowser, createContext, createPage } from '../config/browserConfig';

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

    async init() {
        this.browser = await launchBrowser();
        this.context = await createContext(this.browser);
        this.page = await createPage(this.context);
    }
}

setWorldConstructor(CustomWorld);
