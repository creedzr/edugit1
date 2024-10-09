/// <reference types="cypress" />

describe('Login/ Logout Test', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    });

    it('Should try login with invalid data and should display error message', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('input[name="submit"]').click()

        //should display error message
        cy.get('.alert.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
    });



    it('Should login to application with valid data and Should logout from the application', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)
            cy.get('#user_password').clear()
            cy.get('#user_password').type(password)
            cy.get('input[name="submit"]').click()
            cy.get('h2').should('contain.text', 'Cash Account')

            //Should logout from the application
            cy.contains('username').click()
            cy.get('#logout_link').click()
            cy.get('strong').should('contain.text','Home')


              // Assertion untuk memastikan logout berhasil
              cy.url().should('include', 'index.html')
              cy.get('#signin_button').should('be.visible')
        })
    });


}); 


