
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
        const clipboardText = $('~Hello');
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
    const listDemo = $('(//android.view.ViewGroup[@resource-id="RNE__LISTITEM__padView"])[6]');
    await listDemo.click();
    await driver.pause(2000);

      await driver.performActions([
          {
              type: 'pointer',
              id: 'finger1',
              parameters: { pointerType: 'touch' },
              actions: [
                  { type: 'pointerMove', duration: 0, x: 500, y: 1500 },
                  { type: 'pointerDown', button: 0 },
                  { type: 'pointerMove', duration: 1000, x: 500, y: 500 },
                  { type: 'pointerUp', button: 0 }
              ]
          }
      ]);

    await driver.pause(2000);

    // click DROPBOX
    const aws = $('(//android.view.ViewGroup[@resource-id="RNE__LISTITEM__padView"])[3]');
    await aws.click();
    await driver.pause(2000);
    // click ok
    const ok = $('//android.widget.Button[@resource-id="android:id/button1"]');
    if (await ok.isDisplayed()) {
      await ok.click();
      console.log('Permission dialog handled.');
    }
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
    const day = $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="8"]');
    if (await day.isDisplayed()) {
      console.log('The date element is displayed.');
      const dayText = await day.getText();
      console.log(`The date being selected is: ${dayText}`);
      await day.click();
    await driver.pause(2000);
    }
    // click learn more
    const learnMore = $('~learnMore');
    await learnMore.click();
    //click date 
    await driver.pause(2000);
    const okButton = $('//android.widget.Button[@resource-id="android:id/button1"]');
    // Wait for the OK button to be displayed
    if (await okButton.waitForDisplayed({ timeout: 5000 })) {
        console.log('Dialog box appeared. Clicking OK.');
        await okButton.click();
        console.log('Permission dialog handled.');
    } else {
        console.log('OK button not found or dialog box did not appear.');
    }
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
    const clipboardText = $('~Hello');
    const text = await clipboardText.getText();
    if(text==='Hello'){
        console.log('Clipboard text is correct first time');
}
 

}

async verifysecondtime() {
  await driver.pause(2000);
  // Click message input
  const messageInput = $('~messageInput');
  // Clear the text
  await messageInput.clearValue();
  console.log('Cleared the message input.');

  // Type "World" in the message input
  await messageInput.setValue('World');
  console.log('Typed "World" in the message input.');

  // Set the new text
  const setText = $('~setClipboardText'); // Define setText here
  await setText.click();
  console.log('Set clipboard text to "World".');
  await driver.pause(1000);

  // Click on clipboard text
  const getText2 = $('~refreshClipboardText');
  await getText2.click();
  await driver.pause(2000);

  // Check the text is "World"
  const clipboardText2 = $('~World');
  const text2 = await clipboardText2.getText();
  if (text2 === 'World') {
      console.log('Clipboard text is correct: "World".');
  }
}
async back(){
    // click back
    const back = $('~Navigate Up');
    await back.click();
    await driver.pause(2000);
  }

  async listDemofirsttime(){
    await driver.pause(2000);
    // click list demo
    const listDemo = $('(//android.view.ViewGroup[@resource-id="RNE__LISTITEM__padView"])[6]');
    await listDemo.click();
    await driver.pause(2000);
    // click AWS 
    const aws = $('(//android.view.ViewGroup[@resource-id="RNE__LISTITEM__padView"])[3]');
    await aws.click();
    await driver.pause(2000);
    // click ok
    const ok = $('//android.widget.Button[@resource-id="android:id/button1"]');
    if (await ok.isDisplayed()) {
      await ok.click();
      console.log('Permission dialog handled.');
    }
    
  }
  async listDemosecondtime(){
    await driver.pause(2000);
    await driver.performActions([
      {
          type: 'pointer',
          id: 'finger1',
          parameters: { pointerType: 'touch' },
          actions: [
              { type: 'pointerMove', duration: 0, x: 500, y: 1500 },
              { type: 'pointerDown', button: 0 },
              { type: 'pointerMove', duration: 1000, x: 500, y: 500 },
              { type: 'pointerUp', button: 0 }
          ]
      }
  ]);
  // click list demo DROPBOX
  const listDemo = $('(//android.view.ViewGroup[@resource-id="RNE__LISTITEM__padView"])[6]');
  await listDemo.click();
  await driver.pause(2000);
  
  // click ok
  const ok = $('//android.widget.Button[@resource-id="android:id/button1"]');
  if (await ok.isDisplayed()) {
    await ok.click();
    console.log('Permission dialog handled.');
  }
  
  }
  async pickerDemofirsttime(){
    await driver.pause(2000);
    const pickerDemo = $('(//android.view.ViewGroup[@resource-id="RNE__LISTITEM__padView"])[9]');
    await pickerDemo.click();
    await driver.pause(2000);
    // click on picker
    const picker = $('~dayPicker');
    await picker.click();
    await driver.pause(2000);
    const day = $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="8"]');
    if (await day.isDisplayed()) {
      console.log('The date element is displayed.');
      const dayText = await day.getText();
      console.log(`The date being selected is: ${dayText}`);
      await day.click();
    await driver.pause(2000);
    }
    // click learn more
    const learnMore = $('~learnMore');
    await learnMore.click();
    //click date 
    await driver.pause(2000);
    const okButton = $('//android.widget.Button[@resource-id="android:id/button1"]');
    // Wait for the OK button to be displayed
    if (await okButton.waitForDisplayed({ timeout: 5000 })) {
        console.log('Dialog box appeared. Clicking OK.');
        await okButton.click();
        console.log('Permission dialog handled.');
    } else {
        console.log('OK button not found or dialog box did not appear.');
    }
   
  }
  async pickerDemosecondtime(){
    // click on picker
    const picker = $('~dayPicker');
    await picker.click();
    await driver.pause(2000);
    const day = $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="13"]');
    if (await day.isDisplayed()) {
      console.log('The date element is displayed.');
      const dayText = await day.getText();
      console.log(`The date being selected is: ${dayText}`);
      await day.click();
    await driver.pause(2000);
    }
    // click learn more
    const learnMore = $('~learnMore');
    await learnMore.click();
    //click date 
    await driver.pause(2000);
    const okButton = $('//android.widget.Button[@resource-id="android:id/button1"]');
    // Wait for the OK button to be displayed
    if (await okButton.waitForDisplayed({ timeout: 5000 })) {
        console.log('Dialog box appeared. Clicking OK.');
        await okButton.click();
        console.log('Permission dialog handled.');
    } else {
        console.log('OK button not found or dialog box did not appear.');
    }
   
  
  }
}



module.exports = new app;
