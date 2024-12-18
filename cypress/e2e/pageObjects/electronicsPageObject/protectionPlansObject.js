const electronicsMenu = 'button[href="/mega-Menu?menu=electronics"]'


const tvs_subMenuProd = '[href="//www.rcwilley.com/Electronics/TVs/4K/Search"]';
const tvs_subMenuTest = '[href="//rcwtest.rcwilley.com/Electronics/TVs/4K/Search"]';

const addToCartAtv = '#ProductCardsContainer > div:nth-of-type(1)  button';
const protectYourPuchaseText = '#planHeader'
const add3YearProtectionPlanBtn = '#plan-TVS3 > .addProtectionPlan'
const add5YearProtectionPlanBtn = '[data-name="5-Year TV Protection Plan"]'
const protectionPlanAppliedText = '#planHeader'
class ProtectionPlan {


    iClickOnElectronicsMenu() {
        cy.get(electronicsMenu).click()
    }
    iClickOn4KtvSubMenu() {
        if (Cypress.config('baseUrl').includes("rcwtest"))
            cy.get(tvs_subMenuTest).click();
        else
            cy.get(tvs_subMenuProd).click();
    }
    iClickOnAddToCartAtv() {
        cy.scroll(addToCartAtv);
        cy.get(addToCartAtv).click();
    }
    igetProtectYourPuchaseText() {
        return cy.get(protectYourPuchaseText)
    }
    iClikOnAdd3YearProtectionPlanBtn() {
        cy.get(add3YearProtectionPlanBtn).click()
        cy.wait(500)
    }
    iClikOnAdd5YearProtectionPlanBtn() {
        cy.get(add5YearProtectionPlanBtn).click()
        cy.wait(500)
    }

    igetProtectionPlanAppliedText() {
        return cy.get(protectionPlanAppliedText)
    }
}

export default ProtectionPlan;