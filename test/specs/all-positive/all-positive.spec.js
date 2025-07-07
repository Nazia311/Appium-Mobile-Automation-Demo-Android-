const { expect } = require('@wdio/globals');
const allPositive = require('./all-positive.po');

describe('Auth Test', () => {
   
    it('1. Verify sucessfull navigation to Home screen', async () => {
        //navigate to home screen
        await allPositive.welcomescreen();
        //enter otp
        await allPositive.otp(); 
        //verify home screen
        await allPositive.verifyHome();
        
    });
    it('2. Verify sucessfull navigation to user profile', async () => {
        //navigate to user profile
        await allPositive.userprofile();
        //verify user profile
        await allPositive.verifyUserProfile();
        //tap back
        await allPositive.backnavigation();
        
    });
    it('3. Verify sucessfull scroll down and navigation to learning content', async () => {
        //scroll to the bottom of the page
        await allPositive.ScrollView()
        //tap back
        await allPositive.backnavigation();
        //tap back again
        await allPositive.backnavigation();
        
    });
    it ('4. Verify sucessfull scroll up', async () => {
        //scroll to the top of the page
        await allPositive.ScrollViewUp();
        
    })
    it('5. Verify sucessfull weekly task submission ', async () => {
        //navigate to Weekly check in screen
        await allPositive.questionnaire();
        //submit questionnaire
        await allPositive.submitQuestionnaire()
        //verify submission
        await allPositive.verifySubmission();

        
        
    });
    it('6. Verify sucessfull watch Health education video', async () => {
        //navigate to Health education video screen
        await allPositive.navigateHealth();
        //play video
        await allPositive.watchvideo();
        //tap back
        await allPositive.backnavigation();
        //scroll to the top of the page
        await allPositive.ScrollViewUp();
        


    })
    it('7. Verify sucessfull navigation to My Health screen', async () => {
        //navigate to Health screen
        await allPositive.healthScreen();
        //tap back
        await allPositive.home()
        
    });
    it('8. Verify sucessfull navigation to Nutrition screen', async () => {
        //navigate to Nutrition screen
        await allPositive.nutritionScreen();
        //search food
        await allPositive.searchfood(); 
        //dsiplay nutrition
        await allPositive.showNutrition();   
        //tap back
        await allPositive.backnavigation();
        //tap back again
        await allPositive.backnavigation2();
    });
    it('9. Verify sucessfull navigation to Journal screen', async () => {
        //navigate to Journal screen
        await allPositive.journalscreen();
        //verify journal screen
        await allPositive.verifyJournalScreen();

        
    });
    it('10. Verify sucessfull Journal submission', async () => {
        // enter journal text
        await allPositive.enterjournal();
        // navigate back home
        await allPositive.home();
        
    });
    it('11. Verify sucessfull navigation to Notification screen', async () => {
       // navigate to Notification screen
        await allPositive.notification()
        // verify notification screen
        await allPositive.verifyNotificationScreen();
        //tap back
        await allPositive.backnavigation();

    });

    it('12. Verify sucessfull signout from the app ', async () => {
        //navigate to user profile
        await allPositive.userprofile();
        //tap on sign out
        await allPositive.tapsignout()
      
    })
   
});
