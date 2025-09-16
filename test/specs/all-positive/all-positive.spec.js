const { expect } = require('@wdio/globals');
const allPositive = require('./all-positive.po');

describe('Auth Test', () => {

   it('1. Verify successful first user oboarding', async () => {
    //navigate to account verification screen
    await allPositive.welcomescreen();
     //set password
    await allPositive.setpassword();
    //enable biometrics
    await allPositive.enablebiometrics();
    //now get started
    await allPositive.getstarted();
    //navigate home and sign out
    await allPositive.home();
    //sign out
    await allPositive.usersignout()
   });
   it('2. Verify successful MFA user login with Biometric', async () => {
        //navigate to home screen
        await allPositive.welcomescreen();
        //enter with biometric
        await allPositive.biometricsscan();
        //verify home screen
        //await allPositive.verifyHome();
        
    });
   
    it('3. Verify successful navigation to user profile', async () => {
        //navigate to user profile
        await allPositive.userprofile();
        //verify user profile
        await allPositive.verifyUserProfile();
        //tap back
        await allPositive.backnavigation();
        
    });
    it('4. Verify successful scroll down and navigation to learning content', async () => {
        //scroll to the bottom of the page
        await allPositive.ScrollView()
        //scroll content
        await allPositive.scrollcontent()
        await allPositive.newback()
        await allPositive.backnavigation()
             
    });
    it ('5. Verify successful scroll up', async () => {
        //scroll to the top of the page
        await allPositive.ScrollViewUp();
        
    })
    it('6. Verify successful task Capture Vital submission', async () => {
        //navigate to Capture Vital screen
        await allPositive.oldscan();
        //verify submission
        await allPositive.confirmvitalssubmission()

    });
     it('7. Verify successful Explore Health task submission', async () => {
        //navigate to Explore Health screen
        await allPositive.explorehealth();
        //verify submission
        await allPositive.verifyExploreHealth();
    })
       
    it('8. Verify successful weekly task Weekly Check-In submission  ', async () => {
        //navigate to Weekly check in screen
        await allPositive.questionnaire();
        //submit questionnaire
        await allPositive.submitQuestionnaire()
        //verify submission
        await allPositive.verifySubmission();

        
        
    });
    it('9. Verify successful Record weight task or PHQ9/GAD7 submission', async () => {
        //submit fourth task
        await allPositive.fourthtask();
       //verify all  tasks completed
       
    
    })


  it('10. Verify successful visit Wellness and Selfcare ', async () => {
        //navigate to Health education video screen
        await allPositive.navigateHealth();
        //play video
        await allPositive.watchvideo();
        //tap back
        await allPositive.backnavigation();
        //scroll to the top of the page
        await allPositive.upmethod()
        


    })
    it('12. Verify successful navigation to My Health screen', async () => {
        //navigate to Health screen
        await allPositive.healthScreen();
        //tap back
        await allPositive.home()
        
    });
    it('13. Verify successful navigation to Nutrition screen', async () => {
        //navigate to Nutrition screen
        await allPositive.nutritionScreen();
        //search food
        await allPositive.searchfood(); 
        //dsiplay nutrition
        await allPositive.showNutrition();   
        //tap back
        await allPositive.backnavigation();
        //tap back again
        await allPositive.backnavigation3();
    });
    it('14. Verify successful navigation to Journal screen', async () => {
        //navigate to Journal screen
        await allPositive.journalscreen();
        //verify journal screen
        await allPositive.verifyJournalScreen();

        
    });
    it('15. Verify successful Journal submission', async () => {
        // enter journal text
        await allPositive.enterjournal();
        // navigate back home
        await allPositive.home();
        
    });
    it('16. Verify successful navigation to Notification screen', async () => {
       // navigate to Notification screen
        await allPositive.notification()
        // verify notification screen
        await allPositive.verifyNotificationScreen();
        //tap back
        await allPositive.backnavigation();

    });

    it('17. Verify succssful signout from the app ', async () => {
        //navigate to user profile
        await allPositive.userprofile();
        //tap on sign out
        await allPositive.tapsignout()
      
    })
it('18. Verify sucessfull MFA user login with password', async () => {
    //navigate to home screen
    await allPositive.welcomescreen();
    //enetr credentials using password
    await allPositive.credentials()
    //verify home screen
    await allPositive.verifyHome();
})
  });
