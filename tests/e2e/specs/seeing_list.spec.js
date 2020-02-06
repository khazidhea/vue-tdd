describe('Seeing list', () => {
  it('Visits the app root url and seeing list of people', () => {
    cy.visit('/')
    cy.get('[data-test=people-list]').should('exist')
  })
})
