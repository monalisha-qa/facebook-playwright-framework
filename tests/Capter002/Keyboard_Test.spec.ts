import {test ,  expect} from '@playwright/test'
test('keyboard action',async({page})=>{
    await page.goto('https://www.youtube.com/',{waitUntil:'networkidle'});

    //Enter action from keyboard action
    await page.locator('[name="search_query"]').click();
    await page.locator('[name="search_query"]').fill('Tester Talk');
    await page.locator('[name="search_query"]').press('Enter');

//Delete and Select all text from the search bar
await page.locator('[name="search_query"]').click();
await page.keyboard.press('Control+A');
await page.keyboard.press('Delete');


})