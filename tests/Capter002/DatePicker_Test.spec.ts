import { test , expect } from "playwright/test";
test('Data picker', async({page})=>{
    //iframe
    
await page.goto('https://jqueryui.com/datepicker/',{waitUntil:'networkidle'});

const frame = page.frameLocator('[class="demo-frame"]');
await frame.locator('[id="datepicker"]').click();
await frame.locator('//a[contains(text(),16)]').click();

//selcting the past date
await frame.locator('//span[contains(text(),"Prev")]').click();
await frame.locator('//a[contains(text(),11)]').click();

//selcting the future date
await frame.locator('[id="datepicker"]').click();
await frame.locator('//span[contains(text(),"Next")]').click();
await frame.locator('//span[contains(text(),"Next")]').click();
await frame.locator('//a[contains(text(),23)]').click();
});