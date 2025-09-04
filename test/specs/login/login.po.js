// login.po.js
class loginPage {
    async openLoginScreen() {
       // Wait for 1 second before starting the action
       await driver.pause(1000);
;

       // Enter the mobile number from the common.json file
       const mobileno = await $('//android.widget.EditText');
       await mobileno.click();
       
       // Retrieve username from common.json and enter it into the mobile number field
       const usernum = global.commonData.value.username;  
       await mobileno.addValue(usernum);

       // Pause for 2 seconds before clicking Next
        await driver.pause(1000);
        const consent= await $('//android.widget.CheckBox');
        await consent.click();
        await driver.pause(1000);

       // Click on the Next button
       const nextButton = await $('~Next');
       await nextButton.click();
       await driver.pause(3000);

    }

    async regularlogin(){
        // Wait for 1 second before starting the action
       await driver.pause(1000); 
       // Enter the mobile number from the common.json file
       const mobileno = await $('//android.widget.EditText');
       await mobileno.click();
       // Retrieve username from common.json and enter it into the mobile number field
       const usernum = global.commonData.value.username;  
       await mobileno.addValue(usernum);
       await driver.pause(1000);
       const nextButton = await $('~Next');


    }
      
}
module.exports = new loginPage();