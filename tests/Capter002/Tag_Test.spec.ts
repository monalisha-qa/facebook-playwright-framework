import {test,expect} from '@playwright/test'
test ('Use Tag1' , {tag:['@SmokeTesting']} , async({page})=>{

await page.goto('https://www.google.com/')
})

test ('Use Tag2' , {tag:['@SmokeTesting','@RegressionTesting']} , async({page})=>{

await page.goto('https://www.flipkart.com/')
})

test ('Use Tag3' , {tag:['@RegressionTesting']} , async({page})=>{

await page.goto('https://www.urbancompany.com/bangalore')
})