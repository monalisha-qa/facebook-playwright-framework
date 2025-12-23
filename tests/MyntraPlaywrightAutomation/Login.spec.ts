import {chromium , test , expect} from '@playwright/test';
test('login',async({})=>{
const browser = await chromium.launch({
    headless:false
});

const contex = await browser.newContext();
const page = await contex.newPage();

await page.goto('https://practice.expandtesting.com/login');
await page.locator("//input[@id='username']");
await page.locator("//input[@id='password']");
await page.locator("//button[contains(text(),'Login')]");
})

