

describe('Form', () => {
  it('When visiting the home page, the form is visible', () => {
    cy.visit('http://localhost:9000/')
    cy.get('[data-tests=mainForm]').should('be.visible')
  })
  it('When user types a value into city autocmplete, this autocmplete is visible and has this value', () => {
    cy.get('[data-tests=autocompleteOrigin]').as('autocompleteOrigin')
    cy.get('@autocompleteOrigin').should('be.visible')
    cy.get('@autocompleteOrigin').type('Berlin')
    cy.get('@autocompleteOrigin').should('have.value', 'Berlin')
  })
  it('When user types a value into origin city autocmplete, this autocmplete is visible and has this value', () => {
    cy.get('[data-tests=autocompleteDestination]').as('autocompleteDestination')
    cy.get('@autocompleteDestination').should('be.visible')
    cy.get('@autocompleteDestination').type('Nice')
    cy.get('@autocompleteDestination').should('have.value', 'Nice')
  })
  it('When clicking on depart datepicker input, datepicker should be visible', () => {
    cy.get('[data-tests=datePickerDepartInput]').as('datePickerDepartInput')
    cy.get('[data-tests=datepickerDepartWrap] .datepicker-container').as('modalWindow')
    cy.get('@datePickerDepartInput').click()
    cy.get('@modalWindow').should('be.visible')
  })
})