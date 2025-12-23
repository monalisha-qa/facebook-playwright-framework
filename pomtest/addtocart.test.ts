import {expect, test } from '@playwright/test';
import Register from '../POM/Register';
import Login from '../POM/Login';
import Forgottenpassword from '../POM/Forgottenpassword';
import Home from '../POM/Home';
import Special_hot from '../POM/Special_hot';
 
const mail = "monalisha123@gmail.com";
const password = '123456789';

test ('Registration test_01',async({page,baseURL}) =>{
const reg = new Register(page);
await page.goto(`${baseURL}route=account/register`);
await reg.firstName('mona');
await reg.lastName('lisha');
await reg.email(mail);
await reg.phoneNumber('9876543217');
await reg.password(password);
await reg.confirmpassword(password);
expect (reg.isCheck());
(await reg.tikTerms()).isChecked();
await reg.continueBox();
})

test('login test_02',async({page,baseURL}) =>{
const log = new Login(page);
await page.goto(`${baseURL}route=account/login`);
 await log.enterEmail(mail);
await log.password(password); 
await log.clicklogin();
// Verify Title
await expect(page).toHaveTitle("My Account");
// Verify account heading
await expect(page.locator('//h2[contains(text(),"My Account")]')).toBeVisible();
})


// test('forgotten password',async({page,baseURL})=>{
//     const forgot = new Login(page);
//     await page.goto(`${baseURL}route=account/login`);
//     await forgot.clickforgottenpassword();

//     const forgot2 = new Forgottenpassword(page);
//     await forgot2.enterEmail(mail);
//     await forgot2.clickcontinue();
// })

test('add to cart test_03',async({page,baseURL}) =>{
    const log = new Login(page);
    await page.goto(`${baseURL}route=account/login`);
    await log.login(mail,password);

    const home = new Home(page);
   await home.clickOnSpectialHot();

   const special = new Special_hot(page);
   await special.clickOnDesktop();
   await special.mouseHover();
   const viewcart = await special.tostVisiable();
   expect(viewcart).toBeVisible();

})




