const { userEnrollmentDetails } = require('../fixtures/input')
import { expect } from '@playwright/test'

const registerNewUser = async(request, sessionCookie) => {
    const url = 'https://parabank.parasoft.com/parabank/register.htm';
    const options = {
        headers: {
            "host": "parabank.parasoft.com",
            "path": "/parabank/register.htm",
            "scheme": "scheme",
            "method": "POST",
            "Cookie": sessionCookie
        },
        data: userEnrollmentDetails
    }

    const response = await request.post(url, options);
    await expect(response).toBeOK();

    //Need username for logging in from UI. Response body doesn't return username
    // html is returned
    return await options.data['customer.username'];

}

module.exports.registerNewUser = registerNewUser;
