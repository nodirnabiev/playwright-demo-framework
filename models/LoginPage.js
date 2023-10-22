const { chromium, expect } = require('@playwright/test');
const { OverviewPage } = require('./OverviewPage');

exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page;
    }

    async goToLoginPage() {
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
    }

    async validateEmptyUsernameAndPasswordLogin() {
        await this.page.click("input[value='Log In']");

        await expect(this.page.locator("h1[class='title']")).toContainText('Error!');
        await expect(this.page.locator("p[class='error']")).toContainText('Please enter a username and password.');

    }

    async validateEmptyUsernameLogin() {
        await this.page.fill("input[name='password']", 'Test1234');
        await this.page.click("input[value='Log In']");

        await expect(this.page.locator("h1[class='title']")).toContainText('Error!');
        await expect(this.page.locator("p[class='error']")).toContainText('Please enter a username and password.');

    }

    async validateEmptyPasswordLogin() {
        await this.page.fill("input[name='username']", 'playwright');
        await this.page.click("input[value='Log In']");

        await expect(this.page.locator("h1[class='title']")).toContainText('Error!');
        await expect(this.page.locator("p[class='error']")).toContainText('Please enter a username and password.');

    }

    async validateWrongUsernameAndPasswordLogin() {
        await this.page.fill("input[name='username']", 'nicknab10');
        await this.page.fill("input[name='password']", 'Test1234');
        await this.page.click("input[value='Log In']");

        await expect(this.page.locator("h1[class='title']")).toContainText('Error!');
        await expect(this.page.locator("p[class='error']")).toContainText('An internal error has occurred and has been logged.');

    }

    async validateSuccessfulLogin(username, password) {
        await this.page.fill("input[name='username']", username);
        await this.page.fill("input[name='password']", password);
        await this.page.click("input[value='Log In']");

        const overviewPage = new OverviewPage(this.page);
        await overviewPage.validateOverviewPageURL();

    }

}