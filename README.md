# Appium Automation with WebdriverIO

[Appium Installation Guideline](https://docs.google.com/document/d/1Lv9Pr9rNak70uv7DKgg_p7Lf8Z0oTiuyKhCXxwyfbCY/edit?tab=t.0)

## Prerequisites
- Node.js installed [Check Node Version `node -v`]
- NPM installed [Check NPM Version `npm -v`]
- Java JDK installed
- Android SDK installed

## Setup Instructions
1. Open the folder through VS Code.
2. Open Terminal and run the following commands:
   1. `npm init -y` [Initialize the project]
   2. `appium driver list --installed`
   3. `appium-doctor --android`
   4. `npm install appium appium-uiautomator2-driver`
   5. `appium driver install uiautomator2`

## Working Files and Folders
1. `specs/` [To write all tests]
2. `PageObjects/` [For Page Object Model]
3. `wdio.conf.js` [For test run related configuration]

## Useful Commands for Test Suites Run and Report Generation
1. To run all test suites: 
   `npx wdio run ./wdio.conf.js`
2. To run a single test suite:
   `npx wdio run wdio.conf.js --spec ./test/specs/all-positive/all-positive.spec.js`
3. For report generation:
   `allure generate allure-results --clean -o allure-report` or  
   `npx allure generate allure-results --clean`
4. To open the generated report:
   `allure open allure-report` or 
   `npx allure open`
5. For cache clean
   `rm -rf allure-report`
   `allure generate allure-results --clean`
   `allure open ./allure-report --port 8080`
   `nohup allure open ./allure-report --port 8080 &`

