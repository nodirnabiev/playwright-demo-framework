import { expect, test, chromium, Page } from '@playwright/test';

const { LoginPage } = require('../../models/LoginPage');

test.describe('Login Page: Login index page', () => {

    let page = Page;
    let loginPage;

    test.beforeAll(async() => {

        //All these can be placed in global setup file
        const browser = await chromium.launch();
        const context = await browser.newContext();
        page = await context.newPage();
    
        loginPage = new LoginPage(page);
        await loginPage.goToLoginPage();
    
    });

    test('should fail empty username and password', async() => {
        await loginPage.validateEmptyUsernameAndPasswordLogin();

    });

    test('should fail empty username', async() => {
        await loginPage.validateEmptyUsernameLogin();
        
    });

    test('should fail empty password', async() => {
        await loginPage.validateEmptyPasswordLogin();
        
    });

    test('should fail wrong username and password', async() => {
        await loginPage.validateWrongUsernameAndPasswordLogin();
        
    });

    test('should login successfully', async() => {
        await loginPage.validateSuccessfulLogin('nicknab', 'Test1234');
        
    });

});