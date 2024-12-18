const zipCodeTxt = '#zipCode0';
const zipCodeSubmitBtn = '.btn-dark.btn.mt-2';



class HomePage {

    getHomePageTitle() {
        return cy.title();
    }

    setZipCode(zipcode) {
        cy.wait(2000);
        cy.get(zipCodeTxt).type(zipcode);
    }
    clickOnZipCodeSubmitBtn() {
        cy.get(zipCodeSubmitBtn).click();
    }


}
export default HomePage;