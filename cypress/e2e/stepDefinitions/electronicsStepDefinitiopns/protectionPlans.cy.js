import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import ProtectionPlan from '../../pageObjects/electronicsPageObject/protectionPlansObject';

const protectionPlan = new ProtectionPlan();

And(`I click on the Electronics menu`, () => {
    protectionPlan.iClickOnElectronicsMenu();
    console.log(Cypress.config('baseUrl'))
});

And(`I select 4K TVs from the submenu`, () => {
    protectionPlan.iClickOn4KtvSubMenu();
});

And(`I click on the Add to Cart button of a 4K TV`, () => {
    protectionPlan.iClickOnAddToCartAtv()
});
Then('I should see {string} message', (expected_text) => {

    protectionPlan.igetProtectYourPuchaseText().should('have.text', expected_text)
});


When(`I select 3-Year TV Protection Plan`, () => {
    protectionPlan.iClikOnAdd3YearProtectionPlanBtn()
});

When(`I select 5-Year TV Protection Plan`, () => {
    protectionPlan.iClikOnAdd5YearProtectionPlanBtn()
});
Then('I should see a {string} message', (expected_text) => {

    protectionPlan.igetProtectionPlanAppliedText().should('have.text', expected_text)
});
