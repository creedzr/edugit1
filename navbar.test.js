/// <reference types="cypress" />

describe('Navbar Test', () => {
    beforeEach(() => {
        
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('should display online banking', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
        cy.get('.span12').should('exist')
        cy.get('h1').should('contain.text', 'Online Banking')
    });

    it('should display feedback content', () => {
        cy.contains('Feedback').click();
        cy.url().should('include', 'feedback.html')

        cy.get('form').should('be.visible')

        cy.get('input[name="name"]').should('be.visible') 

        cy.get('input[name="email"]').should('exist')
    });

    it('should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').should('be.visible')
    });
});


