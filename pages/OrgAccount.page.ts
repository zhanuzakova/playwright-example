import { expect, type Locator, type Page } from '@playwright/test';

export class OrgAccountPage{
    readonly page: Page;
    companyName: Locator;
    addressLine: Locator;
    countryAutocomplete: Locator;
    state: Locator;
    addressIndexCode: Locator;
    firstname: Locator;
    lastname: Locator;
    phone: Locator;
    website: Locator;
    email: Locator;
    emailConfirm: Locator;
    password: Locator;
    passwordConfirm: Locator;

    policiesCheckbox: Locator;
    submitButton: Locator;

    constructor(page: Page) {
        this.companyName = page.locator('form.register_form input[name="companyName"]');
        this.addressLine = page.locator('form.register_form input[name="addressline1"]');
        this.countryAutocomplete = page.locator('form.register_form input[name="countryAutocomplete"]');
        this.state = page.locator('form input[name="state"]');
        this.addressIndexCode = page.locator('form input[name="code"]');
        this.firstname = page.locator('form input[name="firstname"]');
        this.lastname = page.locator('form input[name="lastname"]');
        this.phone = page.locator('form input[name="phone"]');
        this.website = page.locator('form input[name="website"]');
        this.email = page.locator('form input[name="email"]');
        this.emailConfirm = page.locator('form input[name="confirmEmail"]');
        this.password = page.locator('form input[name="password"]');
        this.passwordConfirm = page.locator('form input[name="confirmPassword"]');
        this.policiesCheckbox = page.locator('form md-checkbox');
        this.submitButton = page.locator('form button[type="submit"]');
    }

    async setCompanyName(companyName:string){
        await this.companyName.click()
        await this.companyName.fill(companyName)
    }

    async fillForm(companyName: string, addressLine:string, country: string,
        state:string, indexCode: string, firstname:string, lastname:string,
        phone: string, website:string, email:string, password:string
    ){
        await this.setCompanyName(companyName);
        await this.addressLine.fill(addressLine);
        await this.countryAutocomplete.fill(country);
        await this.state.fill(state);
        await this.countryAutocomplete.click();
        await this.addressIndexCode.fill(indexCode);
        await this.firstname.fill(firstname);
        await this.lastname.fill(lastname);
        await this.phone.fill(phone);
        await this.website.fill(website);
        await this.email.fill(email);
        await this.emailConfirm.fill(email);
        await this.password.fill(password);
        await this.passwordConfirm.fill(password);
    }

    async submitForm(){
        await this.policiesCheckbox.click();
        // await this.submitButton.click()
    }
}

/* 
const page = new OrgAccountPage()
console.log(page.state) = >"My first state"
page.state = "Second state"
console.log(page.state) =>  "Second state"
*/