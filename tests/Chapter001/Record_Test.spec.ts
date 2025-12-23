import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('');
  await page.getByRole('textbox', { name: 'Username or email address' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('H');
  await page.getByRole('textbox', { name: 'Username or email address' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('Hie123');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('12346788!');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('12346788!A');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByText('This account does not support').click();
  await page.getByText('This account does not support').click({
    button: 'right'
  });
  await page.getByText('This account does not support').click();
  await page.getByText('This account does not support').click();
  await page.getByText('This account does not support').click();
  await expect(page.getByRole('alert')).toContainText('This account does not support password sign-in, please try another sign-in method or account recovery.');
});