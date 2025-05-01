import { test, expect } from '@playwright/test';
import { FormsPage } from '../pages/formsPage.'
import { Helper } from '../utils/helper';

test.describe('Forms Tests', () => {
    let formsPage: FormsPage;

    test.beforeEach(async ({ page }) => {
        formsPage = new FormsPage(page);
        await formsPage.navigateTo('forms');
    });

    test('TC04: Practice Form - Submit with required fields only', async () => {
        await formsPage.practiceFormMenuItem.click();
        
        const testData = {
            firstName: 'Jane',
            lastName: 'Smith',
            gender: 'Male',
            mobile: '1234567890'
        };

        await formsPage.firstNameInput.fill(testData.firstName);
        await formsPage.lastNameInput.fill(testData.lastName);
        await formsPage.genderRadio.click();
        await formsPage.mobileInput.fill(testData.mobile);
        await formsPage.submitButton.click();
        
        await expect(formsPage.modalTitle).toBeVisible();
        const modalText = await formsPage.modalTitle.textContent();
        expect(modalText).toContain('Thanks for submitting the form');
    });

    test('TC05: Practice Form - Submit with all fields', async () => {
        await formsPage.practiceFormMenuItem.click();
        
        const testData = {
            firstName: 'Alice',
            lastName: 'Johnson',
            email: 'alice.johnson@example.com',
            gender: 'Male',
            mobile: '9876543210',
            dateOfBirth: '15 May 1990',
            subject: 'Computer Science',
            hobby: 'Sports',
            address: '789 Pine Rd, Building C',
            state: 'NCR',
            city: 'Delhi'
        };

        await formsPage.firstNameInput.fill(testData.firstName);
        await formsPage.lastNameInput.fill(testData.lastName);
        await formsPage.emailInput.fill(testData.email);
        await formsPage.genderRadio.click();
        await formsPage.mobileInput.fill(testData.mobile);
        
        // Set date of birth
        await formsPage.dateOfBirthInput.click();
        await formsPage.dateOfBirthInput.fill(testData.dateOfBirth);
        await formsPage.page.waitForTimeout(2000);
        await formsPage.page.keyboard.press('Enter');
        
        // // Set subject
        await formsPage.subjectsInput.fill(testData.subject);
        await formsPage.page.waitForTimeout(2000);
        await formsPage.page.keyboard.press('Enter');
        
        // // Set hobby
        await formsPage.hobbiesCheckbox.click();
        
        // Upload file
        await formsPage.pictureUpload.setInputFiles('src/tests/fixtures/sample.jpg');
        
        // Set address
        await formsPage.currentAddressInput.fill(testData.address);
        
        await formsPage.submitButton.click();
        
        await expect(formsPage.modalTitle).toBeVisible();
        const modalText = await formsPage.modalTitle.textContent();
        expect(modalText).toContain('Thanks for submitting the form');
    });

    test('TC06: Practice Form - Validate required fields', async () => {
        await formsPage.practiceFormMenuItem.click();
        
        await formsPage.submitButton.click();
        await expect(formsPage.form).toHaveClass(/was-validated/);
    });
});