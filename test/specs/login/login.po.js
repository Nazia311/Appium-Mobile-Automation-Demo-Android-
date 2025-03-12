// login.po.js
class LoginPage {
    async openLoginScreen(username) {
        //read the value from the common.json file
        //const usernum = data.login.username

        await driver.pause(1000);
        //enter mobile number
        const mobileno = await $('android.widget.EditText');
        await mobileno.click();
        const usernum = data.login.username
        await mobileno.addValue(usernum);
        //await mobileno.addValue('01933449933');
        await driver.pause(2000);
        //click on Next button
        const nextButton = await $('~Next');
        await nextButton.click();

    }

     
      
}
module.exports = new LoginPage();