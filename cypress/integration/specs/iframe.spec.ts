describe('Iframe test suite', () => {
    it('Iframe test case', () => {
        cy.visit(Cypress.env('baseUrl'));
        cy.get('#username').type(Cypress.env('usar'));
        cy.get('#password').type(Cypress.env('pazz'), { log: false });
        cy.contains('Login').click();
        cy.contains('Send us feedback').click();
        // example of using custom commands and iframes
        cy.getIframeBody().find('textarea').type('Thank you ! Robot')
        cy.getIframeBody().contains('Submit').should('be.visible');
    })
});
