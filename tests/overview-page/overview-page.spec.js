import { expect, chromium, test, Page } from '@playwright/test';
import { OverviewPage } from '../../models/OverviewPage';

const { LoginPage } = require('../../models/LoginPage');
const { registerNewUser } = require('../../api/registerNewUserAPI');

test.describe('Overview Page: Overview page', () => {

    let page = Page;
    let loginPage;
    let overviewPage;

    test.beforeAll(async({ request }) => {

        //All these can be placed in global setup file
        const browser = await chromium.launch();
        const context = await browser.newContext();
        page = await context.newPage();

        //Go to ./register url to generate session ID in cookie
        await page.goto('https://parabank.parasoft.com/parabank/register.htm');
        
        const { name, value } = (await context.cookies()).at(0);
        const sessionId = `${name}=${value}`;

        const username = await registerNewUser(request, sessionId);
        console.log(username)
    
        loginPage = new LoginPage(page);
        await loginPage.goToLoginPage();

        await loginPage.validateSuccessfulLogin(username, 'Test1234');

        overviewPage = new OverviewPage(page);
    
    });

    test('should be on overview page', async() => {
        await overviewPage.validateOverviewPageURL();

    });

    test('should have page title', async() => {
        await overviewPage.validatePageTitle();
        
    });

    test('should have accounts overview title', async() => {
        await overviewPage.validateAccountsOverviewTitle();
        
    });

    test('should page header title', async() => {
        await overviewPage.validatePageHeaderPanel();
        
    });

    test('should have page header panel buttons', async() => {
        await overviewPage.validatePageHeaderPanelButtons();
        
    });

    test('should have page body panel', async() => {
        await overviewPage.validatePageBodyPanel();
        
    });

    test('should have page footer panel', async() => {
        await overviewPage.validatePageFooterPanel();
        
    });

    test('should have account table', async() => {
        await overviewPage.validateAccountTable();
        
    });

});