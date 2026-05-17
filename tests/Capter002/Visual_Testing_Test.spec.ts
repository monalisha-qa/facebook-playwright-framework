import { test, expect } from '@playwright/test';

test('visual_Testing', async ({ page }) => {
  await page.goto('https://www.facebook.com/r.php?entry_point=login');

  // verify the sign-up form loaded
  await expect(page.locator("//span[contains(text(),'Get started on Facebook')]")).toBeVisible();

  const firstNameInput = page.locator("//input[@id='_R_1cl2p4jikacppb6amH1_']")
  await firstNameInput.fill('Mona');
});