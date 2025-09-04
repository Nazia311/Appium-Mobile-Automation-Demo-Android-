const { expect } = require('@wdio/globals');
const loginPage = require('./login.po');

describe('Login Test', () => {
    it('1. Verify successful user authentication', async () => {
        //Enter phone number
        await loginPage.regularlogin();
        
    });
});
