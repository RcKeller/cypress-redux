module.exports = function registerStore (store) {
  if (window.Cypress) {
    window.store = store
    if (process && process.env && process.env['NODE_ENV'] === 'development') {
      console.log('@rckeller/cypress-redux:', 'Store registered', window.store)
    }
  }
}
