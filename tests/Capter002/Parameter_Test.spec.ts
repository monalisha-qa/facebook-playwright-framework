import {test,expect} from '@playwright/test'

const searchElements = ['Playwright By Testers TaLK', 'API by Testers Talk'];

for(const searchElement of searchElements){
test(`parameterized test in playwright ${searchElement}` , async({page}) =>{
    await page.goto('https://www.youtube.com/');

    await page.getByPlaceholder('Search',{exact : true}).fill(searchElement)
    await page.getByPlaceholder('Search',{exact : true}).press('Enter');
})

}