given('I get into Selah Home page', () => {
  cy.visit('https://selah-dz.com/')
  cy.wait(5000)
  cy.log("Navigate to Selah-dz.com")


});

When('I click on the link article', () => {
  cy.wait(5000)
  cy.xpath('//*[contains(@class,"elementskit-menu-hamburger elementskit-menu-toggler")]', { timeout: 4000 }).click()
  cy.log("Menu had been Clicked on")

  cy.wait(5000)
  cy.xpath('(//*[contains(text(),"Articles")])[1]').click()
  cy.log("Articles had been checked")

  cy.wait(5000)

})

Then('check results', () => {
  cy.wait(5000)
  cy.xpath('(//*[contains(text(),"Computer Architecture")])[1]').should('be.visible')
  cy.log("Computer Architecture had been checked")

});

Then('Access to the first article', () => {
  cy.wait(5000)
  cy.xpath('(//*[contains(text(),"Computer Architecture")])[1]').click()
});





