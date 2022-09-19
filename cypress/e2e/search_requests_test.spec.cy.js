describe('Test search requests', () => {

  before(() => {
    cy.reachThePage()
  })

  beforeEach(() => {
    cy.initElements()
    cy.fillTheForm()
  })

  it('Form submit with correct request params', () => {
    cy.intercept('GET', 'https://aviasales-api.herokuapp.com/prices/cheap*', (request) => {
      expect(request.query.currency).to.equal('EUR')
      expect(request.query.depart_date).to.equal('2022-09-19')
      expect(request.query.destination).to.equal('PAR')
    })

    cy.get('@submitBtn').click()
  })

  it('Response display correct', () => {
    cy.intercept('GET', 'https://aviasales-api.herokuapp.com/prices/cheap*', { fixture: 'tickets.json' })
    cy.get('@submitBtn').click()
    cy.get('[data-tests=ticketsContainer]').as('ticketsContainer')
    cy.get('@ticketsContainer').find('.ticket-card').should('have.length', 2)
  })
})