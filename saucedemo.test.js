/// <reference types="cypress" />

describe('Test Sauce Demo', () => {
    
    // Lakukan login di setiap test
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com")
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('include', '/inventory.html')
    });  

   it('Memastikan dapat mengunjungi halaman inventory', () => {
        cy.url().should('include', '/inventory.html'); // Pastikan sudah login dan di halaman inventory
    });

    it('Menambahkan barang lalu melakukan check out, pengisisan alamat dan pemabayaran', () => {
        // Klik produk berdasarkan nama
        cy.contains('.inventory_item_name', 'Sauce Labs Backpack').click()

        // Klik tombol "Add to Cart" yang spesifik untuk produk
        cy.get('[data-test="add-to-cart"]').click()

        // Pastikan barang berhasil ditambahkan ke keranjang
        cy.get('.shopping_cart_badge').should('exist').and('contain', '1')


         // Klik icon keranjang belanja
         cy.get('[data-test="shopping-cart-link"]').click()

         // Pastikan navigasi ke halaman keranjang berhasil
         cy.url().should('include', '/cart.html')
 
         // Memastikan item yang ditambahkan ada di dalam keranjang
         cy.get('.cart_item .inventory_item_name').should('contain', 'Sauce Labs Backpack')


         //melakukan checkout
         cy.get('[data-test="checkout"').click()

         //pastikan navigasi ke halaman check out berhasil
         cy.url().should('include', '/checkout-step-one.html')


         // melakukan pengisian alamat
         
         cy.get('#first-name').clear()
         cy.get('#first-name').type('Agum')  //pengisian Nama depan

         cy.get('#last-name').clear()
         cy.get('#last-name').type('Ruswandi')  // pengisian Nama Belakang

         cy.get('#postal-code').clear()
         cy.get('#postal-code').type('43157') // pengisian zip code


        //melakukan continue ke tahap berikutnya
         cy.get('[data-test="continue"').click() 
         


        //pastikan checkout kehalaman payment berhasil
        cy.url().should('include', '/checkout-step-two.html')

        // melakukan finish payment
        cy.get('[data-test="finish"').click()
        cy.get('h2').should('be.visible')


        
    });
});