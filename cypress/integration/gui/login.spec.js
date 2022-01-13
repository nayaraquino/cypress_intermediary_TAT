describe('Login', () => {
    it('Successfully', () => {
        cy.login()
        cy.get('.qa-user-avatar').should('exist')
    });
});