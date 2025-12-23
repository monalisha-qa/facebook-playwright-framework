import {test , expect} from '@playwright/test'
test('radio button' , async({page}) => {
    await page.goto('https://jqueryui.com/checkboxradio/');

    const frame = await page.frameLocator('iframe');
     //await expect(frame.locator('//label[@for="radio-1"]')).not.toBeChecked();
    await frame.locator('//label[@for="radio-1"]').check();
    await expect(frame.locator('//label[@for="radio-1"]')).toBeChecked();
    
});