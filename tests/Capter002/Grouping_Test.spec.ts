import {test , expect} from '@playwright/test'

test.describe('SmokeTesting',()=>{
test ('use Annotation1',async({page})=>{
    await page.goto('https://www.google.com/')
} )

test ('use Annotation2',async({page})=>{
   await page.goto('https://www.myntra.com/') 
} )
});

test.describe('RegressionTesting',()=>
{
test('Tests3' ,async({page})=>{
await page.goto('https://www.flipkart.com/')
})
});