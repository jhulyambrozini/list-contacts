/// <reference types="cypress" />

describe('Tests for Home', () => {
  beforeEach(() => {
    cy.visit('https://list-contacts-orpin.vercel.app/')
  })

  it('should render correctly', () => {
    cy.get('h1').should('have.text', 'AGENDA DECONTATOS')
  })
})
