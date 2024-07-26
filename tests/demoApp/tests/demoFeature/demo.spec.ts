import { test, expect } from '@playwright/test';
import { addScreenshotToHtmlReport } from '../../../../commonUtils/screenshotUtil';

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.BASE_URL as string);
});

test.describe('Demo Feature', () => {
  test('demo has title', async ({ page }, testInfo) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
    await addScreenshotToHtmlReport(testInfo, page);
  });

  test('demo get started link', async ({ page }, testInfo) => {
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    await addScreenshotToHtmlReport(testInfo, page);
  });
});
