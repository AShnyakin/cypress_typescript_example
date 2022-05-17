let tempAlbums
before(() => {
    cy.fixture('albums.json').then((albums) => {
        tempAlbums = albums
    })
})
beforeEach(() => {
    cy.wrap(tempAlbums).as('albums')
})

it('Check response against local variable', function () {
    cy.request('https://jsonplaceholder.cypress.io/albums?userId=1')
        .its('body')
        .should('deep.equal', this.albums)
})