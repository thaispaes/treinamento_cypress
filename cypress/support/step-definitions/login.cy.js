Given('que acesso o Portal My Shop', () => {
    cy.visit('/')
})

When('realizo login no portal', () => {
    cy.acessaLogin()
    cy.logar()
})
