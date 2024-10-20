describe('Login Test', () => {
    it('Should login via API and redirect to the main page', () => {
      cy.loginViaAPI(); 
    });
  });
  