import { test, expect, type Page } from '@playwright/test';
import { assert } from 'console';
import { OrgAccountPage } from '../pages/OrgAccount.page';
import { da, faker } from '@faker-js/faker';

test.describe('Register Organization', ()=> {
    // test('Check', async ({ page })=> {
    //     await page.goto('/#/register');

    //     await page.locator('form.register_form input[name="companyName"]').click()
    //     await page.locator('form.register_form input[name="companyName"]').fill('My Awesome Organization Name')
    //     await page.locator('form.register_form input[name="addressline1"]').fill('My Awesome Mailing Address')

    //     await page.locator('form.register_form input[name="countryAutocomplete"]').fill('Kyrgyzstan')
    //     await page.locator('form input[name="state"]').fill('Chuy')

    //     await page.locator('form.register_form input[name="countryAutocomplete"]').click()

    //     await page.locator('form input[name="code"]').fill('720000')
    //     await page.locator('form input[name="firstname"]').fill('Bellatrix')
    //     await page.locator('form input[name="lastname"]').fill('Black')
    //     await page.locator('form input[name="phone"]').fill('996888111222')
    //     await page.locator('form input[name="website"]').fill('https://playwright.dev')
    //     await page.locator('form input[name="email"]').fill('bellatrix.black@tester.com')
    //     await page.locator('form input[name="confirmEmail"]').fill('bellatrix.black@tester.com')
    //     await page.locator('form input[name="password"]').fill('12qw!@QW')
    //     await page.locator('form input[name="confirmPassword"]').fill('12qw!@QW')

    //     await page.waitForTimeout(10000);

    //     await assert(true);
    // })

    test('Check Page Object', async ({ page })=> {
        const orgPage = new OrgAccountPage(page)
        await page.goto('/#/register');
        /* 1 version
        await orgPage.companyName.click()
        await orgPage.companyName.fill('My Awesome Organization Name')
        */ 

        /* 2 Version 
        await orgPage.setCompanyName("My Awesome Organization Name")
        */

        /* 3 Version: hard coded test data
        
        await orgPage.fillForm("My Awesome Organization Name", "My Awesome Mailing Address",
            "Kyrgyzstan", "Chuy", "720000", "Bellatrix", "Black", "996888555111",
            "https://playwright.dev", "bellatrix.black@tester.com", "12qw!@QW"
        );
        */

        /* 3 Version: using faker test data
        */

        const data = {
           company: faker.person.fullName(),
           address: faker.lorem.sentence(5),
           firstname: faker.person.firstName(),
           lastname: faker.person.lastName()
        }

        await orgPage.fillForm(data.company, data.address,
            "Kyrgyzstan", "Chuy", "720000", data.firstname, data.lastname, "996888555111",
            "https://playwright.dev", "bellatrix.black@tester.com", "12qw!@QW"
        );
        
        await orgPage.submitForm()
        await page.waitForTimeout(10000);

        await assert(true);
    })
})