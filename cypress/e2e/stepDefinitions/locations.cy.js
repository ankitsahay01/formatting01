import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import StoreLocations from '../pageObjects/storeLocations';
import HomePage from '../pageObjects/homePage';
const storeLocations = new StoreLocations();
const homePage = new HomePage();

Given('I navigate to the rcwille homepage', () => {

  cy.visit('/');


});

When('I enter the Zip code {string}', (zipcode) => {
  //comment 


  homePage.setZipCode(zipcode);
  homePage.clickOnZipCodeSubmitBtn();
});

And('I click to locations link', () => {

  storeLocations.clickOnLocationLink();

});

Then('the locations should be:', (dataTable) => {

  const loc = dataTable.rawTable.map(row => row[0]);

  loc.forEach((element, index) => {
    storeLocations.getStoreLocator().eq(index).should('have.text', element);
  });



});
