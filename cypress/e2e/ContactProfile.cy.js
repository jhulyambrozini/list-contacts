/// <reference types="cypress" />

describe('Tests for Contact Profile', () => {
  beforeEach(() => {
    cy.visit('https://list-contacts-orpin.vercel.app/')
  })

  it('should take the user to the contact profile page', () => {
    const addContactButton = '.sc-grXZZQ'
    cy.get(addContactButton).click()
    cy.get('#firstName').should('be.visible')
  })

  it('should fill out the entire form correctly and save', () => {
    const addContactButton = '.sc-grXZZQ'
    cy.get(addContactButton).click()

    cy.get('#firstName').type('Ana')
    cy.get('#lastName').type('Gix')
    cy.get('#tel').type('11 9999-00002')
    cy.get('#email').type('anagiz@gmail.com')

    cy.get('.sc-grXZZQ').click()

    cy.get('h2').should('have.text', 'Ana Gix')
  })

  it('should edit contact first name and save', () => {
    const addContactButton = '.sc-grXZZQ'
    cy.get(addContactButton).click()

    cy.get('#firstName').type('Ana')
    cy.get('#lastName').type('Gix')
    cy.get('#tel').type('11 9999-00002')
    cy.get('#email').type('anagiz@gmail.com')

    const saveContactButton = '.sc-grXZZQ'
    cy.get(saveContactButton).click()

    const editContactButton = '.sc-fEyylQ > .sc-grXZZQ'
    cy.get(editContactButton).click()

    cy.get('#firstName').clear()
    cy.get('#firstName').type('Anabelle')

    const updateContactButton = '.sc-hLclGa'
    cy.get(updateContactButton).click()

    cy.get('h2').should('have.text', 'Anabelle Gix')
  })
  it('should delete existing contact', () => {
    const addContactButton = '.sc-grXZZQ'
    cy.get(addContactButton).click()

    cy.get('#firstName').type('Ana')
    cy.get('#lastName').type('Gix')
    cy.get('#tel').type('11 9999-00002')
    cy.get('#email').type('anagiz@gmail.com')

    const saveContactButton = '.sc-grXZZQ'
    cy.get(saveContactButton).click()

    const editContactButton = '.sc-fEyylQ > .sc-grXZZQ'
    cy.get(editContactButton).click()

    const deleteContactButton = '.sc-eDnVMP'
    cy.get(deleteContactButton).click()

    const confirmDelete = '[title="Confirmar excluir contato"]'
    cy.get(confirmDelete).click()

    cy.get('.sc-hHvkSs').should(
      'have.text',
      'Sua agenda está vazia, adicione novos contatos!'
    )
  })
})
