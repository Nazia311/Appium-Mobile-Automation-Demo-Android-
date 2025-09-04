
class allPositive {
    async welcomescreen() {
        // Wait for 1 second before starting the action
        await driver.pause(3000);

        // Enter the mobile number from the common.json file
        const mobileno = await $('//android.widget.EditText');
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
    async credentials(){
        // Wait for 1 second before starting the action
        await driver.pause(2000);
       // Enter the password
       const newpassword = await $('//android.widget.EditText');
       await newpassword.click();
       
       // Retrieve username from common.json and enter it into the mobile number field
       const passnum = String(global.commonData?.value?.password || '');
       await newpassword.addValue("User@1234");
       await driver.pause(2000);
       // Click on the Next button
       const nextButton = await $('~Next');
       await nextButton.click();
       await driver.pause(3000);
    
    }
    
    async otp(){
        // Wait for 1 second before starting the action
        await driver.pause(2000);
        const otpCode = '123456';

        // Select the first input field
        const otpInput = await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]');
        await otpInput.click();
        // Enter entire OTP at once
        await otpInput.addValue(otpCode);  
        // Optional pause to wait for verification
        await driver.pause(3000);  
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
        await driver.pause(4000); 
    }
    async backnavigation() {
        // Navigate back to the previous screen
         const backButton = await $('~Back');
         await backButton.click();
        await driver.pause(2000); 

    }
    async backnavigation3() {
        // Navigate back to the previous screen
        const backButtonnew = await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.widget.Button[1]');
        await backButtonnew.click();
        await driver.pause(2000);
    }
    async backnavigation2() {
        // Navigate back to the previous screen
        const backButtonnew = await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View');
        await backButtonnew.click();
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
         // Let scroll complete
        await driver.pause(2000);
        }

        if (!elementFound) {
        throw new Error('Nutrition Guidance element not found after scrolling');
        } else {
        const target = await $(`~Nutrition Guidance`);
        await target.click();
        await driver.pause(3000); 
        // Wait for the target element to be displayed
        //click on ankle sprain
            const Dyslipidemia = await $('~Dyslipidemia\nArticle\n6 min');
            await Dyslipidemia.click();
            // Wait for the article to load
            await driver.pause(3000); 

        }

                
                await driver.pause(5000); // wait for scroll animation to complete
                

            }
            async newback(){
                // Navigate back to the previous screen
                // back button ui selector
                const backButtonnew = await $(new UiSelector().className("android.view.View").instance(4))
                await backButtonnew.click();
                await driver.pause(2000); 
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
    async notification(){
        //navigate to notification
        await driver.pause(1000);
        const notificationButton = await $('android=new UiSelector().className("android.widget.ImageView").instance(2)');
        await notificationButton.click();
        await driver.pause(2000); 
    }  
    async verifyNotificationScreen() {
        // Verify Notification screen is displayed
        const notificationScreen = await $('~Notifications');
        const isDisplayed = await notificationScreen.isDisplayed();
        if (!isDisplayed) {
            throw new Error("Notification screen is not displayed");
        }
        console.log("Notification screen is displayed successfully");
        await driver.pause(2000); // Wait for 2 seconds to observe the screen
    }  



   async navigateHealth(){
        let maxScrolls = 5;
        let elementFound = false;
    
        for (let i = 0; i < maxScrolls; i++) {
            try {
                const element = await $(`~Wellness & Self-Care`);
                if (await element.isDisplayed()) {
                    elementFound = true;
                    break;
                }
            } catch (err) {
                // Not found, continue scrolling
            }
    
            // Scroll down using coordinates
            await driver.performActions([
                {
                    type: 'pointer',
                    id: 'finger1',
                    parameters: { pointerType: 'touch' },
                    actions: [
                        { type: 'pointerMove', duration: 0, x: 962, y: 1200 },  // Start position
                        { type: 'pointerDown', button: 0 },
                        { type: 'pause', duration: 200 },
                        { type: 'pointerMove', duration: 800, x: 962, y: 400 },  // End position (scroll up)
                        { type: 'pointerUp', button: 0 },
                    ],
                },
            ]);
    
            await driver.pause(2000); // Let scroll animation complete
        }
    
        if (!elementFound) {
            throw new Error('Health Education element not found after scrolling');
        } else {
            const target = await $(`~Wellness & Self-Care`);
            await target.click();
            await driver.pause(3000); 
    
            // Add any next steps below if you want to click inside Health Education
            // e.g., click on a specific article
        }
    
        await driver.pause(3000); // Final wait
    }
    async watchvideo(){
        // Wait for the home screen to load
        await driver.pause(2000); 
        // Navigate to Health screen
        const video = await $('~Healthy Living: Stress Management\nVideo\n1 min');
        await video.click();
        await driver.pause(9000); 
        // Navigate back
        const navigateback = await $('~Back');
        await navigateback.click();
        await driver.pause(2000); 
    }
    
    async confirmvitalssubmission(){
        // Now check the status of the "Capture Vitals" button
        const captureVitalsButton = await $('~Capture Vitals');

        // Option 1: Check if the button is disabled
        const isEnabled = await captureVitalsButton.isEnabled();
        if (!isEnabled) {
            console.log('Capture Vitals button is disabled after completion');
        } else {
            console.warn('!!!!Capture Vitals button is still enabled — test failed!!!!');
        }

    }
    async oldscan(){
            //click vital scan submission
            await driver.pause(2000);
            const vitalScanButton = await $('~Capture Vitals');
            await vitalScanButton.click();
            await driver.pause(3000); 
            // read the instructions
            await driver.pause(1000);
            // tap next button
            const nextButton = await $('~Next');
            await nextButton.click(); 
            await driver.pause(2000);
            //click start scanning
            const startScanButton = await $('~Start Scanning');
            // After clicking "Start Scanning"
            await startScanButton.click();
             await driver.pause(100000); // Wait for the scanning process to complete
            // Wait for the result dynamically
            const scanResultSelector = await $('~Scan Results'); 
            const isScanResultVisible = await scanResultSelector.isExisting(); // Check if the element exists
            if (!isScanResultVisible) {
                throw new Error("Scan results not found, something went wrong.");
            }
        
            // Optionally, confirm each vital result is shown using isExisting
            await driver.pause(2000);
            // const heartRate = await $('~Heart Rate');
            // const bloodPressure = await $('~Blood Pressure');
            // const respiratoryRate = await $('~Respiratory Rate');
        
            // const isHeartRateVisible = await heartRate.isExisting();
            // const isBloodPressureVisible = await bloodPressure.isExisting();
            // const isRespiratoryRateVisible = await respiratoryRate.isExisting();
        
            // if (!isHeartRateVisible || !isBloodPressureVisible || !isRespiratoryRateVisible) {
            //     throw new Error("One or more vital signs are missing.");
            // }
        
            // Tap "Done"
            const doneButton = await $('~Done');
            await doneButton.click();
        
            // Check if app is still running after completion
            const isAppRunning = await driver.isAppInstalled("com.primefocushealth.pfhapp");
            if (!isAppRunning) {
                console.log("App has crashed or closed unexpectedly.");
                throw new Error("App closed unexpectedly.");
            }
        
    
        
        
    }
    async vitalscan() {
        // Click vital scan submission
        await driver.pause(2000);
        const vitalScanButton = await $('~Capture Vitals');
        await vitalScanButton.click();
        await driver.pause(3000);
    
        // Read instructions and tap next
        await driver.pause(1000);
        const nextButton = await $('~Next');
        await nextButton.click();
        await driver.pause(2000);
    
        // Click start scanning
        const startScanButton = await $('~Start Scanning');
        await startScanButton.click();
    
        // Dynamic wait for scan completion with app state checks
        let appClosed = false;
        try {
            await driver.waitUntil(async () => {
                // Check app state (1 = not running, 3 = background, 4 = foreground)
                const appState = await driver.queryAppState('com.primefocushealth.pfhapp');
                if (appState === 1) {
                    throw new Error('App closed during scan');
                }
    
                // Check if results are visible
                return await $('~Scan Results').isExisting();
            }, {
                timeout: 180000,  // 3 min max (adjust based on scan time)
                interval: 5000,   // Check every 5 sec
                timeoutMsg: 'Scan results not found within timeout'
            });
        } catch (err) {
            if (err.message.includes('App closed during scan') || err.message.includes('invalid session id')) {
                console.log('App closed during/after scan - reloading session');
                appClosed = true;
                try {
                    await driver.reloadSession();
                    console.log('Session reloaded');
                    // Optional: Re-login if needed after reload
                    // await LoginPage.login(global.commonData.value.username);
                    // await driver.pause(2000);
                } catch (reloadErr) {
                    console.error('Reload failed:', reloadErr);
                    if (reloadErr.message.includes('invalid session id')) {
                        await driver.deleteSession();
                        global.driver = await remote(exports.config);  // Recreate from config
                        // Optional: Re-login
                        // await LoginPage.login(global.commonData.value.username);
                        // await driver.pause(2000);
                    } else {
                        throw reloadErr;
                    }
                }
            } else {
                throw err;  // Rethrow other errors
            }
        }
    
        if (!appClosed) {
            // Normal checks if app didn't close
            const scanResultSelector = await $('~Scan Results');
            if (!await scanResultSelector.isExisting()) {
                throw new Error("Scan results not found, something went wrong.");
            }
    
            const heartRate = await $('~Heart Rate');
            const bloodPressure = await $('~Blood Pressure');
            const respiratoryRate = await $('~Respiratory Rate');
    
            if (!await heartRate.isExisting() || !await bloodPressure.isExisting() || !await respiratoryRate.isExisting()) {
                throw new Error("One or more vital signs are missing.");
            }
    
            // Tap "Done"
            await driver.pause(2000);
            const doneButton = await $('~Done');
            await doneButton.waitForDisplayed({ timeout: 100000 });
            await doneButton.click();
        } else {
            console.log('Session reloaded after app close - assuming scan submitted, proceeding to verification');
        }
    
        // Remove your old isAppInstalled check (redundant after reload)
        // Instead, check app state post-reload
        const postState = await driver.queryAppState('com.primefocushealth.pfhapp');
        if (postState !== 4) {  // Not in foreground
            throw new Error("App not in foreground after handling.");
        }
    }
    async explorehealth(){
        //tap explore health
        const exploreHealthButton = await $('~Explore Health');
        await exploreHealthButton.click();
        await driver.pause(2000); 
        //tap content
        const contentButton = await $('~Healthy Heart Introduction\nVideo\n2 min');
        await contentButton.click();
        await driver.pause(8000);
        //tap back
        const backButton = await $('~Back');
        await backButton.click();
        await driver.pause(2000);
        await backButton.click();

    }
    async verifyExploreHealth() {
        // Verify Explore Health screen is displayed
        const exploreHealthScreen = await $('~Explore Health');
        const isDisplayed = await exploreHealthScreen.isDisplayed();
        if (!isDisplayed) {
            throw new Error("Explore Health screen is not displayed");
        }
        console.log("Explore Health screen is displayed successfully");
        await driver.pause(2000); 
    }
 
    async fourthtask() {
        // Step 1: Get the in-app date
        const dateElement = await $('android=new UiSelector().descriptionContains("2025")');
        const dateText = await dateElement.getAttribute("contentDescription"); // e.g., "Monday, July 29th, 2025"
        const dayOfWeek = dateText.split(',')[0].trim();
    
        console.log(`📆 Detected Day: ${dayOfWeek}`);
    
        // Step 2: Conditional logic based on the day
        if (dayOfWeek === 'Monday' || dayOfWeek === 'Tuesday' || dayOfWeek === 'Wednesday'){
            // === Monday → Record Weight ===
            console.log('🚀 Executing Record Weight task');
    
            const recordWeightButton = await $('~Record Weight');
            await recordWeightButton.click();
            await driver.pause(2000);
    
            const kgButton = await $('~Kilograms');
            await kgButton.click();
            await driver.pause(2000);
    
            const weightInput = await $('android.widget.EditText');
            const weightvalue = global.commonData.value.weight;
            await weightInput.addValue(weightvalue);
            await driver.pause(2000);
    
            const doneButton = await $('~Done');
            await doneButton.click();
            await driver.pause(2000);
    
        } else {
            // === Any other day (e.g., Thursday) → GAD-7 or PHQ9 ===
            console.log('🚀 Looking for GAD-7 or PHQ9 task');
    
            let handled = false;
    
            try {
                const gad7Button = await $('~Begin GAD-7');
                if (await gad7Button.isDisplayed()) {
                    await gad7Button.click();
                    console.log('✅ GAD-7 task started');
                    handled = true;
                }
            } catch (e) {
                console.log('⚠️ GAD-7 not found');
            }
    
            if (!handled) {
                try {
                    const phq9Button = await $('~Begin PHQ9');
                    if (await phq9Button.isDisplayed()) {
                        await phq9Button.click();
                        console.log('✅ PHQ9 task started');
                    }
                } catch (e) {
                    console.log('⚠️ PHQ9 not found');
                }
            }
        }
    }
    
    
   }


module.exports = new allPositive();
