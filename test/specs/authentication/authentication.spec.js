const { expect } = require('@wdio/globals');
const authentication = require('./authentication.po');

describe('Auth Test', () => {
    it('1. Verify successful user authentication', async () => {
        //navigate welcome screen
        await authentication.welcomescreen();
        //navigate to otp screen and verify otp screen
        await authentication.otpscreen();
        
    });
    it('2. Verify sucessfull navigation to otp input screen', async () => {
        //navigate to otp screen and verify otp screen
        await authentication.otpscreen(); 
        
    });
});
