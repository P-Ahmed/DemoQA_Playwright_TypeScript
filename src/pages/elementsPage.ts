import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class ElementsPage extends BasePage {
    readonly textBoxMenuItem: Locator;
    readonly fullNameInput: Locator;
    readonly emailInput: Locator;
    readonly currentAddressInput: Locator;
    readonly permanentAddressInput: Locator;
    readonly submitButton: Locator;
    readonly outputDiv: Locator;
    readonly checkboxMenuItem: Locator;
    readonly homeToggle: Locator;
    readonly desktopToggle: Locator;
    readonly notesCheckbox: Locator;
    readonly commandsCheckbox: Locator;
    readonly resultText: Locator;

    constructor(page: Page) {
        super(page);
        this.textBoxMenuItem = page.locator('li#item-0 span:text("Text Box")');
        this.fullNameInput = page.locator('#userName');
        this.emailInput = page.locator('#userEmail');
        this.currentAddressInput = page.locator('#currentAddress');
        this.permanentAddressInput = page.locator('#permanentAddress');
        this.submitButton = page.locator('#submit');
        this.outputDiv = page.locator('#output');
        this.checkboxMenuItem = page.locator('li#item-1 span:text("Check Box")');
        this.homeToggle = page.locator('button[aria-label="Toggle"]');
        this.desktopToggle = page.locator('button[aria-label="Toggle"]').nth(1);
        this.notesCheckbox = page.locator('label[for="tree-node-notes"]');
        this.commandsCheckbox = page.locator('label[for="tree-node-commands"]');
        this.resultText = page.locator('#result');
    }
}