
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
    async otpscreen(){
         // Wait for 1 second before starting the action
         //type otp moc
        const otpInput = await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]');  
        await otpInput.click();
        //Enter value MOC OTP
        await otpInput.addValue('1');
        const otpInput2 = await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[2]');  
        await otpInput2.click();
        //Enter value MOC OTP
        await otpInput2.addValue('2');
        const otpInput3 = await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[3]');
        await otpInput3.click();
        //Enter value MOC OTP
        await otpInput3.addValue('3');
        const otpInput4 = await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[4]');
        await otpInput4.click();
        //Enter value MOC OTP
        await otpInput4.addValue('4');
        const otpInput5 = await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[5]');
        await otpInput5.click();
        //Enter value MOC OTP
        await otpInput5.addValue('5');
        const otpInput6 = await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[6]');
        await otpInput6.click();
        //Enter value MOC OTP
        await otpInput6.addValue('6');
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

// if (!elementFound) {
//   throw new Error('Nutrition Guidance element not found after scrolling');
// } else {
//   const target = await $(`~Nutrition Guidance`);
//   await target.click();
// }

          
//           await driver.pause(5000); // wait for scroll animation to complete
          

    }
    
}

module.exports = new allPositive();
