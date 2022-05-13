beforeEach(function(){
    cy.visit(Cypress.env('baseUrl'));
    cy.login(Cypress.env('usar'), Cypress.env('pazz'));
})

it('Test multiple elements 1', () => {
    cy.get('#menu-main-menu li').first().should('have.text', 'Home');

    cy.get('#menu-main-menu').find('li').first().then((dd) => {
        const text = dd.text();
        debugger;
        expect(text).to.match(/Home/)
        expect(text).to.include('Home')
    });

    const expectedArray = ["Confluence", "Jira", "MyCTCo", "Task ODS", "Mail"]
    cy.contains('Tools').closest('li').find('li').should('have.length', 14).then((elements) => {
        elements
            .toArray()
            .map((el) => el.textContent)
            .forEach((t, i) => {
                expect(t).to.eq(expectedArray[i])
            })
    });
})