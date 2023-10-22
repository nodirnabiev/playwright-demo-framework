const { expect } = require('@playwright/test');

exports.OverviewPage = class OverviewPage {
    
    constructor(page) {

        this.page = page;
        
    }

    async validateOverviewPageURL() {
        await expect(this.page).toHaveURL(/.*overview/);
    }

    async validatePageTitle() {
        await expect(this.page).toHaveTitle("ParaBank | Accounts Overview");
    }

    async validateAccountsOverviewTitle() {
        await expect(this.page.locator('h1[class="title"]')).toHaveText('Accounts Overview');
    }

    async validatePageHeaderPanel() {
        await expect(this.page.locator('div[id="headerPanel"]')).toBeVisible();
    }

    async validatePageHeaderPanelButtons() {
        await expect(this.page.locator('ul[class="button"]')).toBeVisible();
        await expect(this.page.locator('ul> li[class="home"]')).toBeVisible();
        await expect(this.page.locator('ul> li[class="aboutus"]')).toBeVisible();
        await expect(this.page.locator('ul> li[class="contact"]')).toBeVisible();
    }

    async validatePageBodyPanel() {
        await expect(this.page.locator('div[id="bodyPanel"]')).toBeVisible();
    }

    async validatePageFooterPanel() {
        await expect(this.page.locator('div[id="footermainPanel"]')).toBeVisible();
    }

    async validateAccountTable() {
        await expect(this.page.locator('table[id="accountTable"]')).toBeVisible();
    }
}