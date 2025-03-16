const killPort = require("./killPort");
const path = require("path");
const fs = require("fs");
const moment = require("moment");
const allure = require("@wdio/allure-reporter").default;
const { exec } = require("child_process");
const LoginPage = require("./test/specs/login/login.po");

let allTestResults = [],
  startTime,
  endTime;

// Utility function to format duration
function formatDuration(durationMs) {
  const totalMinutes = Math.floor(durationMs / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes}m`;
}

exports.config = {
  runner: "local",
  path: "/wd/hub",
  specs: ["./test/specs/**/*.js"],

  maxInstances: 1,
  capabilities: [
    {
      "platformName": "Android",
      "deviceName": "R58X7086E6R",
      "automationName": "UiAutomator2",
      "app": "/home/rodela/pfh_app_automation/pfh-app-automation/smart-app/android/app.apk",
      "platformVersion": "14",
      "appPackage": "com.primefocushealth.pfhapp",  
      "appActivity": "com.primefocushealth.pfhapp.MainActivity", 
      "autoGrantPermissions": true,
      "ignoreHiddenApiPolicyError": true,
      "noSign": true,
      "disableWindowAnimation": true,
      "noReset": true,
      "settings[enableMultiWindows]": true
    }
    
  ],
  logLevel: "info",
  bail: 0,
  waitforTimeout: 30000,
  connectionRetryTimeout: 240000,
  connectionRetryCount: 5,
  services: ["appium"],
  appium: {
    command: "appium",
    args: {
      port: 4725,
      log: "./appium.log",
    },
  },
  framework: "mocha",
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],
  mochaOpts: {
    ui: "bdd",
    timeout: 120000,
  },

  before: async function () {
    global.commonData = {};
    // Capture the start time before the test suite begins
    startTime = moment();
    allure.addStep(
      `Test suite started at: ${startTime.format("YYYY-MM-DD HH:mm:ss")}`
    );

    const dataPath = path.join(__dirname, "./test/data/common.json");
    try {
      global.commonData = JSON.parse(fs.readFileSync(dataPath, "utf8"));
      console.log("Login data:", global.commonData);
    } catch (err) {
      console.error("Error loading Login data:", err);
    }

    await driver.pause(1000);
    //await LoginPage.openLoginScreen();
    await LoginPage.login(
      global.commonData.login.username,
      global.commonData.login.otppass
    );
    console.log("App launched and logged in successfully.");
  },

  afterSuite: async function () {
    // console.log("Logging out after suite...");
    // await driver.pause(3000);
    // const doerLogo = await $(
    //   'android=new UiSelector().className("android.widget.ImageView").instance(1)'
    // );
    // await doerLogo.click();
    // await driver.pause(1000);
    // const logoutButton = await $("~লগ আউট");
    // await logoutButton.click();
    // await driver.pause(1000);
    // const confirmLogoutButton = await $("~হ্যাঁ");
    // await confirmLogoutButton.click();

    console.log("Clearing app data after suite...");
    await new Promise((resolve, reject) => {
      exec(
        "adb shell pm clear com.primefocushealth.pfhapp",
        (err, stdout, stderr) => {
          if (err) {
            console.error(`Error clearing app data: ${err.message}`);
            return reject(err);
          }
          console.log("App data cleared:", stdout);
          resolve();
        }
      );
    });
  },

  afterTest: async function (
    test,
    context,
    { error, result, duration, passed }
  ) {
    allTestResults.push({
      suiteName: test.parent,
      testName: test.title,
      passed: passed,
      duration: formatDuration(duration), // Format duration here
    });
  },

  after: async function () {
    console.log("\n ====== Test Suite Results ======\n");

    // Group results by suite name
    const resultsBySuite = allTestResults.reduce((acc, result) => {
      acc[result.suiteName] = acc[result.suiteName] || [];
      acc[result.suiteName].push(result);
      return acc;
    }, {});

    // Display the results
    for (const [suiteName, tests] of Object.entries(resultsBySuite)) {
      console.log(`Suite: ${suiteName}`);
      const passedTests = tests.filter((test) => test.passed).length;
      const failedTests = tests.length - passedTests;

      console.log(`  Passed: ${passedTests}`);
      console.log(`  Failed: ${failedTests}`);
      console.log(`  Total: ${tests.length}`);
      console.log(""); // Add a newline for better readability
    }
  },

  onComplete: async function () {
    console.log("All tests complete. Uninstalling app...");
    await new Promise((resolve, reject) => {
      exec(
        "adb uninstall com.primefocushealth.pfhapp",
        (err, stdout, stderr) => {
          if (err) {
            console.error(`Error uninstalling app: ${err.message}`);
            return reject(err);
          }
          console.log("App uninstalled:", stdout);
          resolve();
        }
      );
    });

    // Capture the end time after the test suite completes
    endTime = moment();
    allure.addStep(
      `Test suite ended at: ${endTime.format("YYYY-MM-DD HH:mm:ss")}`
    );

    // Calculate and log the total duration
    const duration = moment.duration(endTime.diff(startTime));
    const formattedDuration = formatDuration(duration.asMilliseconds());
    allure.addStep(`Total test suite duration: ${formattedDuration}`);
    console.log(`Total test suite duration: ${formattedDuration}`);

    console.log("Running after test suite to kill port 4723");
    try {
      await killPort(4725);
    } catch (error) {
      console.error("Failed to kill port after test suite:", error);
    }

    console.log("All tests complete. Terminating process...");
    process.exit(0);
  },
};
