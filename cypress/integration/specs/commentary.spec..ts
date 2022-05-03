describe('Comment author happy path test', () => {

    it('Check author name', () => {
        cy.visit(Cypress.env('baseUrl'));
        cy.get('#username').type(Cypress.env('usar'));
        cy.get('#password').type(Cypress.env('pazz'), { log: false });
        cy.contains('Login').click();
        cy.contains('Futsal cup for IT').click();
        cy.get('#wc-comment-header').scrollIntoView();
        cy.contains('huge thanks').closest('.wc-comment-text').prev('.wc-comment-header').should((elem) => {
            expect(elem.text()).to.contains('Maxim');
        });
    })
})