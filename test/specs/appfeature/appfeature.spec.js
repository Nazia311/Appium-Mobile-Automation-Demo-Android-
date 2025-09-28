const { expect } = require('@wdio/globals');
const app = require('./appfeature.po');

describe('Auth Test', () => {

   it('1. Verify successful check clipboard text demo, List Demo, Picker Demo', async () => {
    // check clipboard text
    await app.clipboard();
    // list demo
    await app.listDemo();
    // picker demo
    await app.pickerDemo();
   });
   
   it('2. Verify successful check clipboard functionality two times', async () => {
    // check clipboard text two times
    await app.clipboardtwotimes();
    //verify second time
    await app.verifysecondtime();
    // click back
    await app.back()
    
   });
   it('3. Verify successful check list demo functionality two times', async () => {
      // check clipboard text two times
      
      
     });
  });
