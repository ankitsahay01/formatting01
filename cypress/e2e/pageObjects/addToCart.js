const furnitureMenu='#megaMenuLinks > :nth-child(2) > .btn'
// const beds_sub_menu='[href="//www.rcwilley.com/Furniture/Beds/Search"]'
const beds_sub_menu='[href="//rcwtest.rcwilley.com/Furniture/Beds/Search"]'
const Upholstered_Beds = '#shop-room > .tile-container > :nth-child(1) > .card > .card-body > .fs-6'
const AddToCart_Upholstered_Beds = ':nth-child(1) > .card > .card-footer > .w-100'
const addToCart='#ProductCardsContainer .col:nth-of-type(3) button'
const CheckOut = '#checkout'
//const continueToCart ='.btn.btn-dark.w-100'
//const CheckOut='#checkoutButton'
const ContinueAsGuestBtn= '#continueAsGuestButton'
const processOrderBtn='#finalSubmitButton2'

class AddToCart
{
clickOnFurnitureMenu()
{
cy .get(furnitureMenu).click();
}
clickOnBedsSubMenu()
{  
    cy.wait(200);
    cy.get(beds_sub_menu).click();
}

clickOnUpholstered_Beds()
{
    cy.scroll(Upholstered_Beds);
    cy.get(Upholstered_Beds).click();
}

clickOnAddToCart()
{
    cy.wait(200);
    //cy.scroll(AddToCart_Upholstered_Beds)
    //cy.get(AddToCart_Upholstered_Beds).click();
     cy.scroll(addToCart)
        cy.get(addToCart).click()
}
clickOnCheckOut()
{
    cy.wait(2000)
    cy.get(CheckOut).click();
}
    

// clickOnContinueToCart()
// {
//     cy.get(continueToCart).click();
// }
clickOnContinueAsGuestBtn()
{
    cy.wait(200);

cy.get(ContinueAsGuestBtn).click()
}

getprocessOrderBtnLocator()
{
    cy.scroll(processOrderBtn)
  return cy.get(processOrderBtn) 
}

}

export default AddToCart