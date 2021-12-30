class Youtube {


    naviguerversyoutube(){
        cy.visit ('http://www.herault.gouv.fr/booking/create/15253/2')
        cy.get('input[id="condition"]').click()
        cy.get('input[name="nextButton"]').click()
        cy.get('form[id="FormBookingCreate"]').should('not.exist')
 
     }
}export default Youtube