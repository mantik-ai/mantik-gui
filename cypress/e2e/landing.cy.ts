/// <reference types="cypress" />

describe('Navbar', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4000')
    })

    it('navigates to project overview', () => {
        cy.contains('Projects').click()
        cy.url().should('include', '/projects')
    })

    it('navigates to docs', () => {
        cy.contains('Docs').click()
        cy.url().should('include', '/docs')
    })
})

export {}
