const playwright = require('playwright');
const { chromium } = require('playwright');

(async () => {

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://amazon.com');
  await page.screenshot({ path: `test_pic.png`, fullPage: true });
  await page.waitForTimeout(1000);
  await browser.close();

})();