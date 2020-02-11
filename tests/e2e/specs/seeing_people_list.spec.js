import people from '../../fixtures/people'

describe('Seeing list of people', () => {
  beforeEach(() => {
    if (Cypress.env('MOCK_REQUESTS')) {
      cy.server()
      cy.route('https://jsonplaceholder.typicode.com/users', people).as('users')
    }
  })

  it('Visits the app root url and seeing list of people', () => {
    cy.visit('/')
    cy.get('[data-test=people-list]').contains(people[0].name)
    cy.get('[data-test=people-list] tr').its('length').should('be', people.length + 1)
  })
})
