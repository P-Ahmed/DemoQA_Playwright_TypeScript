import { test, expect } from '@playwright/test';
import { WidgetsPage } from '../pages/widgetsPage';
import { Helper } from '../utils/helper';

test.describe('Widgets Tests', () => {
    let widgetsPage: WidgetsPage;

    test.beforeEach(async ({ page }) => {
        widgetsPage = new WidgetsPage(page);
        await widgetsPage.navigateTo('widgets');
    });

    test('TC07: Progress Bar - Complete progress', async () => {
        await widgetsPage.progressBarMenuItem.click();
        
        await widgetsPage.startStopButton.click();
        await expect(widgetsPage.progressBar).toHaveAttribute('aria-valuenow', '100', { timeout: 30000 });
        
        await expect(widgetsPage.resetButton).toContainText('Reset');
    });

    test('TC08: Progress Bar - Stop at specific percentage', async () => {
        await widgetsPage.progressBarMenuItem.click();
        
        await widgetsPage.startStopButton.click();
        
        // Wait until progress reaches ~50%
        await widgetsPage.page.waitForFunction(() => {
            const progressBar = document.querySelector('.progress-bar') as HTMLElement;
            const valueNow = parseInt(progressBar.getAttribute('aria-valuenow') || '0');
            return valueNow >= 45 && valueNow <= 55;
        });
        
        await widgetsPage.startStopButton.click();
        const valueNow = await widgetsPage.progressBar.getAttribute('aria-valuenow');
        expect(parseInt(valueNow || '0')).toBeGreaterThanOrEqual(45);
        expect(parseInt(valueNow || '0')).toBeLessThanOrEqual(55);
    });

    test('TC09: Tool Tips - Button tooltip', async () => {
        await widgetsPage.toolTipsMenuItem.click();
        
        await widgetsPage.toolTipButton.hover();
        await expect(widgetsPage.toolTip).toBeVisible();
        const tooltipText = await widgetsPage.toolTip.textContent();
        expect(tooltipText).toBe('You hovered over the Button');
    });

    test('TC10: Tool Tips - Text field tooltip', async () => {
        await widgetsPage.toolTipsMenuItem.click();
        
        await widgetsPage.toolTipTextField.hover();
        await expect(widgetsPage.toolTip).toBeVisible();
        const tooltipText = await widgetsPage.toolTip.textContent();
        expect(tooltipText).toBe('You hovered over the text field');
    });
});