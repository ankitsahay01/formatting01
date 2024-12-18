const locationLink = '.mx-2 > .link';
const storeLocator = '#storeLocations > h2';



class StoreLocations {

    clickOnLocationLink() {
        return cy.get(locationLink).click();
    }

    getStoreLocator() {
        return cy.get(storeLocator);
    }
    clickOnZipCodeSubmitBtn(){
        cy.get(zipCodeSubmitBtn). click();
    }
}
export default StoreLocations;