declare const process: any;

import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: 'tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'],
  ['json',{outputFile:'json-report.json'}],
['junit',{outputFile:'junit-report.xml'}],
['allure-playwright'],
],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
     //baseURL: 'https://ecommerce-playground.lambdatest.io/index.php?',
    baseURL: 'https://www.savana.com/',

    //testIdAttribute :'data-tab-item',
    video:'on',
    screenshot : 'on',
headless :false,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
  },

  // grep:[new RegExp("@smoke")]

  
//you have only 3 files, and you want: Browser.spec.ts → Chrome
                                    // Checkbox.spec.ts → Firefox
                                   // ForLoop.spec.ts → Edge
                                  // All running parallelly, each file in its own browser.
  // projects: [
  //   {
  //     name: 'chrome-Browser',
  //     use: {
  //       ...devices['Desktop Chrome'],
  //     },
  //     testMatch: ['Browser.spec.ts'], // Runs ONLY Browser.spec.ts
  //   },
  //   {
  //     name: 'firefox-Checkbox',
  //     use: {
  //       ...devices['Desktop Firefox'],
  //     },
  //     testMatch: ['Checkbox.spec.ts'], // Runs ONLY Checkbox.spec.ts
  //   },
  //   {
  //     name: 'edge-ForLoop',
  //     use: {
  //       ...devices['Desktop Edge'],
  //     },
  //     testMatch: ['Popup_Test.spec.ts'], // Runs ONLY ForLoop.spec.ts
  //   },
  // ],
});

//NOTE:
//all files on Chapter4 will run parallally like example - 1 file have 2 test , 1st test will run in 3 browser , 2nd will run in 3 browser
// projects: [
//   {
//     name: 'chromium',
//     use: { browserName: 'chromium' },
//     testDir: './tests/Chapter4'
//   },
//   {
//     name: 'firefox',
//     use: { browserName: 'firefox' },
//     testDir: './tests/Chapter4'
//   },
//   {
//     name: 'webkit',
//     use: { browserName: 'webkit' },
//     testDir: './tests/Chapter4'
//   },
//   {
//     name: 'Google Chrome',
//     use: { ...devices['Desktop Chrome'], channel: 'chrome' },
//     testDir: './tests/Chapter4'
//   }
// ],


/* Configure projects for major browsers */

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
   
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome',  },
     
    // },
  //],
   

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

