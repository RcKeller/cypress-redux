module.exports = function registerStore (store) {
  if (window.Cypress) {
    window.store = store
    if (process && process.env && process.env['NODE_ENV'] === 'development') {
      console.log('cypress-redux:', 'Store registered', window.store)
    }
  }
}
