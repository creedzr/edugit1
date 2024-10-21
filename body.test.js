describe('Validate Headers', () => {
    it('Succesfully validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon');
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include','application/json; charset=utf-8');
    });

    it('Succesfully validate body-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('body').should((body) =>{
            expect(body).to.have.property('name', 'ditto'); 
            expect(body).to.have.property('order').and.be.a('number'); 
            expect(body).to.have.property('past_abilities').and.be.an('array'); 
            expect(body).to.have.property('past_types').and.be.an('array'); 
            expect(body).to.have.property('species'); 
            expect(body.species).to.have.property('name', 'ditto'); 
        
    });
});
});
