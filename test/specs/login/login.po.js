// login.po.js
class LoginPage {
    async openLoginScreen() {
        //read the value from the common.json file
        //const usernum = data.login.username

        await driver.pause(1000);
        //click on get started
        const getStarted = await $('~Get Started');
        await getStarted.click();
        //enter mobile number
        const mobileno = await $('android.widget.EditText');
        await mobileno.click();
        //const usernum = data.login.username
        //await mobileno.addValue(usernum);
        mobileno.addValue('01933449933');
        await driver.pause(2000);
        //click on Next button
        const nextButton = await $('~Next');
        await nextButton.click();
        await driver.pause(2000);
    }

     
      
}
module.exports = new LoginPage();