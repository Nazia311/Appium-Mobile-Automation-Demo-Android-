// login.po.js
class loginPage {
    async openLoginScreen() {
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
    }

     
      
}
module.exports = new loginPage();