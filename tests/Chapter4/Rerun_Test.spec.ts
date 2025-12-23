import { test, expect } from '@playwright/test';

test('YouTube search test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright by tester talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
});

test('Simple failing test', async ({ page }) => {
  expect(true).toBe(true);
});
