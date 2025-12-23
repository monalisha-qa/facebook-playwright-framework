import {test , expect} from '@playwright/test'


test.beforeAll(async()=>{
console.log("running before all tests..");
});

test.beforeEach(async()=>{
console.log("running before each tests..");
});

test.afterEach(async()=>{
console.log("running after each tests..");
});

test.afterAll(async()=>{
console.log("running after all tests..");
});

test('Test1' ,async({page}) =>{
await page.goto('https://www.youtube.com/@TestersTalk', { waitUntil: 'networkidle' });
console.log("Test1 Execution started");
 await page.getByRole('combobox', { name: 'Search' }).fill('playwright by tester talk');
 await page.getByRole('combobox', { name: 'Search' }).press('Enter');
 await page.getByRole('link', { name: 'Playwright by Testers Talk'}).click();
await expect(page).toHaveTitle(/Testers Talk/i);
});


test('Test2' ,async({page}) =>{
await page.goto('https://www.youtube.com/@TestersTalk', { waitUntil: 'networkidle' });
console.log("Test2 Execution started");
 await page.getByRole('combobox', { name: 'Search' }).fill('playwright by tester talk');
 await page.getByRole('combobox', { name: 'Search' }).press('Enter');
 await page.getByRole('link', { name: 'Playwright by Testers Talk'}).click();
await expect(page).toHaveTitle(/Testers Talk/i);
});