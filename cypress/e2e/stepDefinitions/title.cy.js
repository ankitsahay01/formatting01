import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../pageObjects/homePage';
const homepage=new HomePage();
Given('I navigate to the rcwille homepage', () => {
    cy.visit('/');
});

Then('the title should be {string}', (expectedTitle) => {
    homepage.getHomePageTitle().should('eq', expectedTitle);
   
});

Then('Unkonown', () => {
    
   
});
