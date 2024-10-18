describe('Create New User', () => {
    it('Succesfully create new user', () => {
        var user = {
            "name": "Eduwork",
            "job": "Education"
        }
    
        cy.request('POST','https://reqres.in/api/users', user).then((Response) => {
            expect(Response.status).equal(201)
            expect(Response.body).to.have.property('name', 'Eduwork') 
            expect(Response.body).to.have.property('job', 'Education') 
        })
    });
});