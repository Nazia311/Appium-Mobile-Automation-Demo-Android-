
class authentication {
    async welcomescreen() {
        // Wait for 1 second before starting the action
        await driver.pause(1000);

        // Click on the Get Started button
        const getStarted = await $('~Get Started');
        await getStarted.click();

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
    async otpscreen(){
         // Wait for 1 second before starting the action
         await driver.pause(3000);
         //verify otp screen
         const otpscreen = await $('~OTP');
         await otpscreen.isDisplayed();

    }
}

module.exports = new authentication();
