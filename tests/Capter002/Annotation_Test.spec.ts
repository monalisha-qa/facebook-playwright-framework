import {test , expect  } from '@playwright/test'

test ('use Annotation1',async({page})=>{
    await page.goto('https://www.google.com/')
} )

test.skip ('use Annotation2',async({page})=>{
   await page.goto('https://www.myntra.com/') 
} )

test.only('Tests3' ,async({page})=>{
await page.goto('https://www.flipkart.com/')
});
