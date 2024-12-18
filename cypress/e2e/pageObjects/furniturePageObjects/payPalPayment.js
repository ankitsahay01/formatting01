const furnitureMenu = '#megaMenuLinks > :nth-child(2) > .btn'
const beds_sub_menu = '[href="//www.rcwtest.rcwilley.com/Furniture/Beds/Search"]'
const Upholstered_Beds = '#shop-room > .tile-container > :nth-child(1) > .card > .card-body > .fs-6'
const AddToCart_Upholstered_Beds = ':nth-child(1) > .card > .card-footer > .w-100'
const addToCart = '#ProductCardsContainer .col:nth-of-type(3) button'
const CheckOut = '#checkout'
const ContinueAsGuestBtn = '#continueAsGuestButton'
const processOrderBtn = '#finalSubmitButton2'

/*Contact Info*/
const contactInfoLabels = 'div.d-flex label.form-label'
const firstName = '#firstName'
const lastName = '#lastName'
const phone = '#contactPhone'
const email = '#contactEmail'

/*BILLING / DELIVERY ADDRESS*/
const deliveryAddressLabels = '#billingAddress .form-label'
const streetAddress = '#billingAddress1'
const streetAddress2 = '#billingAddress2'
const city = '#billingCity'
const state = '#State'
const zip = '#billingZip'
const yesBtn = '#btnYes'
const modelCloseBtn = '#Modal1  button.btn-close'
/*PAYMENT METHOD*/

const creditCardRadioBtn = '#CARD0'
const payPalRadioBtn = '#PAPY0'
const PayWithPayPalIframe = '.zoid-component-frame.zoid-visible'
const PayWithPayPalBtn = '#paypal-animation-content'

/*CARD DETAIL */

const cardNumber = '#ccnumfield'
const cardExpiration = '#expDate'
const cardCvv = '#cvv'

/*confirmation */

const orderConfirmationMessage = '#LandingPage .container h1'

class PayWithPayPal {
    clickOnFurnitureMenu() {
        cy.get(furnitureMenu).click();
    }
    clickOnBedsSubMenu() {
        cy.wait(200);
        cy.get(beds_sub_menu).click();
    }

    clickOnUpholstered_Beds() {
        cy.scroll(Upholstered_Beds);
        cy.get(Upholstered_Beds).click();
    }

    clickOnAddToCart() {
        cy.wait(200);
        //cy.scroll(AddToCart_Upholstered_Beds)
        //cy.get(AddToCart_Upholstered_Beds).click();
        cy.scroll(addToCart)
        cy.get(addToCart).click()
    }
    clickOnCheckOut() {
        cy.wait(2000)
        cy.get(CheckOut).click();
    }
    clickOnContinueAsGuestBtn() {
        cy.wait(200);

        cy.get(ContinueAsGuestBtn).click()
    }

    getprocessOrderBtnLocator() {
        cy.scroll(processOrderBtn)
        return cy.get(processOrderBtn)
    }
    getContactInfoLabels() {
        return cy.get(contactInfoLabels)
    }
    getDeliveryAddressLabels() {
        return cy.get(deliveryAddressLabels)
    }
    clickOnYesBtn() {
        cy.get(yesBtn).click()
    }
    clickModelCloseBtn() {
        cy.wait(1000)
        cy.get(modelCloseBtn).click()
    }

    checkOnPayPalOption() {
        cy.get(payPalRadioBtn).check();
        cy.wait(2000)
    }
    clikOnPayWithPayPalBtn() {


        cy.iframe(PayWithPayPalIframe).within(() => {
            // Perform actions inside the iframe
            cy.get(PayWithPayPalBtn).click()
        });
    }


}

export default PayWithPayPal