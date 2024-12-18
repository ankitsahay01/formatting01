import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

import AddToCart from '../pageObjects/addToCart';
const  cart=new AddToCart();

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
  
   //cart.clickOnContinueToCart();
    cart.clickOnCheckOut();
 });

 Then(`I shoud see Secure Checkout page`, () => {
    
});

When(`I click on continue as guest button`, () => {
   cart.clickOnContinueAsGuestBtn();
 });


 Then(`I should see process order button`, () => {
    cart.getprocessOrderBtnLocator().should('be.visible')
});


