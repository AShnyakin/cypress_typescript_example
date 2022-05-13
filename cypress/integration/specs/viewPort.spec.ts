describe('ViewPort test suite', () => {
    it('Iphone', () => {
        console.log('see.. this function is run EACH time');
        cy.viewport('iphone-se2');
        cy.visit(Cypress.env('baseUrl'));
        cy.get('#username').type(Cypress.env('usar'));
        cy.get('#password').type(Cypress.env('pazz'), { log: false });
        cy.contains('Login').click();
        cy.get('#profile > .avatar-block').click();
        const userName = Cypress.env('usar').replace('.', "-");
        cy.get('.user-nicename').contains(userName);
        cy.get('.user-nicename').contains(userName).should((elem) => {
            expect(elem.text()).to.equal('@' + userName);
        });
    })

    it('720p', () => {
        console.log('see.. this function is run EACH time');
        cy.viewport(1280, 720);
        cy.visit(Cypress.env('baseUrl'));
        cy.get('#username').type(Cypress.env('usar'));
        cy.get('#password').type(Cypress.env('pazz'), { log: false });
        cy.contains('Login').click();
        cy.get('#profile > .avatar-block').click();
        const userName = Cypress.env('usar').replace('.', "-");
        cy.get('.user-nicename').contains(userName);
        cy.get('.user-nicename').contains(userName).should((elem) => {
            expect(elem.text()).to.equal('@' + userName);
        });
    })

    it('samsung', () => {
        console.log('see.. this function is run EACH time');
        cy.viewport('samsung-s10');
        cy.visit(Cypress.env('baseUrl'));
        cy.get('#username').type(Cypress.env('usar'));
        cy.get('#password').type(Cypress.env('pazz'), { log: false });
        cy.contains('Login').click();
        cy.get('#profile > .avatar-block').click();
        const userName = Cypress.env('usar').replace('.', "-");
        cy.get('.user-nicename').contains(userName);
        cy.get('.user-nicename').contains(userName).should((elem) => {
            expect(elem.text()).to.equal('@' + userName);
        });
    })

});