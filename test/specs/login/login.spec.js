const { expect } = require('@wdio/globals');
const LoginPage = require('./login.po');

describe('Login Test', () => {
    it('1. Successful Login Test', async () => {
        //Enter phone number
        await LoginPage.openLoginScreen();
        
    });
});
