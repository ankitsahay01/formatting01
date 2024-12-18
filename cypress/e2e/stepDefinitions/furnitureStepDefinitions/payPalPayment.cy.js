import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import PayWithPayPal from '../../pageObjects/furniturePageObjects/payPalPayment';
const paypal = new PayWithPayPal();

Given(`I am on the home page`, () => {
    cy.visit('/');
});

And(`I click on the Furniture menu`, () => {
    paypal.clickOnFurnitureMenu();
});

When(`I select Beds from the submenu`, () => {
    paypal.clickOnBedsSubMenu();
});

When(`I choose Upholstered Beds`, () => {
    paypal.clickOnUpholstered_Beds()
});

Then(`I should see a list of upholstered beds`, () => {

});

When(`I select Avery Gray Queen Upholstered Bed`, () => {
    // [When] Describes the action or event that triggers the scenario.
});

When(`I click on the Add to Cart button`, () => {
    paypal.clickOnAddToCart();
});

Then(`the item should be added to my cart`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`I should see a confirmation message`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

When(`I click on checkout button`, () => {
    capaypalrt.clickOnCheckOut();
});

Then(`I shoud see Secure Checkout page`, () => {

});

When(`I click on continue as guest button`, () => {
    paypal.clickOnContinueAsGuestBtn();
});

Then('User should be able to see the following labels in the contact info section of the Secure Checkout page', (dataTable) => {

    const cinfo = dataTable.rawTable.map(row => row[0]);

    cinfo.forEach((element, index) => {
        paypal.getContactInfoLabels().eq(index).should('have.text', element);
    });
});

And('Enter the required contact info:', (dataTable) => {

    dataTable.hashes().forEach(({ Field, Value }) => {
        //const name=fieldMapping[Field];

        let inputId = `#${Field}`;
        console.log(inputId)
        cy.get(inputId).clear().type(Value);

    });
});

And('Enter the required billing info:', (dataTable) => {

    dataTable.hashes().forEach(({ Field, Value }) => {
        //const name=fieldMapping[Field];

        let inputId = `#${Field}`;
        console.log(inputId)
        cy.get(inputId).clear({ force: true }).type(Value);

    });
});
And('User should be able to see the following labels in the billing/ delivery Address section of the Secure Checkout page', (dataTable) => {

    const billing_detail = dataTable.rawTable.map(row => row[0]);

    billing_detail.forEach((element, index) => {
        paypal.getDeliveryAddressLabels().eq(index).should('have.text', element);
    });
});

And(`I click on yes button model`, () => {
    paypal.clickOnYesBtn();
});
And(`I click on cancel button model`, () => {
    paypal.clickModelCloseBtn({ multiple: true });
});


And(`I select payment method as paypal`, () => {
    paypal.checkOnPayPalOption();
});


Then(`I should see pay with paypal button`, () => {
    // cart.getprocessOrderBtnLocator().should('be.visible')
});

Then(`I click on pay with paypal button`, () => {
    paypal.clikOnPayWithPayPalBtn()
});


Then(`I should see Log in to your PayPal Account`, () => {

});

