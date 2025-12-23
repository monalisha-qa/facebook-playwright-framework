import { test, expect } from '@playwright/test';
import LoginPage from './Login';
import ForgotPasswordPage from './Forgottenpassword';


test('Forgot password navigation test', async ({ page }) => {

    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');

    const login = new LoginPage(page);
await login.clickforgottenpassword();

    // Click on forgotten password
    

    // Now you are on the forgot password page
    const forgotPage = new ForgotPasswordPage(page);
    
    await forgotPage.enterEmail('test123@gmail.com');
    await forgotPage.clickcontinue();

    // Assertion example (optional)
    //await expect(page).toHaveURL(/forgotten/);
});
