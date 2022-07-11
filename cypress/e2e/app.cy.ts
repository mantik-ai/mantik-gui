/// <reference types="cypress" />

describe('Main App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('is true every time', () => {
        expect(true).to.be.equal(true)
    })
})

export {}
