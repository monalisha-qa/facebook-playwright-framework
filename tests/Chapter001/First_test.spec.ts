//import the playwright modules
import {test,expect} from '@playwright/test'
import { text } from 'stream/consumers';

//wright a test
test('my first typescript code',async({page}) =>{

//go to URL
 await page.goto('https://www.youtube.com/@TestersTalk');
// await page.goto('https://www.google.com/');------avoid automated testing on Google.

 //search for a keyword
// await page.getByRole('combobox', { name: 'Search' }).fill('playwright by tester talk');
// await page.getByRole('combobox', { name: 'Search' }).press('Enter');
// await page.getByRole('link', { name: 'Playwright by Testers Talk'}).click();

//validate the page
//await expect(page).toHaveTitle(/Testers Talk/i);



//await expect(page.locator('#tabsContent').getByText('Videos')).toBeVisible();
//await expect(page.getByRole('link', { name: 'Playwright TypeScript #65' })).toBeVisible();
//await expect(page.getByRole('link', { name: 'Playwright TypeScript #63' })).toBeVisible();``



});

