const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {
    
    constructor(page) {

        this.page = page;
        
    }

    async goToHomePage() {
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
    }

    async validatePageTitle() {
        await expect(this.page).toHaveTitle("ParaBank | Welcome | Online Banking");
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

    async validateCustomerLoginPanel() {
        await expect(this.page.locator('div[id="leftPanel"]')).toBeVisible();
    }

}