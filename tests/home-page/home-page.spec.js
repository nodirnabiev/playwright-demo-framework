import { chromium, expect, Page, test } from '@playwright/test';

const { HomePage } = require('../../models/HomePage');

test.describe('Home Page: Home index page', () => {

    let page = Page;
    let homePage;

    test.beforeAll(async() => {

        //All these can be placed in global setup file
        const browser = await chromium.launch();
        const context = await browser.newContext();
        page = await context.newPage();

        homePage = new HomePage(page);
        await homePage.goToHomePage();

    });

    test('should have page title', async() => { 
        await homePage.validatePageTitle();
    
    });

    test('header panel should be visible ', async() => { 
        await homePage.validatePageHeaderPanel();
    
    });

    test('header panel buttons be visible ', async() => { 
        await homePage.validatePageHeaderPanelButtons();
    
    });

    test('body panel should be visible ', async() => { 
        await homePage.validatePageBodyPanel();
    
    });

    test('footer panel should be visible ', async() => { 
        await homePage.validatePageFooterPanel();
    
    });

});