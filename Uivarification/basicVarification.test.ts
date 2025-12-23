import {test,expect} from '@playwright/test'
import { error } from 'console';

test('ui varification',async({page})=>
{
//     await page.goto('https://letcode.in/edit');

// //isDisable
//     expect(await page.isDisabled('#noEdit')).toBeTruthy();

    // const check =  await page.locator("//input[@id='noEdit']").isDisabled();
    // await expect(check).toBe(true);

// //isEditable
//     const edit = await page.isEditable('#dontwrite');
//     console.log("is editable ?"+edit);

// //isHidden
    
// //isVisiable
// const ab =await page.$('#noEdit');
// console.log( await ab?.isVisible());

//isRadio button
await page.goto('https://letcode.in/radio');
const radio = await page.locator("(//input[@type='checkbox'])[1]");
if(radio){
expect(await radio.isChecked()).toBe(true);
await radio.uncheck();
}
else throw new Error("Element not found");
})