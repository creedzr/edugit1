/// <reference types="cypress" />


describe('Working with inputs', () => {

    
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/login.html')
    });  
    
    

    it('visit the website ', () => {
       // cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
        
    });
// tanda # (untuk username)  .(untuk class)  
    it('Should fill username', () => {
      // cy.visit('http://zero.webappsecurity.com/login.html')
        cy.get('#user_login').clear()  // cari form login  username dan lakukan inspect elemen
        cy.get('#user_login').type('username') // mengketik username
    });

    it('Should fill password', () => {
        //cy.visit('http://zero.webappsecurity.com/login.html')
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password') //mengketik password
    });
    it('Should try to login', () => {
        //  cy.visit('http://zero.webappsecurity.com/login.html')
          cy.fixture("user").then(user => {
              const username = user.username
              const password = user.password
              cy.login(username, password)
  
              cy.Pays()
          })
          
      })

   
    });