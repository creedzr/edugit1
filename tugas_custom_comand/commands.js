// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    
    // Gunakan parameter 'username' dan 'password' yang diterima dari function
    cy.get('#user_login').clear()  
    cy.get('#user_login').type(username) // Masukkan parameter 'username'

    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type(password) // Masukkan parameter 'password'

    cy.get('input[name="submit"]').should('be.visible').click()
    cy.url().should('include', '/bank/account-summary.html');
})



Cypress.Commands.add('Pays', () =>{
    
    //menu pembayaran
    cy.get('#pay_bills_tab a').click()

    //ketik jumlah
    cy.get('#sp_amount').type('10000')


    //tanggal
    cy.get('#sp_date').type('2024-10-06'); // Mengisi tanggal manual
    cy.get('#sp_date').click(); // Membuka kalender
    cy.get('.ui-datepicker-calendar a').contains('6').click(); 

    //description
    cy.get('#sp_description').type('Bayar Kuliah')

    //klik submit
    cy.get('#pay_saved_payees').should('be.visible').click() 

})