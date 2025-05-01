import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class WidgetsPage extends BasePage {
    readonly progressBarMenuItem: Locator;
    readonly startStopButton: Locator;
    readonly resetButton: Locator;
    readonly progressBar: Locator;
    readonly toolTipsMenuItem: Locator;
    readonly toolTipButton: Locator;
    readonly toolTipTextField: Locator;
    readonly toolTip: Locator;

    constructor(page: Page) {
        super(page);
        this.progressBarMenuItem = page.locator('li#item-4 span:text("Progress Bar")');
        this.startStopButton = page.locator('#startStopButton');
        this.resetButton = page.locator('#resetButton');
        this.progressBar = page.locator('.progress-bar');
        this.toolTipsMenuItem = page.locator('li#item-6 span:text("Tool Tips")');
        this.toolTipButton = page.locator('#toolTipButton');
        this.toolTipTextField = page.locator('#toolTipTextField');
        this.toolTip = page.locator('.tooltip-inner');
    }
}