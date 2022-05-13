const childrenTest = {
    html: `
    <ol class="traversal-breadcrumb breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
         <li class="breadcrumb-item"><a href="#">Library</a></li>
        <li class="breadcrumb-item active">Data</li>
    </ol>
  `,
    test: `
    cy.get('.traversal-breadcrumb')
      .children('.active')
      .should('contain', 'Data')
  `
}

it('Children() test', () => {
    cy.runExample(childrenTest)
})


const closestTest = {
    html: `
    <ul class="list-group">
        <li class="list-group-item">
            <span class="badge">14</span>
                Events
        </li>
         <li class="list-group-item">
               <span class="badge traversal-badge">54</span>
                Friends
           </li>
        </ul>
  `,
    test: `
    cy.get('.traversal-badge')
       .closest('ul')
       .should('have.class', 'list-group')
  `
}

it('Closest() test', () => {
    cy.runExample(closestTest)
})

const filterTest = {
    html: `
    <ul class="traversal-nav nav nav-tabs">
        <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" href="#">About</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
           </li>
        </ul>
  `,
    test: `
    cy.get('.traversal-nav > li a')
        .filter('.active')
        .should('contain', 'About')
  `
}

it('Filter() test', () => {
    cy.runExample(filterTest)
})

const parentUntiltest = {
    html: `
    <ul class="nav clothes-nav">
      <li>
        <a href="#">Clothes</a>
        <ul class="menu">
          <li>
            <a href="/shirts">Shirts</a>
          </li>
          <li class="active">
            <a href="/pants">Pants</a>
          </li>
        </ul>
      </li>
    </ul>
  `,
    test: `
    cy.get('.clothes-nav')
      .find('.active')
      .parentsUntil('.clothes-nav')
      .should('have.length', 2)
  `
}

it('parentUntiltest() test', () => {
    cy.runExample(parentUntiltest)
})

