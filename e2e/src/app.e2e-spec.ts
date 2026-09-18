import { expect, test } from '@playwright/test';

test('displays the welcome message without browser errors', async ({ page }) => {
  const browserErrors: string[] = [];

  page.on('console', message => {
    if (message.type() === 'error') {
      browserErrors.push(message.text());
    }
  });
  page.on('pageerror', error => browserErrors.push(error.message));

  await page.goto('/');
  await expect(
    page.getByText('pwa-example app is running!', { exact: true })
  ).toBeVisible();
  expect(browserErrors).toEqual([]);
});
