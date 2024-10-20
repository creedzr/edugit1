Cypress.Commands.add('loginViaAPI', () => {
    const email = Cypress.env('userEmail');
    const password = Cypress.env('userPassword');
    
    cy.request('POST', `${Cypress.env('apiUrl')}/users/login`, {
      username: email,
      password: password
    }).then((response) => {
      cy.setCookie('sessionId', response.body.sessionId);
      cy.setCookie('userId', response.body.userId);
      cy.setCookie('userName', response.body.userName);
      cy.visit('/#!/main');
    });
  });
  