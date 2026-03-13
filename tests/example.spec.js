import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://abhigyank.github.io/To-Do-List/');
  await page.getByRole('button', { name: 'add' }).click();
  await page.locator('#new-task').click();
  await page.locator('#new-task').fill('hi');
  await page.getByRole('button', { name: 'add' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
});