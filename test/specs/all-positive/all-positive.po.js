
class allPositive {
    async welcomescreen() {
        // Wait for 1 second before starting the action
        await driver.pause(3000);

        // Enter the mobile number from the common.json file
        const mobileno = await $('android.widget.EditText');
        await mobileno.click();
        
        // Retrieve username from common.json and enter it into the mobile number field
        const usernum = global.commonData.value.username;  
        await mobileno.addValue(usernum);

        // Pause for 2 seconds before clicking Next
        await driver.pause(2000);

        // Click on the Next button
        const nextButton = await $('~Next');
        await nextButton.click();
        await driver.pause(4000);
        
    }
    
    async otp(){
        const otpCode = '123456';

        // Select the first input field
        const otpInput = await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]');
        await otpInput.click();
        await otpInput.addValue(otpCode);  // Enter entire OTP at once

        await driver.pause(3000);  // Optional pause to wait for verification

    }
    async homescreen() {
        // Wait for 1 second before starting the action
        await driver.pause(1000);
       // Enter the mobile number from the common.json file
       const mobileno = await $('android.widget.EditText');
       await mobileno.click();
       
       // Retrieve username from common.json and enter it into the mobile number field
       const usernum = global.commonData.value.username;  
       await mobileno.addValue(usernum);

       // Pause for 2 seconds before clicking Next
       await driver.pause(2000);

       // Click on the Next button
       const nextButton = await $('~Next');
       await nextButton.click();
       await driver.pause(3000);

       //Enter OTP 
      

        
    }
    async verifyHome(){
        // Verify Home screen is displayed
        await driver.pause(3000); // Wait for the home screen to load
        const homeScreen = await $('~Health Checklist');
        const isDisplayed = await homeScreen.isDisplayed();
        if (!isDisplayed) {
            throw new Error("Home screen is not displayed");
        }
        console.log("Home screen is displayed successfully");
    }
    async userprofile(){
     //tap on user profile icon
     await driver.pause(3000); 
     // Wait for the home screen to load
        const userProfileIcon = await $('//android.widget.ScrollView/android.widget.ImageView[2]');
        await userProfileIcon.click();
        await driver.pause(3000); // Wait for the user profile screen to load
    }
    async verifyUserProfile() {
        // Verify User Profile screen is displayed
        await driver.pause(2000); // Wait for the user profile screen to load
        const userProfileScreen = await $('~Profile');
        const isDisplayed = await userProfileScreen.isDisplayed();
        if (!isDisplayed) {
            throw new Error("User Profile screen is not displayed");
        }
        console.log("User Profile screen is displayed successfully");
        await driver.pause(2000); // Wait for 2 seconds to observe the screen
    
    }


    async tapsignout() {
        // Tap on Sign Out button
        const signOutButton = await $('~Sign Out');
        await signOutButton.click();
        
        // Verify Sign Out confirmation dialog is displayed
        await driver.pause(4000); // Wait for the dialog to appear
        const signOutDialog = await $('~Yes');
        await signOutDialog.click()
    }
    async nutritionScreen() {
        // Navigate to Nutrition screen
        const nutritionButton = await $('~Nutrition\nTab 3 of 4');
        await nutritionButton.click();
        await driver.pause(3000); // Wait for the Nutrition screen to load
    }
    async searchfood() {
        // Search for food item
        const searchInput = await $('//android.widget.ScrollView/android.view.View[2]');
        await searchInput.click();
        await driver.pause(3000)
        const searchInputField = await $('//android.widget.EditText');
        await searchInputField.click();
        await driver.pause(1000); // Wait for the input field to be ready
        await searchInputField.addValue("rice");

        // Retrieve username from common.json and enter it into the mobile number field
        // const fooditem = String(global.commonData.value.food);  
        // await searchInputField.addValue(fooditem);
        
        await driver.pause(3000); // Wait for search results to load
       
    }
    async showNutrition() {
        // Display Nutrition information
        await driver.pause(2000); 
        const nutritionItem = await $('~THAI JASMINE RICE\n160 kcal,  (45g)'); 
        await nutritionItem.click();
        await driver.pause(6000); 
    }
    async backnavigation() {
        // Navigate back to the previous screen
         const backButton = await $('~Back');
         await backButton.click();
        await driver.pause(2000); 
    }
    async backnavigation2() {
        // Navigate back to the previous screen
        const backButton = await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.widget.Button[1]');
        await backButton.click();
        await driver.pause(2000);
    }
    async ScrollView(){
        let maxScrolls = 5;
        let elementFound = false;

        for (let i = 0; i < maxScrolls; i++) {
        try {
            const element = await $(`~Nutrition Guidance`);
            if (await element.isDisplayed()) {
            elementFound = true;
            break;
            }
        } catch (err) {
            // Not found, continue
        }

        // Scroll down using coordinates
        await driver.performActions([
            {
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: 962, y: 1200 },   // Adjusted start
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 200 },
                { type: 'pointerMove', duration: 800, x: 962, y: 400 },  // Scroll upward
                { type: 'pointerUp', button: 0 },
            ],
            },
        ]);

        await driver.pause(2000); // Let scroll complete
        }

        if (!elementFound) {
        throw new Error('Nutrition Guidance element not found after scrolling');
        } else {
        const target = await $(`~Nutrition Guidance`);
        await target.click();
        await driver.pause(3000); 
        // Wait for the target element to be displayed
        //click on ankle sprain
            const ankleSprain = await $('~Ankle Sprain\nArticle\n4 min');
            await ankleSprain.click();
            // Wait for the article to load
            await driver.pause(3000); 

        }

                
                await driver.pause(5000); // wait for scroll animation to complete
                

            }
            async ScrollViewUp() {
                let maxScrolls = 5;
                let elementFound = false;
            
                for (let i = 0; i < maxScrolls; i++) {
                    try {
                        const element = await $(`~Health Checklist`);
                        if (await element.isDisplayed()) {
                            elementFound = true;
                            break;
                        }
                    } catch (err) {
                        // Not found, continue
                    }
            
                    // Scroll up using coordinates
                    await driver.performActions([
                        {
                            type: 'pointer',
                            id: 'finger1',
                            parameters: { pointerType: 'touch' },
                            actions: [
                                { type: 'pointerMove', duration: 0, x: 962, y: 400 },   // Start lower on screen
                                { type: 'pointerDown', button: 0 },
                                { type: 'pause', duration: 200 },
                                { type: 'pointerMove', duration: 800, x: 962, y: 1200 }, // Move finger down (scroll up)
                                { type: 'pointerUp', button: 0 },
                            ],
                        },
                    ]);
            
                    await driver.pause(2000); // Let scroll animation complete
                }
            
                if (!elementFound) {
                    throw new Error(' Health Checklist element not found after scrolling up');
                } else {
                    const target = await $(`~Health Checklist`);
                    await driver.pause(3000); // Wait for content to load if needed
                }
            
                await driver.pause(4000); // Final pause for stability
            }

        async questionnaire() {
            // Wait for the home screen to load
            await driver.pause(2000); 
            // Navigate to Questionnaire weekly check in
            const questionnaireButton = await $('~Weekly Check-In');
            await questionnaireButton.click();
            // Wait for the Questionnaire screen to load
            await driver.pause(4000); 
            
        }
        async submitQuestionnaire() {
            // submit the first questionnaire
            await driver.pause(2000);
            const answer = await $('~Very confident');
            await answer.click();
            //tap next
            const nextButton = await $('~Next');
            await nextButton.click();
            // Wait for the next screen to load
            await driver.pause(2000); 
            // answer second question
            const answer2 = await $('~4-5');
            await answer2.click();
            //tap next
            await nextButton.click();
            // Wait for the next screen to load
            await driver.pause(2000);
            // answer third question
            const answer3 = await $('~Sometimes');
            await answer3.click();
            //tap next
            await nextButton.click();
            // Wait for the next screen to load
            await driver.pause(2000);
            // answer fourth question
            const answer4 = await $('~I don’t take medication');
            await answer4.click();
            //tap next
            await nextButton.click();
            // Wait for the next screen to load
            await driver.pause(2000);



            
        }
        async verifySubmission() {
            // Verify as weekly check is submitted it is disabled
            const weeklyCheck = await $('~Weekly Check-In');
            const isEnabled = await weeklyCheck.isEnabled();
            if (isEnabled) {
                throw new Error("Weekly Check-In is not disabled after submission");
            }
            console.log("Weekly Check-In is disabled after submission");


            
        }

    async healthScreen() {
        // Navigate to Health screen
        await driver.pause(2000); 
        const healthButton = await $('~My Health\nTab 2 of 4');
        await healthButton.click();
        await driver.pause(3000); // Wait for the Health screen to load
    }
    async journalscreen(){
        // Navigate to Journal screen
        const journalButton = await $('~Journal\nTab 4 of 4');
        await journalButton.click();
        await driver.pause(3000); // Wait for the Journal screen to load

    }
    async verifyJournalScreen(){

        // Verify Journal screen is displayed
        const journalScreen = await $('~My Journal');
        const isDisplayed = await journalScreen.isDisplayed();
        if (!isDisplayed) {
            throw new Error("Journal screen is not displayed");
        }
        console.log("Journal screen is displayed successfully");
        await driver.pause(2000); // Wait for 2 seconds to observe the screen
    }
    async enterjournal(){
        // Enter journal entry
        await driver.pause(2000); 
        const journalInput = await $('~New Entry');
        await journalInput.click();
        await driver.pause(2000); 
        const journalText = await $('//android.widget.EditText');
        await journalText.click();
        await journalText.addValue("This is a test journal entry.");
        await driver.pause(2000); 
        const saveButton = await $('~Save');
        await saveButton.click();
    }
    async home(){
        // Navigate to Home screen
        const homeButton = await $('~Home\nTab 1 of 4');
        await homeButton.click();
        await driver.pause(3000); // Wait for the Home screen to load
    }
             
}

module.exports = new allPositive();
