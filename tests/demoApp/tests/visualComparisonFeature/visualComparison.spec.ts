import { test, expect } from '@playwright/test';
import { addScreenshotToHtmlReport } from '../../../../commonUtils/screenshotUtil';

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.BASE_URL as string);
});

test.describe('Visual Comparsion Feature', () => {
  test('demo has title', async ({ page }, testInfo) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
    await expect(page).toHaveScreenshot('landing.png');
    await addScreenshotToHtmlReport(testInfo, page);
  });
});
