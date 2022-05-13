const helloTest = {
    html: `
    <div>Hello</div>
  `,
    test: `
    cy.get('div').should('have.text', 'Hello')
  `
}

it('tests hello', () => {
    cy.runExample(helloTest)
})