const BTN_ACESSA_LOGIN = '.login'


Cypress.Commands.add('acessaLogin', () => {
    cy.get(BTN_ACESSA_LOGIN).click()
})