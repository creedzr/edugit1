///<reference types="cypress" />

describe('My First test', () => {
   it('clicking "type" shows the right headings', () => {
     cy.visit('https://example.cypress.io');
     cy.pause();
     cy.contains('type').click();
 
     // Check if the URL includes '/commands/actions'
     cy.url().should('include', '/commands/actions');
 
     // Get an input, type into it, and verify that values update
     cy.get('.action-email')
       .type('test@example.com')
       .should('have.value', 'test@example.com');
   });
 });
 