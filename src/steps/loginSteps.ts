import { Given, When, Then } from '@cucumber/cucumber';
import { browserOptions } from '../config/browserConfig';
import { expect } from '@playwright/test';

Given('I am on the login page', async function () {
    await this.page.goto(browserOptions.baseURL);
    const title = await this.page?.title();
    expect(title).toContain('OrangeHRM');
});

When('I enter username {string} and password {string} and submit', async function (username, password) {
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button[type="submit"]');
});

Then('I should be logged in successfully', async function () {
    const url = this.page?.url();
    expect(url).not.toContain('login');
});

Then('I should see the dashboard', async function () {
    const url = this.page?.url();
    expect(url).toContain('dashboard');
    await this.page.waitForSelector('h6:has-text("Dashboard")');
});

Then('I should see Invalid credentials alert', async function () {
    const url = this.page?.url();
    expect(url).toContain('login');
    await this.page.waitForSelector('.oxd-alert--error:has-text("Invalid credentials")');
});

Then('I should see an validation message {string}', async function (validationMsg) {
    const url = this.page?.url();
    expect(url).toContain('login');
    await this.page.waitForSelector(`.oxd-input-field-error-message:has-text('${validationMsg}')`);
});