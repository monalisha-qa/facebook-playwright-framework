import {test,expect} from '@playwright/test'

test('keyboad work',async ({page}) =>{
await page.goto('https://www.google.com/');

//Press Tab , Enter
await page.getByLabel('Search',{exact : true}).click();
await page.keyboard.press('Tab');
await page.keyboard.press('Enter');

})