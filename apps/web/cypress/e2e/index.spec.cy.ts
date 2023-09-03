describe('Index', () => {
  it('should render the page', () => {
    cy.visit('/')
    cy.get('body').contains('Please')

    cy.get("#loginLink").click()
    cy.url().should('include', '/auth')
  })
})
