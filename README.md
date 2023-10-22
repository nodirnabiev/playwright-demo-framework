# PLAYWRIGHT DEMO FRAMEWORK
@author Nodir Nabiev nodirnab@gmail.com


## Introduction
This sample demo framework contains open source public [Parabank](@https://parabank.parasoft.com/parabank/index.htm) web ui application to demonstrate front-end automation with open source tool Playwright. This repo contains automation scenarios of home, login and overview pages. 

This is a npm based project and all dependencies are managed in package.json file. All project configurations live in playwright.config.js file to customize configurations. Refer to [Playwright](https://playwright.dev/) documentation for more info.

This demo framework also demonstrate how to use Playwright API (request) to create an user data from API service to set up date beforehand. For example, registerNewUser function will create a new user from API back-end service first and then uses it for user login to test user account/overview page after succussful login.


## Prerequisites

Download and install [Node.js](https://nodejs.org/en)


## Installation

Clone the project at "git@github.com:nodirnabiev/playwright-demo-framework.git"

Open the project into your choice of IDE (VS Code)

Do npm install to download dependencies

And run npx playwright test home-page.spec.js, npx playwright test login.spec.js, and npx playwright test overview-page.spec.js to run tests individually

You may also run npx playwright test to run all tests in tests folder


## Full stack of the project

[v18.2.2 Node.js](https://nodejs.org/en) - Node JS version, any version is OK, preferebly above 12v

[v1.39 Playwright](https://playwright.dev/) - Playwright open source tool/library

[JavaScript](https://www.javascript.com/) - JavaScript language used

[faker-js](https://www.npmjs.com/package/@faker-js/faker) - Fake user data
