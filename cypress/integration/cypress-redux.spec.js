context('cypress-redux', () => {
  beforeEach(() => {
    cy.visit('cypress/pages/index.html')
  })

  describe('Redux', () => {
    it('can access the raw store', () => {
      cy.window().its('store').should('exist')
      cy.window().should('have.deep.property', 'store.getState')
      cy.window().should('have.deep.property', 'store.dispatch')
      cy.window().should('have.deep.property', 'store.replaceReducer')
      cy.window().should('have.deep.property', 'store.subscribe')
    })
  })

  describe('Custom Commands', () => {
    it('cy.store()', () => {
      cy.store().should('exist')
      cy.store().should('have.property', 'getState')
      cy.store().should('have.property', 'dispatch')
      cy.store().should('have.property', 'replaceReducer')
      cy.store().should('have.property', 'subscribe')
    })

    it('cy.getState()', () => {
      cy.getState().should('equal', 0)
    })

    it('cy.dispatch(action)', () => {
      cy
        .getState()
        .should('equal', 0)
      cy
        .dispatch({ type: 'INCREMENT' })
        .getState()
        .should('equal', 1)
    })

    // Please note, spies are currently NOT supported
    // This is because callbacks provided to redux's store.subscribe()
    // execute in a different JS "Sandbox", where your spy
    // is not registered (and window is not aware of Cypress)
    it.skip('cy.subscribe()', () => {
      const test = {
        callback: () => console.warn('CB')
      }
      // const spy = cy.spy(test, 'callback')
      cy.subscribe(test.callback)
      cy.get('#increment').click()
      cy.getState().should('equal', 1)
      // expect(spy).to.be.called
    })
  })

  describe('Basic Interactions', () => {
    it('can increment/decriment', () => {
      cy.get('#increment').click()
      cy.getState().should('equal', 1)
    })
  })
})
