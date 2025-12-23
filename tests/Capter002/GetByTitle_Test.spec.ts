import {test , expect} from '@playwright/test'
test('use title' ,async({page}) =>{

await page.goto('https://www.google.com/');
await page.getByTitle('Search').fill('Forest');

});
