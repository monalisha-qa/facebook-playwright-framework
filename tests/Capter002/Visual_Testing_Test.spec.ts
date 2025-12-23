import {test , expect} from '@playwright/test'

//Testing page Screenshot
test('visual_Testing',async({page}) =>{
    await page.goto('https://www.facebook.com/r.php?entry_point=login');
    await expect(page).toHaveScreenshot('SignupPage.png');
    
    const firstNameInput = page.locator('//input[@name="firstname"]')
   await  firstNameInput.fill('Mona');
    await expect(page).toHaveScreenshot('SignupPage.png');
})