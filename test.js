const playwright = require('playwright-chromium');

(async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://whatsmyuseragent.org/');
  await page.screenshot({ path: `example.png` });
  await browser.close();
})();