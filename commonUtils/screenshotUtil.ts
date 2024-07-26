import { Page, TestInfo } from "@playwright/test";

export async function addScreenshotToHtmlReport(testInfo: TestInfo, page: Page) {
    const addReport: string = process.env.ADD_SCREENSHOT_TO_HTML_REPORT || 'TRUE';
    if (JSON.parse(addReport.toLowerCase())) {
        await testInfo.attach('screenshot', { body: await page.screenshot({ fullPage: true }), contentType: 'image/png' });
    }
}