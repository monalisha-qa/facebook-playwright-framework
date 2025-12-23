import {test , expect} from '@playwright/test'


test ('use Annotation1',async({page})=>{
    await page.goto('https://www.google.com/')
} );
