import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import PayWithPayPal from '../../pageObjects/furniturePageObjects/creditCardPayment';
const cart = new PayWithPayPal();

Given(`I am on the home page`, () => {
    cy.visit('/');
});

And(`I click on the Furniture menu`, () => {
    cart.clickOnFurnitureMenu();
});

When(`I select Beds from the submenu`, () => {
    cart.clickOnBedsSubMenu();
});

When(`I choose Upholstered Beds`, () => {
    cart.clickOnUpholstered_Beds()
});

Then(`I should see a list of upholstered beds`, () => {

});

When(`I select Avery Gray Queen Upholstered Bed`, () => {
    // [When] Describes the action or event that triggers the scenario.
});

When(`I click on the Add to Cart button`, () => {
    cart.clickOnAddToCart();
});

Then(`the item should be added to my cart`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`I should see a confirmation message`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

When(`I click on checkout button`, () => {
    cart.clickOnCheckOut();
});

Then(`I shoud see Secure Checkout page`, () => {

});

When(`I click on continue as guest button`, () => {
    cart.clickOnContinueAsGuestBtn();
});

Then('User should be able to see the following labels in the contact info section of the Secure Checkout page', (dataTable) => {

    const cinfo = dataTable.rawTable.map(row => row[0]);

    cinfo.forEach((element, index) => {
        cart.getContactInfoLabels().eq(index).should('have.text', element);
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
        cart.getDeliveryAddressLabels().eq(index).should('have.text', element);
    });
});

And(`I click on yes button model`, () => {
    cart.clickOnYesBtn();
});
And(`I click on cancel button model`, () => {
    cart.clickModelCloseBtn({ multiple: true });
});


And(`I select payment method as credit card`, () => {
    cart.checkCreditCardOption();
});

And('I enter the required card detail:', (dataTable) => {

    dataTable.hashes().forEach(({ Field, Value }) => {

        let inputId = `#${Field}`;

        if (Field === 'ccnumfield') {

            cy.iframe('#tokenframe').within(() => {
                // Perform actions inside the iframe
                cy.get(inputId).clear().type(Value);
            });


        }
        else {
            cy.get(inputId).clear().type(Value);
        }


    });
});

And(`I click on process order button`, () => {
    cy.wait(5000)
    cart.clikOnProcessOrderBtn();
});

Then(`I should see process order button`, () => {
    cart.getprocessOrderBtnLocator().should('be.visible')
});
Then(`I should see {string} message`, (orderConfirmationMessage) => {
    cart.getOrderConfirmationMessage().should('have.text', orderConfirmationMessage)
});

