/// <reference path='./index.d.ts' />

/*
USAGE: in `support/index.(js|ts)`
import '@rckller/cypress-redux'
*/

Cypress.Commands.add('store', () => {
  return cy
    .log('Redux - Store')
    .window({ log: false })
    .its('store')
})

Cypress.Commands.add('getState', (node) => {
  return node
    ? cy
      .log(`Redux - state[${node}]`)
      .window({ log: false })
      .its('store')
      .invoke('getState')
      .its(node.toString())
    : cy
      .log('Redux - State')
      .window({ log: false })
      .its('store')
      .invoke('getState')
})

Cypress.Commands.add('dispatch', (action = { type: 'NO_OP' }) => {
  const { type, ...params } = action
  return cy
    .log(`Redux - Dispatch: ${type}`, params)
    .window({ log: false })
    .its('store')
    .invoke('dispatch', action)
})
