const { expect } = require('@wdio/globals');
const authentication = require('./authentication.po');

describe('Auth Test', () => {
    it('1. Verify successful user authentication', async () => {
        //navigate welcome screen
        await authentication.homescreen();
        //
        
    });
});
