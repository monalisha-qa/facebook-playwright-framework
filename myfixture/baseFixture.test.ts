import { log } from 'console';
import test ,{ expect } from './basepage';

const mail = "monalisha123@gmail.com";
const password = '123456789';

test.beforeEach(async({page})=>{
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
})
 test('test 1',async({registerPage,loginPage,homepage,specialhot,page})=>{  //and add in it ,baseURL
   // await page.goto(`${baseURL}route=account/register`);
await registerPage.firstName("mona");
await registerPage.lastName('sahoo');
await registerPage.phoneNumber('9876543217');
await registerPage.email(mail);
await registerPage.password(password);
await registerPage.confirmpassword(password);
(await (registerPage.isCheck()));
(await registerPage.tikTerms()).isChecked();
await registerPage.continueBox();

await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
await loginPage.enterEmail(mail);
await loginPage.password(password);
await loginPage.clicklogin();

await expect(page).toHaveTitle("My Account");
await homepage.clickOnSpectialHot();
await specialhot.clickOnDesktop();
await specialhot.mouseHover();
await specialhot.tostVisiable()


})



