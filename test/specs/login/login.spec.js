const { expect } = require('@wdio/globals');
const loginPage = require('./login.po');

describe('Login Test', () => {
    it('1. Verify successful app launch', async () => {
        //Enter phone number
        await loginPage.openLoginScreen();
        
    });
});
