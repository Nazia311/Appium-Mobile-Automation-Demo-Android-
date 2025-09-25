const { expect } = require('@wdio/globals');
const allPositive = require('./all-positive.po');

describe('Auth Test', () => {

   it('1. Verify successful check clipboard text demo, List Demo, Picker Demo', async () => {
    // check clipboard text
    await allPositive.clipboard();
    // list demo
    await allPositive.listDemo();
    // picker demo
    await allPositive.pickerDemo();
   });
   
   it('2. Verify successful check clipboard functionality two times', async () => {
    // check clipboard text two times
    await allPositive.clipboardtwotimes();
    
   });
  });
