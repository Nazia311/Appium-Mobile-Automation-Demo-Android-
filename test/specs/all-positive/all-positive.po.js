
const { execSync } = require('child_process');
class app {
   async clipboard(){
       //click clipboard
        const clipboard = $('(//android.view.ViewGroup[@resource-id="RNE__LISTITEM__padView"])[3]');
        await clipboard.click();
        await driver.pause(2000);
        //click message input
        const messageInput = $('~messageInput');
        await messageInput.setValue('Hello');
        //set text
        await driver.pause(2000);
       const setText = $('~setClipboardText');
        await setText.click();
        await driver.pause(1000);
       //click on clipboard text
        const getText = $('~refreshClipboardText');
          await getText.click();
          await driver.pause(2000);
        // check the text is hello
        const clipboardText = $('~clipboardText');
        const text = await clipboardText.getText();
        if(text==='Hello'){
            console.log('Clipboard text is correct');

    }
    // click back
    const back = $('~Navigate Up');
    await back.click();
    await driver.pause(2000);
  }
  async listDemo(){
    // click list demo
    const listDemo = $('//android.view.ViewGroup[@resource-id="RNE__LISTITEM__padView"])[4]');
    await listDemo.click();
    await driver.pause(2000);
    // scroll down
    await driver.touchAction([
        { action: 'press', x: 500, y: 1500 },
        { action: 'moveTo', x: 500, y: 500 },
        'release'
    ]);
    await driver.pause(2000);
    // scroll up
    await driver.touchAction([
        { action: 'press', x: 500, y: 500 },
        { action: 'moveTo', x: 500, y: 1500 },
        'release'
    ]);
    await driver.pause(2000);

    // click AWS 
    const aws = $('(//android.view.ViewGroup[@resource-id="RNE__LISTITEM__padView"])[3]');
    await aws.click();
    await driver.pause(2000);
    // click ok
    const ok = $('//android.widget.Button[@resource-id="android:id/button1"]');
    await ok.click();
    await driver.pause(2000);

    // click back
    const back = $('~Navigate Up');
    await back.click();
    await driver.pause(2000);
  }
  async pickerDemo(){
    const pickerDemo = $('(//android.view.ViewGroup[@resource-id="RNE__LISTITEM__padView"])[9]');
    await pickerDemo.click();
    await driver.pause(2000);
    // click on picker
    const picker = $('~dayPicker');
    await picker.click();
    await driver.pause(2000);
    const day = $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="8"]]');
    await day.click();
    await driver.pause(2000);
    // click learn more
    const learnMore = $('~learnMore');
    await learnMore.click();
    await driver.pause(2000);
    //click ok
    const oknow = $('//android.widget.Button[@resource-id="android:id/button1"]');
    await oknow.click();
    // click back
    const back = $('~Navigate Up');
    await back.click();
    await driver.pause(2000);


  }
  async clipboardtwotimes(){
    //click clipboard
    const clipboard = $('(//android.view.ViewGroup[@resource-id="RNE__LISTITEM__padView"])[3]');
    await clipboard.click();
    await driver.pause(2000);
    //click message input
    const messageInput = $('~messageInput');
    await messageInput.setValue('Hello');
    //set text
    await driver.pause(2000);
   const setText = $('~setClipboardText');
    await setText.click();
    await driver.pause(1000);
   //click on clipboard text
    const getText = $('~refreshClipboardText');
      await getText.click();
      await driver.pause(2000);
    // check the text is hello
    const clipboardText = $('~clipboardText');
    const text = await clipboardText.getText();
    if(text==='Hello'){
        console.log('Clipboard text is correct first time');
}


// click back
const back = $('~Navigate Up');
await back.click();
await driver.pause(2000);
}
}



module.exports = new allPositive();
