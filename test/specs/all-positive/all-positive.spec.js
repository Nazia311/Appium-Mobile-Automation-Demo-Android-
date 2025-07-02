const { expect } = require('@wdio/globals');
const allPositive = require('./all-positive.po');

describe('Auth Test', () => {
    // it('1. Verify successful user authentication', async () => {
    //     //navigate welcome screen
    //     await allpositive.welcomescreen();
    //     //navigate to otp screen and verify otp screen
    //     await allpositive.otpscreen();
        
    // });
    it('1. Verify sucessfull navigation to Home screen', async () => {
        //navigate to home screen
        await allPositive.welcomescreen();
        //enter otp
        await allPositive.otpscreen(); 
        //verify home screen
        //await allPositive.verifyHome();
        
    });
    it('2. Verify sucessfull navigation to user profile', async () => {
        //navigate to user profile
        await allPositive.userprofile();
        //verify user profile
        await allPositive.verifyUserProfile();
    });
});
