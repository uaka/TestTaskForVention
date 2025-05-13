import {
    BeforeAll,
    AfterAll,
    Before,
    After,
    AfterStep,
    ITestCaseHookParameter,
    Status
} from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';
import { CustomWorld } from '../world/customWorld';
import * as path from 'path';
import fs from 'fs';
import { browserOptions } from '../config/browserConfig';
// import { attachScreenshot, attachTrace } from './allureHelper';

let browser: Browser;
let context: BrowserContext;
let page: Page;

BeforeAll(async function () {
    browser = await chromium.launch(browserOptions);
});

// BeforeAll(async () => {
//     browser = await chromium.launch({
//         logger: {
//             isEnabled: (name, severity) => true,
//             log: (name, severity, message, args) => console.log(`${name} ${message} ${args}`),
//         },
//     });
// });


Before(async function (this: any, scenario: ITestCaseHookParameter) {
    context = await browser.newContext();
    page = await context.newPage();
    await context.tracing.start({ screenshots: true, snapshots: true });
    this.page = page;

    // Отключаем анимации
    await this.page.addInitScript(() => {
        document.body.style.setProperty('animation', 'none', 'important');
        document.body.style.setProperty('transition', 'none', 'important');
    });
});

AfterStep(async function (this: CustomWorld, step) {
    if (step.result?.status === Status.FAILED && this.page) {
        const screenshotPath = path.join('screenshots', `${Date.now()}.png`);
        await this.page.screenshot({ path: screenshotPath, fullPage: true });
    }
});

// After(async () => {
//     await context.close();
// });
//
// AfterAll(async () => {
//     await browser.close();
// });
