import { test, expect } from '@playwright/test';

test('test description', async ({ page }) => {
  // Recording...

  await test.step('Navigate to Myntra',async () =>{
 await page.goto('https://www.myntra.com/');

  });
  
 await test.step('move cursor', async() =>{
const womenLink = page.locator('xpath=(//a[@href="/shop/women"])[1]');
  await womenLink.hover();

  await page.locator('text=Kurtas & Suits').first().click();
 });
  

 // await page.locator('[id="29525192"] span').filter({ hasText: 'wishlist' }).locator('span').click();
  //await page.goto('https://www.myntra.com/women-kurtas-kurtis-suits');
 // const page1Promise = page.waitForEvent('popup');
  //await page.getByRole('link', { name: 'Indo Era Indo Era Sizes: L Rs. 1899Rs. 8999(Rs. 7100 OFF)', exact: true }).click();
  await test.step('choose one kurti',async () => {
 const womenLink2 = page.locator('xpath=//a[contains(@href,"dupatta/35258270/buy") and .//h4[text()="Floral Printed Kurta Set"]]');
  await womenLink2.click();
  //await page.pause(); 
  });
 
await test.step('login with incorrect number and validate it',async() =>
{
const profile = page.locator('xpath=//div[@class="desktop-user"]');
await profile.hover();
});

await test.step('click on signup/login',async() =>
{
const signup = page.locator('xpath=//a[contains(text(),"login / Signup")]');
await signup.click();
});

await test.step('enter numer',async()=>{
const number = page.locator('xpath=//input[@type="tel"]');
await number.click();
await number.fill('oooooooooo');

});


await test.step('validate the error message',async() =>{
const check = page.locator('xpath=(//input[@type="checkbox"])');
await check.click();
const continous = page.locator('//div[contains(text(),"CONTINUE")]');
await continous.click();

const errorDiv = page.getByText('Please enter a valid mobile number (10 digits)', { exact: false });
await expect(errorDiv).toBeVisible();

});

});
