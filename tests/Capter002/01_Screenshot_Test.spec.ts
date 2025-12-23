import {test, expect} from '@playwright/test'

//wright a test
test('screennshot',async({page})=>{
    //navigate to url
await page.goto('https://www.youtube.com/@testerstalk');

//element  screenshot
await page.locator("#page-header-container").screenshot({path:'./Screenshot/ElementScreenshot.png'});

//page screenshot
await page.screenshot({path:'./Screenshot/pageScreenshot.png'});

//fullpage screenshot
await page.screenshot({path:'./Screenshot/FullpageScreenshot.png',fullPage:true});
});