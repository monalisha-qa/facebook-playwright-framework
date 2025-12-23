import {test ,  expect} from '@playwright/test'
test('use assertion', async({page})=>{
    await page.goto('https://www.youtube.com/');
    await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeVisible();
        await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEnabled();
            await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEditable();
    await expect(page.getByPlaceholder('Search',{exact:true}).first()).toBeEmpty();

//Varify URL , TITLE, TEXT,COUNT
await page.getByPlaceholder('Search',{exact:true}).click();
await page.getByPlaceholder('Search',{exact:true}).fill('testers talk');
await page.getByPlaceholder('Search',{exact:true}).press('Enter');
await expect(page).toHaveURL('https://www.youtube.com/results?search_query=testers+talk');
await expect.soft(page).toHaveTitle('testers talk - YouTube');
await expect(page.locator('//span[@id="title"]').first()).toHaveText('Latest from Testers Talk');


})