import { chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { BASE_URL } from './env';

export const browserOptions = {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    args: ['--disable-dev-shm-usage'],
    baseURL: BASE_URL
};

export async function launchBrowser(): Promise<Browser> {
    return await chromium.launch(browserOptions);
}

export async function createContext(browser: Browser): Promise<BrowserContext> {
    return await browser.newContext({
        viewport: browserOptions.viewport,
        recordVideo: {
            dir: './videos/'
        }
    });
}

export async function createPage(context: BrowserContext): Promise<Page> {
    return await context.newPage();
}
