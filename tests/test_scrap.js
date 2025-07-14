import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.popmart.com/ca/pop-now/set/267');
  await expect(page.getByText('ACCEPT')).toHaveText("ACCEPT")
  const acceptButton = page.getByText('ACCEPT');
  acceptButton.press()

  shakeButton = page.getByText('Pick One to Shake');
  shakeButton.press();
});