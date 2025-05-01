import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class FormsPage extends BasePage {
    readonly form: Locator;
    readonly practiceFormMenuItem: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly genderRadio: Locator;
    readonly mobileInput: Locator;
    readonly dateOfBirthInput: Locator;
    readonly subjectsInput: Locator;
    readonly hobbiesCheckbox: Locator;
    readonly pictureUpload: Locator;
    readonly currentAddressInput: Locator;
    readonly stateDropdown: Locator;
    readonly cityDropdown: Locator;
    readonly submitButton: Locator;
    readonly modalTitle: Locator;

    constructor(page: Page) {
        super(page);
        this.form = page.locator('#userForm');
        this.practiceFormMenuItem = page.locator('li#item-0 span:text("Practice Form")');
        this.firstNameInput = page.locator('#firstName');
        this.lastNameInput = page.locator('#lastName');
        this.emailInput = page.locator('#userEmail');
        this.genderRadio = page.locator('label[for="gender-radio-1"]');
        this.mobileInput = page.locator('#userNumber');
        this.dateOfBirthInput = page.locator('#dateOfBirthInput');
        this.subjectsInput = page.locator('#subjectsInput');
        this.hobbiesCheckbox = page.locator('label[for="hobbies-checkbox-1"]');
        this.pictureUpload = page.locator('#uploadPicture');
        this.currentAddressInput = page.locator('#currentAddress');
        this.stateDropdown = page.locator('//div[contains(text(),"Select State")]');
        this.cityDropdown = page.locator('//div[contains(text(),"Select City")]');
        this.submitButton = page.locator('#submit');
        this.modalTitle = page.locator('#example-modal-sizes-title-lg');
    }
}