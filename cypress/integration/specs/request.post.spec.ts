describe('Cy request examples', () => {
    it('Multiple requests with POST Example', () => {
        cy.request('https://jsonplaceholder.cypress.io/users?_limit=1')
            .its('body') // yields the response object
            .its('0') // yields the first element of the returned list
            // the above two commands its('body').its('0')
            // can be written as its('body.0')
            // if you do not care about TypeScript checks
            .then((user) => {
                expect(user).property('id').to.be.a('number')
                // make a new post on behalf of the user
                cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
                    userId: user.id,
                    title: 'Cypress Test Runner',
                    body:
                        'Fast, easy and reliable testing for anything that runs in a browser.',
                })
            })
            // note that the value here is the returned value of the 2nd request
            // which is the new post object
            .then((response) => {
                expect(response).property('status').to.equal(201) // new entity created
                expect(response).property('body').to.contain({
                    title: 'Cypress Test Runner',
                })
                // we don't know the exact post id - only that it will be > 100
                // since JSONPlaceholder has built-in 100 posts
                expect(response.body)
                    .property('id')
                    .to.be.a('number')
                    .and.to.be.gt(100)
                // we don't know the user id here - since it was in above closure
                // so in this test just confirm that the property is there
                expect(response.body).property('userId').to.be.a('number')
            })
    })
});