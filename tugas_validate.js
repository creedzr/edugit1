///<reference types="cypress" />

describe('Automatte Api With pokeapi', () => {
    it('Validate Abilities', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('body').should((body) =>{
                 expect(body).to.have.property('abilities')// untuk mengecek ability

                 body.abilities.forEach((abilityObj) => {
                    expect(abilityObj).to.have.property('ability'); // untuk mengecek isian abilities pakai body.abilities
                    expect(abilityObj.ability).to.have.property('name');
                    expect(abilityObj.ability).to.have.property('url');

                 });
        });
        
    });
});