context('@rckeller/cypress-redux', () => {
  beforeEach(() => {
    cy.visit('cypress/pages/index.html')
      // .wait(5000)
  })

  describe('Redux', () => {
    it('can access the raw store', () => {
      cy.window()
        .its('store')
        .should('exist')
      cy.window().should('have.deep.property', 'store.getState')
      cy.window().should('have.deep.property', 'store.dispatch')
      cy.window().should('have.deep.property', 'store.replaceReducer')
      cy.window().should('have.deep.property', 'store.subscribe')
    })
  })
  
  describe('Custom Commands', () => {
    it('cy.store()', () => {
      cy
        .window()
        .its('store')
        .invoke('getState')
    })
    it('cy.dispatch()', () => {
      cy
        .window()
        .its('store')
        // .invoke('dispatch', {})
    })
  })
})
