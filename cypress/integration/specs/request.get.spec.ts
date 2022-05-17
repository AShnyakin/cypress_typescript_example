describe('Cy request examples', () => {
    it('Get Example', () => {
        cy.request('https://jsonplaceholder.cypress.io/comments').should(
            (response) => {
                expect(response.status).to.eq(200)
                expect(response.body)
                    .to.have.property('length')
                    .and.be.eq(500)
                expect(response).to.have.property('headers')
                expect(response).to.have.property('duration')
            },
        )
    })

    it('Assert a returned header', () => {
        cy.request('https://jsonplaceholder.cypress.io/todos/1')
            .its('headers')
            .then((responseHeaders) => {
                expect(responseHeaders).to.have.property(
                    'x-powered-by',
                    'Express',
                )
            })
    })

    it('Request with query parameters', () => {
        cy.request({
            url: 'https://jsonplaceholder.cypress.io/comments?postId=1&id=3',
            /*qs: {
                postId: 1,
                id: 3,
            },*/
        })
            .its('body')
            .should('be.an', 'array')
            .and('have.length', 1)
            .its('0') // yields first element of the array
            .should('contain', {
                postId: 1,
                id: 3,
            })
    })

    it('Request with query parameters', () => {
        cy.request({
            url: 'https://jsonplaceholder.cypress.io/comments?postId=1&id=3',
            /*qs: {
                postId: 1,
                id: 3,
            },*/
        })
            .its('body')
            .should('be.an', 'array')
            .and('have.length', 1)
            .its('0') // yields first element of the array
            .should('contain', {
                postId: 1,
                id: 3,
            })
    })

    it('Request using fixtures as response', () => {
        cy.request('https://jsonplaceholder.cypress.io/albums?userId=1')
            .its('body')
            .then((body) => {
                cy.fixture('albums.json').should('deep.equal', body)
            })
    })

    it('Request using fixtures as response, but get fixture first', () => {
        cy.fixture('albums.json').then((albums) => {
            cy.request('https://jsonplaceholder.cypress.io/albums?userId=1')
                .its('body')
                .should('deep.equal', albums)
        })
    })
});