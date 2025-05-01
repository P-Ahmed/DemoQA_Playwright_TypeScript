import { test, expect } from '@playwright/test';
import { ElementsPage } from '../pages/elementsPage';

test.describe('Elements Tests', () => {
    let elementsPage: ElementsPage;

    test.beforeEach(async ({ page }) => {
        elementsPage = new ElementsPage(page);
        await elementsPage.navigateTo('elements');
    });

    test('TC01: Text Box - Submit form with valid data', async () => {
        await elementsPage.textBoxMenuItem.click();
        
        const testData = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            currentAddress: '123 Main St, Apt 4B',
            permanentAddress: '456 Oak Ave, Suite 200'
        };

        await elementsPage.fullNameInput.fill(testData.name);
        await elementsPage.emailInput.fill(testData.email);
        await elementsPage.currentAddressInput.fill(testData.currentAddress);
        await elementsPage.permanentAddressInput.fill(testData.permanentAddress);
        await elementsPage.submitButton.click();

        const outputText = await elementsPage.outputDiv.textContent();
        expect(outputText).toContain(testData.name);
        expect(outputText).toContain(testData.email);
        expect(outputText).toContain(testData.currentAddress);
        expect(outputText).toContain(testData.permanentAddress);
    });

    test('TC02: Text Box - Validate email field with invalid input', async () => {
        await elementsPage.textBoxMenuItem.click();
        
        await elementsPage.emailInput.fill('invalid-email');
        await elementsPage.submitButton.click();
        
        const emailInput = elementsPage.emailInput;
        await expect(emailInput).toHaveClass(/field-error/);
    });

    test('TC03: Check Box - Select multiple items', async () => {
        await elementsPage.checkboxMenuItem.click();
        
        await elementsPage.homeToggle.click();
        await elementsPage.desktopToggle.click();
        await elementsPage.notesCheckbox.check();
        await elementsPage.commandsCheckbox.check();
        
        const resultText = await elementsPage.resultText.textContent();
        expect(resultText).toContain('notes');
        expect(resultText).toContain('commands');
    });
});