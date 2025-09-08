const killPort = require("./killPort");
const path = require("path");
const fs = require("fs");
const moment = require("moment");
const allure = require("@wdio/allure-reporter").default;
const { execSync } = require('child_process');
const LoginPage = require("./test/specs/login/login.po");
const { remote } = require('webdriverio');

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
      "dontStopAppOnReset": true,
      "newCommandTimeout": 300, // 5 minutes
    }
    
  ],
  logLevel: "info",
  bail: 0,
  waitforTimeout: 100000,
  connectionRetryTimeout: 240000,
  connectionRetryCount: 5,
  services: ["appium"],
  appium: {
    command: "appium",
    args: {
      port: 4725,
      log: "./appium.log",
    'use-plugins': ['biometric'],

    },
  },
  framework: "mocha",
  onPrepare: function (config, capabilities) {
    console.log('Ensuring device is unlocked...');
try {
  execSync('adb shell input keyevent 82'); // Unlock the device
  console.log('Device unlocked successfully.');
} catch (err) {
  console.error('Failed to unlock device:', err.message);
}
   // Verify ADB is installed and device is connected
   try {
    const devices = execSync('adb devices', { encoding: 'utf-8' });
    if (!devices.includes('device')) {
      console.error('No devices connected via ADB');
      throw new Error('No devices connected via ADB');
    }
    console.log('ADB devices:', devices);
  } catch (err) {
    console.error('ADB setup error:', err.message);
    throw new Error('ADB is not properly configured or no device is connected');
  }

  // Grant camera permission


    console.log('Granting camera permission via ADB...');
    try {
      execSync('adb shell pm grant com.primefocushealth.pfhapp android.permission.CAMERA');
      console.log('Camera permission granted successfully.');
    } catch (err) {
      console.error('Failed to grant camera permission:', err);
    }
    // Grant notification access permission (for reading OTP)
    console.log('Granting notification access permission via ADB...');
    try {
      execSync('adb shell pm grant com.primefocushealth.pfhapp android.permission.POST_NOTIFICATIONS');
      console.log('Notification permission granted successfully.');
    } catch (err) {
      console.error('Failed to grant notification permission:', err);
    }

    // Test notification panel expansion
  console.log('Testing notification panel expansion...');
  try {
    execSync('adb shell cmd statusbar expand-notifications', { stdio: 'inherit' });
    console.log('Notification panel expansion test successful.');
    execSync('adb shell cmd statusbar collapse', { stdio: 'inherit' });
  } catch (err) {
    console.warn('Notification panel expansion test failed, using swipe fallback in tests:', err.message);
  }

  },
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
    timeout: 180000,
  },
  before: async function () {
    global.commonData = {};
    startTime = moment();
    allure.addStep(`Test suite started at: ${startTime.format("YYYY-MM-DD HH:mm:ss")}`);
    const dataPath = path.join(__dirname, './test/data/common.json');
  //    // --- Grant Camera Permission via ADB ---
  //    try {
  //     console.log('Granting camera permission via ADB...');
  //     execSync('adb shell pm grant com.primefocushealth.pfhapp android.permission.CAMERA');
  //     console.log('Camera permission granted successfully.');
  // } catch (err) {
  //     console.error('Failed to grant camera permission:', err);
  // }

    try {
      if (!fs.existsSync(dataPath)) {
        throw new Error(`common.json file not found at path: ${dataPath}`);
      }
      global.commonData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
      console.log("Login data loaded:", global.commonData);
    } catch (err) {
      console.error("Error loading Login data:", err);
      throw new Error("Failed to load Login data.");
    }
    try {
      await LoginPage.login(global.commonData.value.username); // Pass only username
      await driver.pause(2000)
      console.log("App launched and logged in successfully.");
    } catch (loginError) {
      console.error("Login failed:", loginError);
      throw new Error("Login failed");
    }
  },
  
    

  afterSuite: async function () {
    
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
  
      // Add this block: Handle invalid session id by reloading driver
    if (error && error.message.includes('invalid session id')) {
      console.log('Invalid session detected in afterTest - attempting reload');
      try {
        await driver.reloadSession();  // Reloads with same capabilities, relaunches app
        console.log('Session reloaded successfully');
        // Optional: Re-login if state isn't preserved after reload
        // await LoginPage.login(global.commonData.value.username);
        // await driver.pause(2000);
      } catch (reloadErr) {
        console.error('Reload failed:', reloadErr);
        if (reloadErr.message.includes('invalid session id')) {
          // Fallback: Delete and recreate session
          await driver.deleteSession();
          global.driver = await remote(exports.config);  // Recreate driver from config
          // Optional: Re-login
          // await LoginPage.login(global.commonData.value.username);
          // await driver.pause(2000);
        } else {
          throw reloadErr;  // Rethrow other errors
        }
      }
    
    }
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
