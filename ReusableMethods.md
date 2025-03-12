  
await $('android=new UiSelector().description("ট্রান্সফার").instance(0)').click();
------------------------------------------------------------------------------
await driver.pause(1000);   
await driver.quit();
------------------------------------------------------------------------------
await $('~নিজস্ব অ্যাকাউন্টে ট্রান্সফার').click();
------------------------------------------------------------------------------
//android.view.View[contains(@content-desc, '0200010000033')]
await driver.$('//*[contains(@content-desc, "0200010000161")]')
-------------------------------------------------------------------------------
const accountInfocValue = data.accountInfo.accountNo;
let element = await driver.$('//*[contains(@content-desc, "${accountInfocValue}")]');
-------------------------------------------------------------------------------
// hide keyboard
await driver.hideKeyboard();
-----------------------------------------------------------------------------
// floating button
    const floatingButton = await $('android=new UiSelector().className("android.widget.Button")');
    const isDisplayed = await floatingButton.isDisplayed();
    const isEnabled = await floatingButton.isEnabled();

    if (isDisplayed && isEnabled) {
        await floatingButton.click();
    } else {
        console.log("Floating button is not visible or not enabled");
    }
----------------------------------------------------------------------------
// operator selection
    const operatorDropdown = await driver.$(`//*[contains(@content-desc, "মোবাইল অপারেটর নির্বাচন করুন")]`);

    if (operatorDropdown.length > 0) {
        console.log("Operator selection dropdown found");

        // Operator Selection
        await driver.pause(2000);
        await operatorDropdown[0].click();
        await driver.pause(1000);
        const operatorSelect = await $('android=new UiSelector().className("android.widget.ImageView").instance(5)');
        await operatorSelect.click();

        // Operator Type Selection
        const operatorType = await $('android=new UiSelector().description("মোবাইল অপারেটরের ধরন নির্বাচন করুন")');
        await operatorType.click();
        await driver.pause(1000);
        const operatorTypeSelect = data.mobileRecharge.operatorType;
        let opType = await driver.$(`//*[contains(@content-desc, "${operatorTypeSelect}")]`);
        await opType.click();
        await driver.pause(1000);
    } else {
        console.log("Operator selection dropdown not found, skipping operator selection steps");
    }
..........................
Using UiSelector
const doerLogo = await $('android=new UiSelector().className("android.widget.ImageView").index(1)');
.................................
Using resource-id (If Available)
const doerLogo = await $('android=new UiSelector().resourceId("android:id/content")');
.....................................
Using content-desc
const doerLogo = await $('android=new UiSelector().description("YourContentDescription")');
.....................................
Using Class and Instance
const doerLogo = await $('android=new UiSelector().className("android.widget.ImageView").instance(1)');

