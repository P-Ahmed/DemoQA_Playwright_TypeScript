import { Page, Response } from '@playwright/test';

export class Helper {
    static async waitForResponse(page: Page, url: string) {
        return page.waitForResponse((response: Response) => response.url().includes(url));
    }

    static async delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}