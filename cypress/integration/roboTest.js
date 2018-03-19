describe('Bucket2', () => {
  it('successfully loads', () => {
    cy.visit('/index.html')

    cy.get('#newButt').click(() => {
      cy.get('#text').should('contain', 'Text')

      cy.get('#roboName').should('contain', 'Text')
    })

    cy.get('#butt').click(() => {
        cy.get('#info').should('contain', 'Text')
    })

    cy.get('#butt').click(() => {
        cy.get('#info').should('not.have', 'Text')
    })

  })
})
