const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I am on the Zero Bank homepage',() => {
    cy.visit('http://zero.webappsecurity.com');
});

When('I enter "online" in the search box and click the search button',() => {
    cy.get('#searchTerm').type('online {enter}');
   
});

Then('the search results page should display results relevant to "Zero - Online Statements"',() => {
    cy.get('h2').contains('Search Results:')
    cy.contains('The following pages were found for the query: online').should('exist')
    cy.get('a').contains('Zero - Online Statements').should('exist');
});