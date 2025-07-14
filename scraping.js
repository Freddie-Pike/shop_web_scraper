const playwright = require('playwright');
const { chromium } = require('playwright');
const { test, expect } = require('@playwright/test');

(async () => {

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.popmart.com/ca/pop-now/set/267');

  await expect(page.getByText('ACCEPT')).toHaveText("ACCEPT")
  const acceptButton = page.getByText('ACCEPT');
  // This triggers exception as "ACCEPT" is not defined on page yet.
  acceptButton.press()

  shakeButton = page.getByText('Pick One to Shake');
  shakeButton.press()
  await browser.close();

})();