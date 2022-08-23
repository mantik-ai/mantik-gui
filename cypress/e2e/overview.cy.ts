/// <reference types="cypress" />

describe('Search', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4000/projects')
    })

    it('contains search string', () => {
        cy.get('#search-string')
            .click()
            .type('Testing is very nice')
            .should('have.value', 'Testing is very nice')
    })

    it('problem type is selectable', () => {
        cy.get('#problem-type-regression')
            .click()
            .children()
            .first()
            .children()
            .first()
            .should('have.value', 'true')
    })
})

describe('Linking of projects', () => {
    it('view details leads to project details', () => {
        cy.intercept(
            {
                method: 'GET',
                path: '**/search**',
            },
            {
                fixture: 'projects',
            }
        ).as('projectsStub')
        cy.visit('http://localhost:4000/projects')
        cy.wait('@projectsStub').then((interception) => {
            console.log('------------------------------')
            console.log(interception.state)
        })
        cy.fixture('projects').then((projects) => {
            cy.contains('view details')
                .click()
                .url()
                .should('include', projects[0].projectId)
        })
    })
})

export {}
