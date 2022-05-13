it('Arrays example', () => {
    const deloFrikadelo = {
        "name": "CUKES generated deal",
        "isLatest": true,
        "version": 3,
        "currency": "USD",
        "statuses": [
            {
                "code": 123,
                "name": "Draft",
            },
            {
                "code": 234,
                "name": "Deleted",
            }
        ]
    }

    cy.wrap(deloFrikadelo)
        .its('statuses')
        .should('not.be.empty')
        // check full object
        .and('deep.include', {
            code: 234,
            name: 'Deleted',
        })

    

    cy.wrap(deloFrikadelo)
        .its('statuses')
        .should('not.be.empty')
        .then((list) => Cypress._.map(list, 'code'))
        .should('include', 123)
});

